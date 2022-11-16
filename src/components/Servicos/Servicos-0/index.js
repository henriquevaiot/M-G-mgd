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

import Photo from '../../../assets/computador.jpg'

export default function Servico() {
    return (
        <BlocoTextForm>
            <Title>ENGENHARIA E PROJETOS</Title>

            <ContainerDescription>

                <Description1 style={{ marginTop: -20 }}>Equipe de engenharia qualificada  e capacitada para elaboração de  projetos executivos, levando em<br/>  consideração todas as normas  vigentes e particularidades de cada empreendimento.</Description1>
                <Description>Nossos projetos incluem levantamento de informações em campo,  apresentação de um pré-projeto,  memorial<br/> de cálculos, memorial  descritivo, planta baixa, detalhes típicos, cortes esquemáticos e ART de projeto.</Description>

                {<BgImage style={{ marginLeft: 150, marginTop: 45 }} src={Photo} height="300" />}
            </ContainerDescription>
        </BlocoTextForm>
    )
}