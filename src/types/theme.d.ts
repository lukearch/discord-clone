import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      pallete: {
        azoxo: string;
        white: string;
        fucsia: string;
        red: string;
        green: string;
        yellow: string;
        black: string;
      };
      background: {
        default: string;
        secondary: string;
        terciary: string;
      };
    };
  }
}
