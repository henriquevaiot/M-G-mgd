import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* background: red; */
    font-family: Open-Sans, Helvetica, Sans-Serif;
    /* background-image: url("../assets/bg.png"); */
  }
  @font-face {
  font-family: 'LEMONMILK-Regular';
  src: local('LEMONMILK-Regular'), url(./fonts/LEMONMILK-Regular.otf) format('OpenType');
}
`;

export default GlobalStyle;