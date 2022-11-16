import styled from 'styled-components';

import bg1 from '../../assets/quad1.png'
import bg2 from '../../assets/quad2.png'
import bg3 from '../../assets/quad3.png'
import bg4 from '../../assets/logos/group.png'

export const Container = styled.div`
    display: flex;
    justify-content: center;

    @media (max-width: 600px) {   
        display: none;
    }
`
export const ContainerBox = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 25px;

    @media (max-width: 600px) {   
        display: none;
    }
`
export const ContainerTitle = styled.div`
    height: 50px;
    width: 290px;
    display: flex;
    justify-content: center;

    @media (max-width: 600px) {   
        display: none;
    }

    @media (max-width: 600px) {   
        display: none;
    }
`
export const Bloco = styled.div`
/*     height: 50px;
    margin-left: 1px;
    width: 220px;
    background-color: #fff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    margin-top: 75px; */
    @media (max-width: 600px) {   
        display: none;
    }
`
export const BlocoTextDescription = styled.div`
     @media (max-width: 600px) {   
        display: none;
    }
`
export const Box = styled.div`
    margin: 10px;
    /* background-color: red; */
    margin-top: -90px;

    @media (max-width: 600px) {   
        display: none;
    }
`
export const BoxImg = styled.div`
    background-image: url(${bg2});
    height: 420px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 600px) {   
        display: none;
    }
`
export const BoxImg2 = styled.div`
    background-image: url(${bg1});
    height: 410px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 600px) {   
        display: none;
    }

`
export const BoxImg3 = styled.div`
    background-image: url(${bg3});
    height: 520px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 600px) {   
        display: none;
    }
`
export const BoxImg4 = styled.div`
    background-image: url(${bg4});
    height: 420px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media (max-width: 600px) {   
        display: none;
    }
`
export const Title = styled.p`
    text-align: center;
    margin-top: 7px;
    @media (max-width: 600px) {   
        display: none;
    }
`
export const Description = styled.p`
     @media (max-width: 600px) {   
        display: none;
    }
`