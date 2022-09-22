import styled from "styled-components";
import img from '../../assets/bgwallpaper.jpg'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'

import {rgba} from 'polished'


export const Container = styled.div``
export const HomeContainer = styled.div`
    background-color: blue;
    height:  930px;
    background-image: url(${img});
    background-position: top center;
    background-size: 100% auto;
    background-repeat: no-repeat;
`
export const ContainerMovie = styled.div`
    background-color: teal;
    height: 1040px;
    background-image: url(${bg2});
    background-position: top center;
    background-size: 110% auto;
    background-repeat: no-repeat;
    margin-top: 10px;
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
export const ContainerInform = styled.div`
    background-color: teal;
    height:  1080px;
    width: 100%;
   /*  background-image: url(${bg3}); */
    background-position: top center;
    background-size: 110% auto;
    background-repeat: no-repeat;
    margin-top: 10px;
    flex-direction: column;
    justify-content: end;
    align-items: center;
`
export const ContText = styled.div`
    height: 550px;
    width: 750px;
    background-color: #0787B5;
/*     padding: 40px; */
`
export const BoxWhite = styled.div`
    height: 257px;
    width: 750px;
    background-color: ${rgba('#fff', 0.5)};
`
export const ContFormText = styled.div`
    height: 723px;
    width: 20px;
    background-color: #fff;
`
export const Title = styled.text`
    color: #fff;
    font-size: 45px;
`
export const ContabainerCircle = styled.div`
    width: 90%;
    height: 350px;
/*     background-color: red; */
    display: flex;
    justify-content: end;
`
export const Circle = styled.div`
    height: 430px;
    width: 430px;
    border-radius: 225px;
    background-color: ${rgba('#606B84', 0.5)};
    margin-top: 30px;
    margin-right: 59px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ContainerCircleAndOpacity = styled.div`
`
export const TitleLogo = styled.p`
    font-size: 35px;
    color: #fff;
`
export const DivHVAC = styled.div`
    height: 40px;
    width: 129px;
    border-radius: 23px;
    background-color: #0787B5;
    margin-top: -40px;
    margin-left: 160px;
`