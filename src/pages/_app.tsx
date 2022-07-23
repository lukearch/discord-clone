import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement } from 'react';
import ThemeSwitcher from '../components/ThemeSwitcher';
import GlobalStyles from '../styles/globals';

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => NextPage;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? (page => page);
  return (
    <ThemeSwitcher>
      <>
        <GlobalStyles />
        {getLayout(<Component {...pageProps} />)}
      </>
    </ThemeSwitcher>
  );
};

export default MyApp;
