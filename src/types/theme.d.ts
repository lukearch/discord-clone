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
        gray: string;
      };
      background: {
        default: string;
        input: string;
        darker: string;
        secondary: string;
        terciary: string;
        quaternary: string;
      };
      text: {
        default: string;
        secondary: string;
      };
    };
  }
}
