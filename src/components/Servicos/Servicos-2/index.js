import React from 'react';
import {
    Container,
    BlocoTextForm,
    Title,
    Description,
    Description1
} from './styles'

import Photo from '../../../assets/retrofit.jpg'

export default function Servico() {
    return (
        <Container>
            <BlocoTextForm>
                <Title>INSTAÇÃO E RETROFIT</Title>

                <Description1>Visitas técnicas, visando um estudo do projeto inicial, onde serão realizados levantamentos em campo <br/> 
                análises das necessidades do empreendimento e as exigências do cliente, sempre respeitando as normas pertinentes e a segurança
                </Description1>
                <Description>Projetos executivos, execução de instalações startups testes e comissionamento de sistemas <br/><br/>
                Retrofit do sistemas HVAC com fornecimento de equipamentos, peças e acessorios. <br/><br/>
                Elaboração e entrega do Databook 'Manuais e As build' dos sistemas HVAC, esquemáticos e ART de projeto.
                </Description>

                {<img style={{ marginLeft: 150, marginTop: 15 }} src={Photo} height="230" />}
            </BlocoTextForm>
        </Container>
    )
}