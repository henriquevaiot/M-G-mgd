import styled from 'styled-components';

export const Container = styled.div`

`
export const BlocoTextForm = styled.div`
    margin-top: -165px;

    @media (max-width: 600px) {   
        margin-top: -25px;
    }
`
export const AlignItemsLocation = styled.div`
    display: flex;
    margin-left: 150px;

    @media (max-width: 600px) {   
        display: flex;
    margin-left: 1px;
    }
`
export const ImgPhoto = styled.img`
    margin-left: 150px;
    margin-top: 15px;

    @media (max-width: 600px) {   
        height: 1px;
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
export const Tag = styled.a`
    text-decoration: none;

    @media (min-width: 600px) {
    font-size: 10px;
  }
`
export const Title = styled.p`
    color: #94C2E5;
    margin-left: 150px;
    font-size: 109px;
    font-family: Chapanza;

    @media (max-width: 600px) {   
        color: #94C2E5;
        font-size: 15px;
        margin-left: 15px;
        margin-top: 35px;
        font-family: Chapanza;
    }
`
export const Description1 = styled.p`
    color: #ccc;
    font-weight: 300;
    margin-left: 150px;
    margin-top: -100px;

    @media (max-width: 600px) {   
        color: #ccc;
        margin-left: 15px;
        font-size: 8px;
        font-family: Chapanza;
        margin-top: -10px;
    }
`
export const Description = styled.p`
    color: #ccc;
    font-weight: 300;
    margin-left: 150px;

    @media (max-width: 600px) {   
        color: #ccc;
        margin-left: 15px;
        font-size: 8px;
        font-family: Chapanza;
        margin-top: 10px;
    }
`
