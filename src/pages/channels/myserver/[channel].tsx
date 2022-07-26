import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement, useState } from 'react';

import Chat from '../../../components/Chat';
import Layout from '../../../components/Layout';
import MembersPanel from '../../../components/MembersPanel';
import ServerHeader from '../../../components/ServerHeader';
import * as S from '../../../styles/pages/channel';
import { Message } from '../../../types/message';

export const Channel = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const router = useRouter();
  const { channel } = router.query;

  return (
    <>
      <Head>
        <title>{channel}</title>
      </Head>
      <S.ChannelPageContainer>
        <ServerHeader />
        <S.ChannelContent>
          <Chat messages={messages} setMessages={setMessages} />
          <MembersPanel />
        </S.ChannelContent>
      </S.ChannelPageContainer>
    </>
  );
};

Channel.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Channel;
