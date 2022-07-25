import ChannelCategory from '../ChannelCategory';
import ProfileMenu from '../ProfileMenu';
import TextChannel from '../TextChannel';
import * as S from './styles';

type Props = {
  serverName: string;
};

const ServerPanel = ({ serverName }: Props) => {
  return (
    <S.PanelContainer>
      <S.ServerHeader>
        <h1>{serverName}</h1>
      </S.ServerHeader>
      <S.ServerChannels>
        <ChannelCategory categoryName="text channels">
          <TextChannel channelName="geral" />
          <TextChannel channelName="teste" />
        </ChannelCategory>
      </S.ServerChannels>
      <ProfileMenu />
    </S.PanelContainer>
  );
};

export default ServerPanel;
