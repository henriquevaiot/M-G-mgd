import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 96px;
    margin-top: 80px;

    @media (max-width: 600px) {
        display: flex;
        /* flex-direction: column; */
    }
`
export const HrLinha = styled.div`
    height: 370px;
    margin-top: 50px;
    width: 7px;
    border: 1px solid #000000;
    margin-left: -200px;
`
export const Title = styled.h1`
    font-size: 109px;
    font-family: Chapaza, serif;
`
export const Bloco1 = styled.div`
    width: 50%;
`
export const Bloco2 = styled.div`
    margin-left: 100px;

    @media (max-width: 600px) {
        margin-left: 1px;
        margin-top: 70vh;
    }
`
export const Name = styled.p`
    font-size: 50px;
    margin-top: -20px;
    font-family: LEMONMILK, sans-serif;

    @media (max-width: 600px) {
        font-size: 30px;
        margin-top: -5px;
    }
`
export const Description = styled.p`
    font-size: 30px;
    margin-top: -53px;

    @media (max-width: 600px) {
        font-size: 15px;
        margin-top: -20px;
    }
`
export const BlocoResumo = styled.div`
    width: 300px;

    @media (max-width: 600px) {
        width: 160px;
        /* background-color: red; */
    }
`
export const DescriptionCliente = styled.p`
    font-size: 25px;
    font-family: Umumu;
    @media (max-width: 600px) {
        color: #ccc;
        font-size: 19px;
    }
`