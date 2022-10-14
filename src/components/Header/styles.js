import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
`
export const Teste = styled.div`
    /* background-color: red; */
`
export const ContainerLogo = styled.div`
    justify-content: center;
    align-items: center;
`
export const Tag = styled.a`
    text-decoration: none;
`
export const Texto = styled(Tag)`
    font-size: 12px;
    color: #fff;
    margin: 20px;
    font-size: 16px;
    font-weight: 300;

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
`
export const ContainerLinks = styled.div`
    display: flex;
    justify-content: end;
    margin-top: 25px;
    margin-right: 3rem;
/*     background-color: red; */
`
export const TextWpp = styled.text`
    margin-left: 5px;
    color: #fff;
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
`
export const TextEmail = styled.text`
    color: #fff;
    margin-left: 5px;
`