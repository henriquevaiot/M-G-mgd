import React from 'react';
import {
    Container,
    BlocoTextForm,
    Title,
    Description
} from './styles'

import Photo from '../../../assets/balanceamento.jpg'

export default function Servico() {
    return (
        <Container>
            <BlocoTextForm>
                <Title>FABRICAÇÃO E MONTAGEM DE DUTOS</Title>

                <Description style={{ marginTop: -20 }}>Equipes especializada para fabricação e montagem de redes dutos metálicos e MPU.</Description>
                <Description>Os dutos são fabricados conforme normas vigentes e especificações de projetos, seguindo um rigoroso <br />
                    processo de qualidade e higienização para fabricação e montagem.</Description>

                <img style={{ marginLeft: 150, marginTop: 45 }} src={Photo} height="300" />
            </BlocoTextForm>
        </Container>
    )
}