import React from "react";
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

import {ContainerBoxCarrosel, TitlePortfólio} from './styles'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CarrosselPortfolio() {
  return (
    <>
    <DivTitle>
      <TitlePortfólio>Portfólio</TitlePortfólio>
    </DivTitle>
      <ContainerBoxCarrosel>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            <Item1></Item1>
            <Item2></Item2>
            <Item3></Item3>
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