import React from 'react';

import {
    Container,
    Title,
    Bloco1,
    HrLinha,
    Name,
    Description,
    BlocoResumo,
    DescriptionCliente,
} from './styles'

export default function Depoimentos() {
    return (
        <Container>
                <Bloco1>
                    <Name>THIAGO SILVA</Name>
                    <Description>
                        SUPERBAC BIOTHECHNOLOGY<br />
                        SOLUTIONS S.A
                    </Description>

                    <BlocoResumo>
                        <DescriptionCliente>
                            "A M&M é uma empresa <br />
                            séria, que preza pela <br />
                            qualidade e agilidade na <br />
                            prestação de seus <br />
                            serviços, oque na <br />
                            atualidade, é um<br />
                            diferencial neste <br />
                            segmento que é tão <br />
                            carente de empresas <br />
                            que zelem pela <br />
                            excelência."
                        </DescriptionCliente>
                    </BlocoResumo>
                </Bloco1>

                <HrLinha></HrLinha>

                <Bloco1 style={{ marginLeft: 100 }}>
                    <Name>BRUNO RAMOS</Name>
                    <Description>
                        AMCOR
                    </Description>

                    <BlocoResumo>
                        <DescriptionCliente>
                            "A M&M é uma empresa <br />
                            séria, que preza pela <br />
                            qualidade e agilidade na <br />
                            prestação de seus <br />
                            serviços, oque na <br />
                            atualidade, é um<br />
                            diferencial neste <br />
                            segmento que é tão <br />
                            carente de empresas <br />
                            que zelem pela <br />
                            excelência."
                        </DescriptionCliente>
                    </BlocoResumo>
                </Bloco1>
        </Container>
    )
}