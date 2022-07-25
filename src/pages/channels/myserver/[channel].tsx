import Head from 'next/head';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';
import Layout from '../../../components/Layout';
import ServerHeader from '../../../components/ServerHeader';
import * as S from '../../../styles/pages/channel';

export const Channel = () => {
  const router = useRouter();
  const { channel } = router.query;

  return (
    <>
      <Head>
        <title>{channel}</title>
      </Head>
      <S.ChannelPageContainer>
        <ServerHeader />
      </S.ChannelPageContainer>
    </>
  );
};

Channel.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Channel;
