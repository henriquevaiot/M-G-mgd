import React from "react";
import Header from '../../components/Header'
import {
    Container,
    HomeContainer,
    ContainerMovie,
    BannerContainer,
    ContainerInform,
    ContText,
    Title,
    ContabainerCircle,
    Circle,
    TitleLogo,
    DivHVAC,
    ContainerCircleAndOpacity
} from './styles'

import Youtube from '../../assets/youtube.png'
import Banner from '../../assets/banner.png'

export default function index() {
    return (
        <Container>

            <HomeContainer>
                <Header />
                <BannerContainer>
                    <img width="50%" src={Banner} />
                </BannerContainer>
                <ContabainerCircle>
                    <Circle>
                        <TitleLogo>
                            INSTALAÇÕES E <br />
                            MANUTENÇÃO DE   <br />
                            SiSTEMA HVAC
                            <DivHVAC></DivHVAC>
                        </TitleLogo>
                    </Circle>
                </ContabainerCircle>
            </HomeContainer>

            <ContainerMovie>
                <a target="_blank" href="https://www.youtube.com/watch?v=xcJtL7QggTI">
                    <img src={Youtube} width="90%" />
                </a>
            </ContainerMovie>

            <ContainerInform>
                <ContText>
                    <Title>
                        Contamos com <br />
                        engenheiros<br />
                        especializados.
                    </Title>
                </ContText>
            </ContainerInform>

        </Container>
    )
}

