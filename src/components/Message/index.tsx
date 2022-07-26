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

  let hours =
    message.createdAt.getHours() < 10
      ? `0${message.createdAt.getHours()}`
      : message.createdAt.getHours();
  let minutes =
    message.createdAt.getMinutes() < 10
      ? `0${message.createdAt.getMinutes()}`
      : message.createdAt.getMinutes();
  let day =
    message.createdAt.getDate() < 10
      ? `0${message.createdAt.getDate()}`
      : message.createdAt.getDate();
  let month =
    message.createdAt.getMonth() < 10
      ? `0${message.createdAt.getMonth()}`
      : message.createdAt.getMonth();
  let year = message.createdAt.getFullYear();

  if (message.createdAt.getDate() === currentDay.getDate()) {
    messageTime = `Hoje às ${hours}:${minutes}`;
  } else if (message.createdAt.getDate() === currentDay.getDate() - 1) {
    messageTime = `Ontem às ${hours}:${minutes}`;
  } else {
    messageTime = `${day}/${month}/${year}`;
  }

  return (
    <>
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
    </>
  );
};

export default MessageText;
