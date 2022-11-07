import styled from 'styled-components'

import fabrica from '../../assets/fabrica.jpg'

import { rgba } from 'polished'

export const ContainerQuemSomos = styled.div`
    background-image: url(${fabrica});
    height: 494px;
    margin-top: 85px;
    background-color: red;
    background-size: 100% auto;
    background-repeat: no-repeat;

    @media (max-width: 600px) {   
        background-image: url(${fabrica});
        background-size: 250% auto;
        margin-top: -15px;
        height: 292px;
        background-color: green;
        background-repeat: no-repeat;
    }
`

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    padding-top: 0.1px;
`
export const BoxSomos = styled.div`
    /* width: 800px; */
    margin-top: -95px;

    @media (max-width: 600px) {   
        margin-top: -60px;
    }

`
export const TituloQuemSomos = styled.p`
    color: #fff;
    font-size: 109px;

    @media (max-width: 600px) {   
        font-size: 50px;
        margin-left: 20px;
        font-family: Chapanza;
    }
`
export const SubTitle = styled.h2`
    color: #fff;
    font-family: Chapanza;

    @media (max-width: 600px) {   
        font-size: 20px;
        color: #fff;
        font-family: Chapaza, serif;
    }
`
export const Description = styled.p`
    color: #fff;
    margin-top: -110px;
    margin-left: 90px;

    @media (max-width: 600px) {   
        color: #fff;
        margin-top: -45px;
        margin-left: 20px;
        font-size: 8px;
    }
`