import styled from 'styled-components'

import fabrica from '../../assets/fabrica.jpg'

export const ContainerQuemSomos = styled.div`
    background-image: url(${fabrica});
    background-size: 100% auto;
    background-repeat: no-repeat;
    padding-bottom: 10px;
    @media (max-width: 600px) {   
        background-image: url(${fabrica});
        background-size: 250% auto;
        margin-top: -15px;
        height: 292px;
        --background-color: green;
        background-repeat: no-repeat;
        overflow-y: auto;

    }
`

export const Container = styled.div`
    justify-content: center;
    align-items: center;
`
export const BoxSomos = styled.div`
    /* width: 800px; */
    margin-top: -100px;

    @media (max-width: 600px) {   
        margin-top: -40px;
    }

`
export const TituloQuemSomos = styled.p`
    color: #fff;
    font-size: 109px;
    margin-left: 80px;
    font-family: Chapaza;
    @media (max-width: 600px) {   
        font-size: 8vw;
        margin-top:50px;
        margin-left: 20px;
        font-family: Chapanza;
    }
`
export const SubTitle = styled.h2`
    color: #fff;
    font-family: LemonRegular;

    @media (max-width: 600px) {   
        font-size: 5vw;
        color: #fff;
        font-family: Chapaza, serif;
    }
`
export const Description = styled.p`
    color: #fff;
    margin-top: -150px;
    margin-left: 90px;
    font-family: Umumu;

    @media (max-width: 600px) {   
        color: #fff;
        margin-top: -45px;
        margin-left: 20px;
        font-size: 3.5vw;
    }
`