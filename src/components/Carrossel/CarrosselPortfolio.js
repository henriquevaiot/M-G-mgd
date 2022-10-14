import React from "react";
import Carousel from 'react-elastic-carousel';
/* import './styles' */
import {
  Item1,
  Item2,
  Item3,
  Item4,
  Item5
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
      <TitlePortfólio>Portfólio</TitlePortfólio>
      <ContainerBoxCarrosel>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            <Item1></Item1>
            <Item2></Item2>
            <Item3></Item3>
            <Item4></Item4>
            <Item5></Item5>
          </Carousel>
        </div>
      </ContainerBoxCarrosel>
    </>
  );
}
export default CarrosselPortfolio