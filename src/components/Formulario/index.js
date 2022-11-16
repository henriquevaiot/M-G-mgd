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
    Enviar,
    DescriptionP
} from './styles'

export default function Formulario() {
    return (
        <Container>
            <BoxFormulario>
                <BoxContato>
                    <Title>Contato</Title>
                    <boxTitulo>
                        <DescriptionP>
                            Com nossos anos de experiência e conhecimento, sabemos<br/> como criar soluções que funcionam para você e sua<br/> empresa. Seja uma loja ou uma grande fábrica.
                        </DescriptionP>
                        <DescriptionP>
                            Temos a experiência que você precisa para garantir que seu<br/> projeto de ar-condicionado seja feito corretamente.
                        </DescriptionP>
                        <DescriptionP>
                            Operamos a mais de 7 anos no mercado, oferecendo<br/> serviços de alta qualidade para todo o Brasil
                        </DescriptionP>
                        <DescriptionP>
                            Somos licenciados, segurados e nossos técnicos são<br/> certificados em HVAC.
                        </DescriptionP>
                        <DescriptionP>
                            Se você precisa de ar-condicionado de alta qualidade,<br/>fale conosco.
                        </DescriptionP>
                    </boxTitulo>
                    <ContainerContato>
                        <p style={{ fontWeight: 'bold', fontFamily: 'unset' }}>SE PREFERIR, LIGUE PARA:</p>
                        <DescriptionP style={{fontWeight: 'bold'}}>São Paulo</DescriptionP>
                        <DescriptionP style={{ marginTop: -15 }}>11 00000000</DescriptionP>
                        <DescriptionP style={{ marginTop: -15 }}>11 00000000</DescriptionP>
                        <DescriptionP style={{ marginTop: -15 }}>11 00000000</DescriptionP>
                    </ContainerContato>
                    <ContainerEmail>
                        <p style={{ fontSize: 14 }}>OU ENVIE UM E-MAIL PARA:</p>
                        <DescriptionP style={{ marginTop: -15 }}>email@email.com</DescriptionP>
                        <DescriptionP style={{ marginTop: -15 }}>email@email.com</DescriptionP>
                    </ContainerEmail>
                    <ContainerEndereco>
                        <DescriptionP style={{ fontWeight: 'bold' }}>SÃO PAULO</DescriptionP>
                        <DescriptionP style={{ marginTop: -15 }}>Rua: Felipe tena 207 - Cotia - SP</DescriptionP>
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