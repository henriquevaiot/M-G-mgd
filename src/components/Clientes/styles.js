import styled from "styled-components";

export const Container = styled.div`
`
export const Title = styled.h1`
    font-size: 109px;
    font-family: Chapanza;
    margin-left: 160px;

    @media (max-width: 600px) {
        font-size: 40px;
        font-family: Chapanza;
        margin-left: 20px;
    }
`
export const DivLogos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
`
export const Logos = styled.img``
export const Linha = styled.div`
    height: 10px;
    width: 81%;
    margin-top: 35px;
    background-color: #000000;
`