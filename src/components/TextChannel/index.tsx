import * as S from './styles';

type Props = {
  channelName: string;
};

const TextChannel = ({ channelName }: Props) => {
  return (
    <S.Channel>
      <S.ChannelIcon>
        <svg
          width="18"
          height="17"
          viewBox="0 0 18 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <S.Path
            d="M4.02167 16L4.77817 12.25M4.77817 12.25L6.29117 4.75M4.77817 12.25H1.5M4.77817 12.25H12.2404M6.29117 4.75L7.04767 1M6.29117 4.75H3.013M6.29117 4.75H16.63M12.2404 12.25H15.117M12.2404 12.25L11.5867 16M12.2404 12.25L14.6127 1"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </S.ChannelIcon>
      <span>{channelName}</span>
    </S.Channel>
  );
};

export default TextChannel;
