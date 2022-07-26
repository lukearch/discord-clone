import Image from 'next/image';
import { Message } from '../../types/message';
import { Profile } from '../../types/profile';
import * as S from './styles';

type Props = {
  profile: Profile;
  message: Message;
  onLoad: () => void;
};

const MessageText = ({ profile, message, onLoad }: Props) => {
  const currentDay = new Date();
  let messageTime;

  if (message.createdAt.getDate() === currentDay.getDate()) {
    messageTime = `Hoje às ${message.createdAt.getHours()}:${message.createdAt.getMinutes()}`;
  } else if (message.createdAt.getDate() === currentDay.getDate() - 1) {
    messageTime = `Ontem às ${message.createdAt.getHours()}:${message.createdAt.getMinutes()}`;
  } else {
    messageTime = `${message.createdAt.getDate()}/${message.createdAt.getMonth()}/${message.createdAt.getFullYear()}`;
  }

  return (
    <S.MessageContainer onLoad={onLoad}>
      <S.Avatar>
        <Image src={profile.avatar} width={40} height={40} alt="" />
      </S.Avatar>
      <S.MessageInfo>
        <S.MessageInfoText>
          <S.ProfileName>{profile.name}</S.ProfileName>
          <S.MessageInfoTime>{messageTime}</S.MessageInfoTime>
        </S.MessageInfoText>
        <S.MessageText>{message.text}</S.MessageText>
      </S.MessageInfo>
    </S.MessageContainer>
  );
};

export default MessageText;
