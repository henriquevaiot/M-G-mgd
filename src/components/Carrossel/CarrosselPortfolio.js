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
  DivTitle
} from './Item'

import { ContainerBoxCarrosel, TitlePortfólio } from './styles'

import FsLightbox from "fslightbox-react";

import photo1 from '../../assets/portfolio/items1/1.png'
import photo2 from '../../assets/portfolio/items1/2.png'
import photo3 from '../../assets/portfolio/items1/3.png'
import photo4 from '../../assets/portfolio/items1/4.png'

import p1 from '../../assets/portfolio/items2/5.png'
import p2 from '../../assets/portfolio/items2/6.png'
import p3 from '../../assets/portfolio/items2/7.png'
import p4 from '../../assets/portfolio/items2/8.png'
import p5 from '../../assets/portfolio/items2/9.png'

import m1 from '../../assets/portfolio/items3/11.png'
import m2 from '../../assets/portfolio/items3/12.png'
import m3 from '../../assets/portfolio/items3/13.png'

import c1 from '../../assets/portfolio/items4/14.png'
import c2 from '../../assets/portfolio/items4/15.png'
import c3 from '../../assets/portfolio/items4/16.png'
import c4 from '../../assets/portfolio/items4/17.png'
import c5 from '../../assets/portfolio/items4/18.png'

import d1 from '../../assets/portfolio/items5/19.png'
import d2 from '../../assets/portfolio/items5/20.png'
import d3 from '../../assets/portfolio/items5/21.png'
import d4 from '../../assets/portfolio/items5/22.png'
import d5 from '../../assets/portfolio/items5/23.png'
import d6 from '../../assets/portfolio/items5/24.png'

import b1 from '../../assets/portfolio/items6/25.png'
import b2 from '../../assets/portfolio/items6/26.png'
import b3 from '../../assets/portfolio/items6/27.png'
import b4 from '../../assets/portfolio/items6/28.png'
import b5 from '../../assets/portfolio/items6/29.png'
import b6 from '../../assets/portfolio/items6/30.png'

import a1 from '../../assets/portfolio/items7/1.png'
import a2 from '../../assets/portfolio/items7/2.png'
import a3 from '../../assets/portfolio/items7/3.png'
import a4 from '../../assets/portfolio/items7/4.png'


const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function CarrosselPortfolio() {

  const [toggler1, setToggler1] = useState(false);
  const [toggler2, setToggler2] = useState(false);
  const [toggler3, setToggler3] = useState(false);
  const [toggler4, setToggler4] = useState(false);
  const [toggler5, setToggler5] = useState(false);
  const [toggler6, setToggler6] = useState(false);
  const [toggler7, setToggler7] = useState(false);

  return (
    <>
      <FsLightbox
        toggler={toggler1}
        sources={[photo1, photo2, photo3, photo4]}
      />
      <FsLightbox
        toggler={toggler2}
        sources={[p1, p2, p3, p4, p5]}
      />
      <FsLightbox
        toggler={toggler3}
        sources={[m1, m2, m3]}
      />
      <FsLightbox
        toggler={toggler4}
        sources={[c1, c2, c3, c4, c5]}
      />
      <FsLightbox
        toggler={toggler5}
        sources={[d1, d2, d3, d4, d5, d6]}
      />
      <FsLightbox
        toggler={toggler6}
        sources={[b1, b2, b3, b4, b5, b6]}
      />
      <FsLightbox
        toggler={toggler7}
        sources={[a1,a2,a3,a4]}
      />
      <DivTitle>
        <TitlePortfólio>Portfólio</TitlePortfólio>
      </DivTitle>
      <ContainerBoxCarrosel>
        <div className="App">
          <Carousel breakPoints={breakPoints}>
            <Item1 onClick={() => setToggler1(!toggler1)}></Item1>
            <Item2 onClick={() => setToggler2(!toggler2)}></Item2>
            <Item3 onClick={() => setToggler3(!toggler3)}></Item3>
            <Item4 onClick={() => setToggler4(!toggler4)}></Item4>
            <Item5 onClick={() => setToggler5(!toggler5)}></Item5>
            <Item6 onClick={() => setToggler6(!toggler6)}></Item6>
            <Item7 onClick={() => setToggler7(!toggler7)}></Item7>
          </Carousel>
        </div>
      </ContainerBoxCarrosel>
    </>
  );
}
export default CarrosselPortfolio