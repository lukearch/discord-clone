import { useEffect, useState } from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';
import useDarkMode from 'use-dark-mode';
import dark from '../../styles/themes/dark';
import light from '../../styles/themes/light';

type ThemeSwitcherProps = {
  children: React.ReactNode;
};

const ThemeSwitcher = ({ children }: ThemeSwitcherProps) => {
  const { value } = useDarkMode(false);
  const [mounted, setMounted] = useState(false);
  const theme: DefaultTheme = value ? dark : light;

  useEffect(() => {
    setMounted(true);
  }, []);

  const content = <ThemeProvider theme={theme}>{children}</ThemeProvider>;

  if (!mounted) return <div style={{ visibility: 'hidden' }}>{content}</div>;

  return content;
};

export default ThemeSwitcher;
