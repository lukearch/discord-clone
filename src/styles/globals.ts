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
    font-family: 'Whitney', sans-serif;
  }

  span, h1, h2, h3, h4, h5, h6 {
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
    -moz-user-select: none; 
    -ms-user-select: none; 
    user-select: none;
  }
`;

export default GlobalStyles;
