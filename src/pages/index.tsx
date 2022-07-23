import { ReactElement } from 'react';
import Layout from '../components/Layout';

const Home = () => {
  return <></>;
};

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Home;
