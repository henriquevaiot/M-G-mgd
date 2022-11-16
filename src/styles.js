import { createGlobalStyle } from 'styled-components';

import Signika from './fonts/Signika.ttf'
import Chapaza from './fonts/Chapaza.ttf'
import LemonMilk from './fonts/LemonMilk.ttf'
import LemonRegular from './fonts/LEMONMILK-REGULAR.OTF'
import Umumu from './fonts/UMUNU.OTF'

export default createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  width: 100%;
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
@font-face {
  font-family: 'Chapaza';
        src: local('Chapaza'), local('Chapaza'),
        url(${Chapaza}) format('truetype');
        font-style: normal;
}
@font-face {
  font-family: 'Umumu';
        src: local('Umumu'), local('Umumu'),
        url(${Umumu}) format('opentype');
        font-style: normal;
}
@font-face {
  font-family: 'LemonRegular';
        src: local('LemonRegular'), local('LemonRegular'),
        url(${LemonRegular}) format('opentype');
        font-style: normal;
}
`


/* LEMONMILK-Bold */