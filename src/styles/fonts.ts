import { createGlobalStyle } from 'styled-components';

const Fonts = createGlobalStyle`
  @font-face {
    font-family: 'Whitney';
    font-style: normal;
    font-weight: 300;
    src: url('/fonts/whitneylight.otf');
  }

  @font-face {
    font-family: 'Whitney';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/whitneymedium.otf');
  }

  @font-face {
    font-family: 'Whitney';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/whitneysemibold.otf');
  }

  @font-face {
    font-family: 'Whitney';
    font-style: normal;
    font-weight: 700;
    src: url('/fonts/whitneybold.otf');
  }
`;

export default Fonts;
