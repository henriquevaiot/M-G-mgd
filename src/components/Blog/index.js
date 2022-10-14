import React from 'react';

import {
    Container,
    ContainerBlog,
    ContainerTitle,
    ContainerBox,
    Box1,
    Box2,
    Box3,
    TitleCard,
    BlogText,
    BoxTitle
} from './styles'

export default function Blog() {
    return (
        <Container>
            {/* <BlogText>Blog</BlogText> */}
            <ContainerBlog>
                <ContainerTitle>
                </ContainerTitle>
                <ContainerBox style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 1 }}>
                    <Box1>
                        <BoxTitle>
                            <TitleCard style={{ marginLeft: 10 }}>
                                Saiba qual o ar condicionado
                                ideal econômico para o seu
                                escritório.
                            </TitleCard>
                        </BoxTitle>
                    </Box1>
                    <Box2>
                        <BoxTitle>
                            <TitleCard style={{ marginLeft: 40 }}>
                                Limpeza de Ar
                                Condicionado Comercial
                            </TitleCard>
                        </BoxTitle>
                    </Box2>
                    <Box3>
                        <BoxTitle>
                            <TitleCard style={{ marginLeft: 30 }}>
                                Qualidade do Ar Interno e
                                Rendimento no Trabalho
                            </TitleCard>
                        </BoxTitle>
                    </Box3>
                </ContainerBox>
            </ContainerBlog>
        </Container>
    )
}