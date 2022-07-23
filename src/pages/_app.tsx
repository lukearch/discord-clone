import type { AppProps } from 'next/app';
import ThemeSwitcher from '../components/ThemeSwitcher';
import GlobalStyles from '../styles/globals';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeSwitcher>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeSwitcher>
  );
};

export default MyApp;
