import { createGlobalStyle } from 'styled-components';

import Signika from './fonts/Signika.ttf'
import Chapaza from './fonts/Chapaza.ttf'
import LemonMilk from './fonts/LemonMilk.ttf'

export default createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  /* background: red; */
  font-family: Open-Sans,Signika, Helvetica, Sans-Serif;
  /* background-image: url("../assets/bg.png"); */
}
@font-face {
  font-family: 'LemonMilk';
        src: local('LemonMilk'), local('LemonMilk'),
        url(${LemonMilk}) format('truetype');
        font-style: normal;
}
`


/* LEMONMILK-Bold */