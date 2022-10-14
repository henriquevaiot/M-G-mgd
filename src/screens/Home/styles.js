import styled from "styled-components";
import img from '../../assets/bgwallpaper.jpg'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'
import detail2 from '../../assets/detail2.png'
import bgquad from '../../assets/bgquad.jpg'
import bgBalance from '../../assets/bgBalance.jpg'
import detailEsp from '../../assets/detailEsp.png'
import fabrica from '../../assets/fabrica.jpg'
import photo from '../../assets/photo.jpg'
import photo2 from '../../assets/photo2.jpg'
import px2vw from "../../utils/px2vw";

import { rgba } from 'polished'


export const Container = styled.div``
export const HomeContainer = styled.div`
    background-image: url(${img});
    background-size: 100% auto;
    background-repeat: no-repeat;
`
export const ContainerMovie = styled.div`
    height: 855px;
    margin-top: 10px;
    background-image: url(${bg2});
    background-position: top center;
    background-size: 100% auto;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
`
export const ContainerBlocoSubscription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`
export const ContainerGlobalForm = styled.div`
    background-image: url(${detail2});
    background-position: top center;
    background-size: 100% auto;
    position: relative;
    background-repeat: no-repeat;
`
export const ContainerInform = styled.div`
    background-color: teal;
    height:  1080px;
    background-image: url(${bg3});
    background-position: top center;
    background-size: 110% auto;
    background-repeat: no-repeat;
    margin-top: 10px;
`
export const ContText = styled.div`
    height: 635px;
    width: 750px;
    background-color: #0787B5;
    padding: 10px;
`
export const BoxTitle = styled.div`
    width: 490px;
    margin-left: 80px;
    margin-top: 80px;
    letter-spacing: 5;
`
export const ContSubscription = styled.div`
    height: 150px;
    width: 750px;
    background-color: ${rgba('#fff', 0.6)};
    padding: 10px;
    display: flex;
    align-items: center;
`
export const ContAndSubscription = styled.div`
    height: 254px;
    width: 750px;
    background-color:#CADBF2;
    display: flex;
    align-items: center;
    justify-content: end;
`
export const ContFormText = styled.div`
    height: 723px;
    width: 20px;
    background-color: #fff;
`
export const Title = styled.text`
    color: #fff;
    font-size: 68px;
    font-family: Chapaza, serif;
    line-height: 65px;
`
export const ContabainerCircle = styled.div`
    width: 85%;
    height: 400px;
    /* background-color: red; */
    align-items: center;
    display: flex;
    justify-content: end;
`
export const Circle = styled.div`
    height: 340px;
    width: 340px;
    border-radius: 175px;
    background-color: ${rgba('#606B84', 0.6)};
    display: flex;
    justify-content: center;
    align-items: center;
`
export const TitleLogo = styled.p`
    color: #fff;
    font-size: 30px;
    font-family: LemonMilk;
    font-weight: 900;
`
export const DivHVAC = styled.div`
    height: 40px;
    width: 100px;
    border-radius: 23px;
    background-color: #0787B5;
    margin-top: -40px;
    margin-left: 143px;
`
//carrossel
export const ContainerPortfolio = styled.div`
    height: 450px;
    width: 100%;
    align-items: center;
    justify-content: center;
`
export const ContainerBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`
export const Box = styled.div`
    height: 300px;
    width: 300px;
    background-color: #ccc;
    margin-right: 30px;
    margin-top: 80px;
`
export const ContainerCircle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`
export const CircleNext = styled.div`
    height: 20px;
    width: 20px;
    border-radius: 30px;
    background-color: #ccc;
    margin-right: 7px;
`
//galeria
export const ContainerGaleria = styled.div`
    height: 500px;
    width: 100%;
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BoxGaleria = styled.div`
    height: 450px;
    width: 450px;
    background-color: blue;
    margin-right: 30px;
    margin-top: 90px;
`
export const ContainerCircleTitle = styled.div`
    display: flex;
`
export const CircleDetail = styled.div`
    height: 370px;
    width: 370px;
    margin-left: -225%;
    margin-bottom: 10px;
    border-radius: 190px;
    background-color: ${rgba('#606B84', 0.6)};
`
export const ContainerSistem = styled.div`
    width: 100%;
    align-items: center;
    margin-top: 50px;

    background-image: url(${detailEsp});
/*     background-color: red; */
    background-size: 100% auto;
    background-repeat: no-repeat;
`
export const DivText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const ContALign = styled.div`
    display: flex;
/*     flex-direction: column; */
`
export const ContainerConteudoTexto = styled.div`
    height: 500px;
    margin-left: 10%;
`
export const Conteudo1 = styled.div`
    display: flex;
    flex-direction: column;
`
export const DivConteudo1 = styled.div`
    height: 357px;
    float: left;
    display: flex;
    flex-direction: row;
`
export const Bloco = styled.div`
    width: 170px;
`
export const TitleConteudo = styled.p`
    height: 15px;
    font-size: 30px;
    font-weight: bold;
    font-family: LemonMilk;
`
export const Description = styled.p`
    font-size: 20px;
    width: 230px;
`
export const BlocoImg = styled.div`
    float: left;
    height: 150px;
`
export const ContainerServicos = styled.div`
    width: 100%;
    margin-top: 10px;
    background-image: url(${bgquad});
    height: 852px;
    background-size: 110% auto;
    background-repeat: no-repeat;
    padding-top: 1px;
`
export const BoxBalance = styled.div`
    height: 700px;
    width: 700px;
/*     background-color: red; */
    padding-top: 50px;
`
export const ContainerBalance = styled.div`
    width: 100%;
    background-color: red;
    margin-top: 10px;
    background-image: url(${bgBalance});
    height: 852px;
    background-size: 100% auto;
    background-repeat: no-repeat;
`
export const ContainerBalanceText = styled.div`
    margin-left: 150px;
`
export const ContainerCarrosselFound = styled.div`
    width: 100%;`
export const ContainerQuemSomos = styled.div`
    background-image: url(${fabrica});
    height: 494px;
    background-size: 100% auto;
    background-repeat: no-repeat;
`
export const ContainerFormulário = styled.div`
    height: 500px;
    width: 100%;
    background-color: #fff;
`
export const DivTextTitle = styled.div`
    width: 45%;
    /* background-color: red; */
    margin-left: 150px;
`
export const EspecificacoesServico = styled.h1`
    font-size: 109px;
    color: #fff;
    font-family: Chapaza, serif;
    font-size: 109px;
    line-height: 90px;
`
export const TitleEspecSistemas = styled.h1`
    font-size: 109px;
    color: #000000;
    font-family: Chapaza, serif;
    line-height: 74px;
`
export const BlogText = styled.p``
export const BalanceamentoText = styled.h1`
    color: #fff;
    font-size: 47px;
    font-family: LEMONMILK, sans-serif;
`
export const ColumPhotosCarrosel = styled.div`
    height: 375px;
    width: 500px;

    background-image: url(${photo});
    background-size: 100% auto;
    background-repeat: no-repeat;
`
export const ColumCarrosselBlog = styled.div`
    height: 375px;
    width: 500px;

    background-image: url(${photo2});
    background-size: 100% auto;
    background-repeat: no-repeat;
`
export const ColumScrollX = styled.div`
    overflow-x: auto;
`   
export const Containerr = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Boxx = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${props => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitlee = styled.h3`
  color: #333;
  font-size: 2rem;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;