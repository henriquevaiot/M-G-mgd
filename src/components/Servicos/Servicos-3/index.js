import React from 'react';
import {
    Container,
    BlocoTextForm,
    Title,
    Description,
    BlocoText1,
    BlocoALign
} from './styles'

import Photo from '../../../assets/balanceamento.jpg'

export default function Servico() {
    return (
        <Container>
            <BlocoTextForm>
                <Title>BALANCEAMENTO E COMISSIONAMENTO</Title>
            </BlocoTextForm>

            <BlocoALign>
                <BlocoText1>
                    <Description>BALANCEAMENTO CONSISTENTE EM.</Description>

                    <Description>O balanceamento é utilizado para o direcionamento do <br />
                        fluxo de ar, para garantir a homogeneidade na distribuição <br />
                        do ar e na climatizaçãop do ambiente.
                    </Description>
                    <Description>Com técnicos capacitados e instrumentos com tecnologias <br />
                        avançadas, realizamos o balanceamento do fluxo de ar <br />
                        para projetos novos, ambientes onde houve modificações <br />
                        no layout ampliação de salas, ambientes com pontos de <br />
                        desconforto térmico e etc.
                    </Description>

                    <img style={{ marginLeft: 150, marginTop: 5 }} src={Photo} height="200" />
                </BlocoText1>

                <BlocoText1 style={{marginLeft: -80}}>
                    <Description>BALANCEAMENTO CONSISTENTE EM.</Description>

                    <Description>Disponibilização de equipes e equipamentos <br />
                        especificoes para verificação e análises de instalações <br />
                        assegurando que os sistemas e componentes do <br />
                        empreendimento estejam projetados, instalados <br />
                        testados, mantidos e operando de acorod com as <br />
                        necessidades e requisitos operacionais do <br />
                        proprietário
                    </Description>

                    <Description>
                        O processo de comissionamento pode ser aplicado <br />
                        tanto a novos empreendimentos quanto a unidades e <br />
                        sistemas existentes em processo de expansão <br />
                        modernização ou ajustes.
                    </Description>

                    <Description>
                        Disponiibilizamos de técnicos capacitados a executar <br />
                        as atividades de manutenção preventiva em confor- <br />
                        midade com o PMOC e manutenção corretiva não <br />
                        programada.
                    </Description>
                </BlocoText1>

            </BlocoALign>
        </Container>
    )
}