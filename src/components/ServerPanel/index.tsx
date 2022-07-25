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
        <S.HeaderArrow>
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <S.Path d="M4 6L9 11L14 6" strokeLinejoin="round" />
          </svg>
        </S.HeaderArrow>
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
