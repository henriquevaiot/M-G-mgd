import styled from 'styled-components';

export const Container = styled.div``
export const BoxFormulario = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;

    @media (max-width: 600px) {
        display: flex;
        flex-direction: column;
    }
`
export const BoxContato = styled.div`
    /* background-color: yellow; */
    width: 45%;
    padding-left: 9%;
    @media (max-width: 600px) {
        width: 100%;
    }

`
export const Title = styled.h1`
    font-family: Chapanza, serif;
    font-size: 109px;

    @media (max-width: 600px) {
        font-size: 5vh;
    }
`

export const Description = styled.p`
    font-size: 18px;
    margin-top: -50;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
`
export const ContainerContato = styled.div`
    height: 120px;
    width: 300px;
   
    @media (max-width: 600px) {
        margin-botton:10px;
    }
`

export const boxTitulo = styled.div`  

    marginTop: -60;

    @media (max-width: 600px) {
        margin-top:-30vh;
        
    }
`


export const ContainerEmail = styled.div`
    height: 60px;
    width: 300px;
`
export const ContainerEndereco = styled.div`
    height: 45px;
    width: 300px;
`
export const FormularioBox = styled.div`
/*     height: 400px;
    width: 40%;
    background-color: green; */
    /* background-color: red; */
    display: flex;
    margin-top: 200px;
    flex-direction: column;
`
export const TitleForm = styled.h1`
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: 30px;
`
export const ContForm = styled.div`
    width: 50%;
    @media (max-width: 600px) {   
       display:none;
    }

/*     background-color: red; */
`
export const Input = styled.input`
  font-size: 15px;
  padding: 15px;
  width: 76%;
  margin: 10px;
  border:solid 1px #707070;
  border:solid 1px #707070;
  border-radius: 25px;
  ::placeholder {
    color: #707070;
  }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    padding: 0px;
    margin-left: -20px;
`
export const ButtonEnviar = styled.div`
    height: 50px;
    width: 146px;
    background-color: #000000;
    border-radius: 25px;
    color: #707070;
    justify-content: center;
    align-items: center;
    display: flex;
    margin-top: 10px;
    margin-left: -7px;
`
export const Enviar = styled.p`
    text-align: center;
    font-size: 20px;
`