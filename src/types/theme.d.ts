import 'styled-components';
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string;
    colors: {
      pallete: {
        primary: string;
      };
      background: {
        default: string;
      };
    };
  }
}
