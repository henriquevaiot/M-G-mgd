import React from 'react';
import {
    Container,
    BlocoTextForm,
    Title,
    Description,
    Description1,
    ContainerDescription,
    BgImage
} from './styles'

import Photo from '../../../assets/computador.png'

export default function Servico() {
    return (
        <BlocoTextForm>
            <Title>FABRICAÇÃO E MONTAGEM DE DUTOS</Title>

            <ContainerDescription>

                <Description1 style={{ marginTop: -20 }}>Equipes especializada para fabricação e montagem de redes dutos metálicos e MPU.</Description1>
                <Description>Os dutos são fabricados conforme normas vigentes e especificações de projetos, seguindo um rigoroso <br />
                    processo de qualidade e higienização para fabricação e montagem.</Description>

                {<BgImage style={{ marginLeft: 150, marginTop: 45 }} src={Photo} height="300" />}
            </ContainerDescription>
        </BlocoTextForm>
    )
}