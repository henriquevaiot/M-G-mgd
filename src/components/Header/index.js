import React, { useState } from "react";
import {
    HeaderContainer,
    Texto,
    ContainerNavHeader,
    ContainerLogo,
    ContainerLinks,
    LinkWpp,
    Text,
    LinkEmail,
    Teste,
    Tag,
    TextWpp,
    TextEmail,
    LogoMM,
    ContainerMM,
    DivMm,
    TagQuemSOmos,
    QuemSomos,
    TextoLi,
    LiListServicos
} from './styles'

import logo from '../../assets/logo.png'
import wpp from '../../assets/wpp.png'
import email from '../../assets/email.png'

export default function Header({href}) {

    const [mouseOver, setMouseOver] = useState(false)

    return (
        <HeaderContainer>
            <ContainerLinks>
                <LinkWpp>
                    <img src={wpp} width="17%" />
                    <TextWpp>Fale Cosnoco</TextWpp>
                </LinkWpp>

                <LinkEmail>
                    <img src={email} width="15%" />
                    <TextEmail>Enviar Mensagem</TextEmail>
                </LinkEmail>
            </ContainerLinks>

            <ContainerNavHeader>
                <DivMm>
                    <LogoMM
                        src={logo} width="80%" />
                </DivMm>
                <Tag href="/">
                    <Texto>HOME</Texto>
                </Tag>
                <QuemSomos>
                    <Tag href="/">
                        <Texto>QUEM SOMOS</Texto>
                    </Tag>
                </QuemSomos>
                <Tag href="/">
                    <Texto>SISTEMAS</Texto>
                </Tag>
                <Tag href="/">
                    <TextoLi onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
                        <Texto>SISTEMAS</Texto>
                        {mouseOver && (
                            <ul>
                                <LiListServicos>ENGENHARIA E PROJETOS</LiListServicos>
                                <LiListServicos>FABRICAÇÃO E MONTAGEM DE DUTOS</LiListServicos>
                                <LiListServicos>INSTAÇÃO E RETROFIT</LiListServicos>
                                <LiListServicos>BALANCEAMENTO E COMISSIONAMENTO</LiListServicos>
                            </ul>
                        )}
                    </TextoLi>
                </Tag>
                <Tag href="/">
                    <Texto>PORTIFÓLIO</Texto>
                </Tag>
                <Tag href="/">
                    <Texto>BLOG</Texto>
                </Tag>
                <Tag href="/">
                    <Texto>CONTATO</Texto>
                </Tag>
            </ContainerNavHeader>
        </HeaderContainer>
    )
}