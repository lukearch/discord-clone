import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    border: 0;
  }

  body {
    background-color: ${props => props.theme.colors.background.default};
  }
`;

export default GlobalStyles;
