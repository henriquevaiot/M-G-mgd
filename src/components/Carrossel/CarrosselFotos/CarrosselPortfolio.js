import React from "react";
import Carousel from 'react-elastic-carousel';
/* import './styles' */
import Item from './Item'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];
  
  function CarrosselPortfolio() {
    return (
      <>
        <h1>Portfólio</h1>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            <Item>Um</Item>
            <Item>Dois</Item>
            <Item>Três</Item>
            <Item>Quatro</Item>
            <Item>Cinco</Item>
            <Item>Seis</Item>
            <Item>Sete</Item>
            <Item>Oito</Item>
          </Carousel>
        </div>
      </>
    );
  }
export default CarrosselPortfolio