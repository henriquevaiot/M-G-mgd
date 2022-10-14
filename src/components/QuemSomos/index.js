import React from 'react'
import {
    Container,
    Title,
    Description,
    BoxSomos
} from './styles'

export default function Blog() {
    return (
        <Container>
            <BoxSomos>
                <Title>Quem Somos</Title>
                <Description>
                    <h2 style={{ color: '#fff', fontFamily: 'LemonMilk' }}>Excelencia e Inovacao</h2>
                    A M & M Soluções em Engenharia é uma empresa especialista em fornecimento de Equipamentos,<br />
                    Peça, Projetos, Gerenciamento, Coordenação, Fabricação, Instalação e Manutenção de Sistema HVAC<br />
                    (ar condicionado, ventilação, exaustão e refrigeração.<br /><br />

                    Contamos com engenheiros especializados.<br /><br />

                    Possuímos ampla experiência em instalações de empreendimentos que buscam certificação LEED<br />
                    de sustentabilidade<br /><br />

                    <span style={{ fontWeight: 'bold', fontFamily: 'LemonMilk' }}>EXECUTAMOS  SERVICOS PARA:</span><br />
                    Todos os tipos de edificações / Galpões / Comércios / Indústrias / Residências / Retrofit /<br />
                    Empreendimentos em ocupação
                </Description>
            </BoxSomos>
        </Container>
    )
}