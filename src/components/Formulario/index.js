import React from 'react'
import {
    Container,
    Title,
    BoxFormulario,
    BoxContato,
    Description,
    ContainerContato,
    ContainerEmail,
    ContainerEndereco,
    FormularioBox,
    TitleForm,
    Form,
    ContForm,
    Input,
    ButtonEnviar,
    Enviar
} from './styles'

export default function Formulario() {
    return (
        <Container>
            <BoxFormulario>
                <BoxContato>
                    <Title>Contato</Title>
                    <div style={{ marginTop: -60 }}>
                        <p>
                            Com nossos anos de experiência e conhecimento, sabemos<br/> como criar soluções que funcionam para você e sua<br/> empresa. Seja uma loja ou uma grande fábrica.
                        </p>
                        <p>
                            Temos a experiência que você precisa para garantir que seu<br/> projeto de ar-condicionado seja feito corretamente.
                        </p>
                        <p>
                            Operamos a mais de 7 anos no mercado, oferecendo<br/> serviços de alta qualidade para todo o Brasil
                        </p>
                        <p>
                            Somos licenciados, segurados e nossos técnicos são<br/> certificados em HVAC.
                        </p>
                        <p>
                            Se você precisa de ar-condicionado de alta qualidade,<br/>fale conosco.
                        </p>
                    </div>
                    <ContainerContato>
                        <p style={{ fontWeight: 'bold', fontFamily: 'unset' }}>SE PREFERIR, LIGUE PARA:</p>
                        <p>São Paulo</p>
                        <p style={{ marginTop: -15 }}>11 00000000</p>
                        <p style={{ marginTop: -15 }}>11 00000000</p>
                        <p style={{ marginTop: -15 }}>11 00000000</p>
                    </ContainerContato>
                    <ContainerEmail>
                        <p style={{ fontSize: 14 }}>OU ENVIE UM E-MAIL PARA:</p>
                        <p style={{ marginTop: -15 }}>email@email.com</p>
                        <p style={{ marginTop: -15 }}>email@email.com</p>
                    </ContainerEmail>
                    <ContainerEndereco>
                        <p style={{ fontWeight: 'bold' }}>SÃO PAULO</p>
                        <p style={{ marginTop: -15 }}>Rua: Felipe tena 207 - Cotia - SP</p>
                    </ContainerEndereco>
                </BoxContato>
                <ContForm>
                    <FormularioBox>
                        <div><TitleForm>PREENCHA OS DADOS ABAIXO E FALE<br />COM UM ESPECIALISTAR M&M</TitleForm></div>
                        <div>
                            <Form>
                                <Input type="text" placeholder="Nome" />
                                <Input type="text" placeholder="Telefone" />
                                <Input type="text" placeholder="E-mail" />
                            </Form>
                        </div>
                        <ButtonEnviar>
                            <a href='/' style={{textDecoration: 'none', color: "#fff"}}>
                                <Enviar>Enviar</Enviar>
                            </a>
                        </ButtonEnviar>
                    </FormularioBox>
                </ContForm>
            </BoxFormulario>
        </Container>
    )
}