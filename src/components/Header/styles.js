import styled from 'styled-components'

export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1px;
    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: center;
        align-items: center;
      
    }
`
export const TextoLi = styled.li`
    list-style: none;
`
export const Linha = styled.div`
    height: 40px;
    width: 5px;
    background-color: #fff;
`
export const LiListServicos = styled.li`
    color: #fff;
    font-size: 13px;
    width: 300px;
    list-style: none;
    margin-left: 20px;
    &:hover, 
    &:focus {
        color: #C99C1E;
    }
    &:active {
        color: #C99C1E;
    }
`
export const DivMm = styled.div`
`
export const LogoMM = styled.img`
    width: 200px;
    margin-left: 10px;

    @media (max-width: 600px) {   
        margin-left: 50px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
`
export const ContainerLogo = styled.div`
    justify-content: center;
    align-items: center;
`
export const Tag = styled.a`
    text-decoration: none;

`
export const QuemSomos = styled.div`
    @media (max-width: 600px) {   
    }
`
export const Texto = styled(Tag)`
    color: #fff;
    margin: 20px;
    font-size: 1.4vw;
    font-weight: 700;
    white-space: nowrap;
    
    @media (max-width: 1038px) {   
        font-size: 1.40vw;
        justify-content: center;
    }

    @media (max-width: 600px) {   
        font-size: 13px;
        justify-content: center;
    }
    

    &:hover, 
    &:focus {
        color: #CADBF2;
    }
    &:active {
        color: #CADBF2;
    }
`
export const ContainerNavHeader = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: -10px;
    position: relative;
    justify-content: center;
    margin-top: 15px;
    
    @media (max-width: 600px) {   
        overflow-x: scroll;
        width: 100%;
        margin-top: 15px;
    }  
`
export const ContainerLinks = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 25px;
    margin-right: 18rem;

    @media (max-width: 600px) {      
        margin-left: 76%;
    }
`
export const TextWpp = styled.text`
    margin-left: 5px;
    color: #fff;

    @media (max-width: 600px) {
        font-size: 15px;
    }
`
export const LinkWpp = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 150px;
    background-color: #20865D;
    margin-right: 20px;
    border-radius: 20px;

    @media (max-width: 600px) {      
        display: flex;
        align-items: center;
        justify-content: center;
        height: 26px;
        width: 130px;
        background-color: #20865D;
        margin-right: 20px;
        border-radius: 20px;
    }
`
export const LinkEmail = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30px;
    width: 185px;
    background-color: #232322;
    padding: 2px;
    border-radius: 20px;
    flex-direction: row;

    @media (max-width: 600px) {      
        display: flex;
        align-items: center;
        justify-content: center;
        height: 23px;
        width: 155px;
        background-color: #232322;
        padding: 2px;
        border-radius: 20px;
        flex-direction: row;
    }
`
export const TextEmail = styled.text`
    color: #fff;
    margin-left: 5px;

    @media (max-width: 600px) {
        font-size: 15px;
    }
`