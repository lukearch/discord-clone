import Head from 'next/head';
import { ReactElement } from 'react';

import Layout from '../../components/Layout';

const MyServer = () => {
  return (
    <Head>
      <title>Discord Clone | My Server</title>
    </Head>
  );
};

MyServer.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default MyServer;
