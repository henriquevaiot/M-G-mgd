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


export const Container = styled.div`
    width: 100%;
`
export const HomeContainer = styled.div`
    background-image: url(${img});
    background-size: auto auto;
    background-repeat: no-repeat;
    width: 100%;

    background-color: red;

    @media screen and (max-width: 737){
        width: 60%;
    }
`
export const ContainerMovie = styled.div`
    height: 140vh;
    margin-top: 10px;
    background-image: url(${bg2});
    background-position: top center;
    background-size: auto auto;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 600px){
        height: 120px;
    }
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

     @media screen and (max-width: 600px){
        flex-direction: column;
        background-image: none;
    }
`
export const ContainerInform = styled.div`
    background-color: red;
    height: 149vh;
    background-image: url(${bg3});
    background-position: top center;
    background-size: 110% auto;
    background-repeat: no-repeat;
    margin-top: 10px;

    @media (max-width: 600px) {   
        background-color: blue;
        height: 100vh;
        background-image: url(${bg3});
        background-position: top center;
        background-size: 110% auto;
        background-repeat: no-repeat;
        margin-top: 10px;
    }
`
export const ContText = styled.div`
    height: 635px;
    width: 750px;
    background-color: #0787B5;
    padding: 10px;

    @media (max-width: 600px) {   
        background-color: green;
        height:45vh;
        width: 500px;
        align-items: center;
        justify-content: center;
    }

`
export const BoxTitle = styled.div`
    width: 490px;
    margin-left: 80px;
    margin-top: 80px;
    letter-spacing: 5;

    @media (max-width: 600px) {   
        width: 10px;
        margin-left: 180px;
    }

`
export const ContSubscription = styled.div`
    height: 150px;
    width: 750px;
    /* background-color: ${rgba('#fff', 0.6)}; */
    background-color: red;
    padding: 10px;
    display: flex;
    align-items: center;

    @media (max-width: 600px) {   
        height: 150px;
        width: 350px;
        background-color: blue;
        padding: 10px;
        display: flex;
        align-items: center;
    }
`
export const ContDescription1 = styled.p`
    font-size: 23px;
    margin-left: 20px;

    @media (max-width: 600px) {   
        font-size: 15px;
        color: #fff
    }
`
export const ContAndSubscription = styled.div`
    height: 254px;
    width: 750px;
    background-color:#CADBF2;
    display: flex;
    align-items: center;
    justify-content: end;

    @media (max-width: 600px) {   
        height: 30vh;
        width: 360px;
        background-color:#CADBF2;
        display: flex;
        align-items: center;
        justify-content: end;
    }
`
export const ContAndText = styled.p`
    font-size: 37px;
    text-align: end;
    margin-right: 100px;

    @media (max-width: 600px) {   
        font-size: 20px;
        text-align: end;
        margin-right: 40px;
    }
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

    @media (max-width: 600px) {   
        color: #fff;
        font-size: 45px;
        line-height: 50px;
    }
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

    @media (max-width: 600px) {   
        height: 30px;
        width: 70px;
        border-radius: 23px;
        background-color: #0787B5;
        margin-top: -26px;
        margin-left:80px;
    }
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
    margin: 0 auto;
    min-height: 89vh;
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: red;

    @media (max-width: 600px) {   
        margin: 0 auto;
        min-height: 89vh;
        display: flex;

        background-color: green;
    }
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

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
  }
`
export const DivText = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 768px) {
        margin-left: -110px;
  }
`
export const ContALign = styled.div`
    display: flex;
/*     flex-direction: column; */
`
export const ContainerConteudoTexto = styled.div`
    height: 1000px;
    margin-left: 10%;
    @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
  }
    /* background-color: red; */
`
export const Conteudo1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media (max-width: 768px) {
    flex-direction: column;
    display: flex;
    background-color: red;
    margin-right: 100px;
    margin-left: 100px;
    width: 100%;
  }
`
export const DivConteudo1 = styled.div`
    height: 357px;
    float: left;
    display: flex;
    flex-direction: row;

    /* background-color: red; */

    @media (max-width: 600px) {   
        height: 357px;
        float: left;
        display: flex;
        flex-direction: row;

        margin-right: 50px;
    }
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

    @media (max-width: 600px) {   
        flex-direction: column;
    }
`
export const ContainerServicos = styled.div`
    margin-top: 10px;
    background-image: url(${bgquad});
    height: 852px;
    background-repeat: no-repeat;
    padding-top: 1px;
    height: 750px;

    @media (max-width: 600px) {   
        background-size: 100% auto;
        background-color: red;
        background-repeat: no-repeat;
    }
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
    width: 100%;
`

export const ContainerFormulário = styled.div`
    height: 500px;
    width: 100%;
    background-color: #fff;
`
export const DivTextTitle = styled.div`
    /* background-color: red; */
    margin-left: 150px;

    @media (max-width: 600px) {   
        margin-left: 15px;
    }
`
export const EspecificacoesServico = styled.h1`
    font-size: 80px;
    color: #fff;
    font-family: Chapaza, serif;

    @media (max-width: 600px) {   
        color: #fff;
        font-size: 23px;
        font-family: Chapanza;
    }
`
export const TitleEspecSistemas = styled.h1`
    font-size: 109px;
    color: #000000;
    font-family: Chapaza, serif;
    line-height: 74px;
    margin-left: 150px;
    margin-top: 150px;

    background-color: red;

    @media (max-width: 600px) {
        font-size: 30px;
        color: #000000;
        font-family: Chapaza, serif;
        background-color: blue;
        line-height: 74px;
  }
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
export const Tag = styled.a`
    text-decoration: none;

    @media (min-width: 600px) {
    font-size: 10px;
  }
`
export const Texto = styled.p`
color: #fff;
margin-top: -80px;

@media (max-width: 600px) {
    font-size: 5px;
    align-items: center;
    flex-direction: row;

    margin-top: -10px;
}

&:hover, 
    &:focus {
        color: #C99C1E;
    }
    &:active {
        color: #C99C1E;
    }
`
export const AlignItemsLocation = styled.div`
    display: flex;
`
export const ContainerBlog = styled.div``
export const ContainerDepoimentos = styled.div``
export const TitleDepoimentos = styled.h1`
    font-family: Chapanza;
    margin-left: 90px;
    font-size: 83px;
`