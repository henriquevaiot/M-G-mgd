import React, { useState } from "react";
import Carousel from 'react-elastic-carousel';
/* import './styles' */
import {
  Item1,
  Item2,
  Item3,
  Item4,
  Item5,
  Item6,
  Item7,
  Item8,
  Item9,
  Item10,
  Item11,
  Item12,
  Item13,
  Item14,
  Item15,
  Item16,
  Item17,
  Item18,
  Item19,
  Item20,
  Item21,
  Item22,
  Item23,
  Item24,
  Item25,
  DivTitle
} from './Item'

import photo from '../../assets/portfolio/1.png'
import photo1 from '../../assets/portfolio/2.png'
import photo2 from '../../assets/portfolio/3.png'
import photo3 from '../../assets/portfolio/4.png'
import photo4 from '../../assets/portfolio/5.png'
import photo5 from '../../assets/portfolio/6.png'
import photo6 from '../../assets/portfolio/7.png'
import photo7 from '../../assets/portfolio/8.png'
import photo8 from '../../assets/portfolio/9.png'
import photo9 from '../../assets/portfolio/10.png'
import photo10 from '../../assets/portfolio/11.png'
import photo11 from '../../assets/portfolio/12.png'
import photo12 from '../../assets/portfolio/13.png'
import photo13 from '../../assets/portfolio/14.png'
import photo14 from '../../assets/portfolio/15.png'
import photo15 from '../../assets/portfolio/16.png'
import photo16 from '../../assets/portfolio/17.png'
import photo17 from '../../assets/portfolio/18.png'
import photo18 from '../../assets/portfolio/19.png'
import photo19 from '../../assets/portfolio/20.png'
import photo20 from '../../assets/portfolio/21.png'
import photo21 from '../../assets/portfolio/22.png'
import photo22 from '../../assets/portfolio/23.png'
import photo23 from '../../assets/portfolio/24.png'
import photo24 from '../../assets/portfolio/25.png'
import photo25 from '../../assets/portfolio/26.png'
import photo26 from '../../assets/portfolio/27.png'
import photo27 from '../../assets/portfolio/28.png'
import photo28 from '../../assets/portfolio/29.png'
import photo29 from '../../assets/portfolio/30.png'
import photo30 from '../../assets/portfolio/31.png'
import photo31 from '../../assets/portfolio/32.png'
import photo32 from '../../assets/portfolio/33.png'



import { ContainerBoxCarrosel, TitlePortfólio } from './styles'

import FsLightbox from "fslightbox-react";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CarrosselPortfolio() {

  const [toggler, setToggler] = useState(false);

  return (
    <>
      {/* <button onClick={() => setToggler(!toggler)}>
        Open the lightbox.
      </button> */}
      <FsLightbox
        toggler={toggler}
        sources={[
          photo, photo1, photo2, photo3, photo4, photo5, photo6, photo7, photo8,photo9,photo10,photo11,
          photo12, photo13, photo14, photo15, photo16, photo17, photo18, photo19, photo20, photo21, photo22, photo23,
          photo24, photo25, photo26, photo27, photo28,photo29,photo30, photo31, photo32
        ]}
      />
      <DivTitle>
        <TitlePortfólio>Portfólio</TitlePortfólio>
      </DivTitle>
      <ContainerBoxCarrosel onClick={() => setToggler(!toggler)}>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            <Item1></Item1>
            <Item2></Item2>
            <Item4></Item4>
            <Item5></Item5>
            <Item6></Item6>
            <Item7></Item7>
            <Item8></Item8>
            <Item9></Item9>
            <Item10></Item10>
            <Item11></Item11>
            <Item12></Item12>
            <Item13></Item13>
            <Item14></Item14>
            <Item15></Item15>
            <Item16></Item16>
            <Item17></Item17>
            <Item18></Item18>
            <Item19></Item19>
            <Item20></Item20>
            <Item21></Item21>
            <Item22></Item22>
            <Item23></Item23>
            <Item24></Item24>
            <Item25></Item25>
          </Carousel>
        </div>
      </ContainerBoxCarrosel>
    </>
  );
}
export default CarrosselPortfolio