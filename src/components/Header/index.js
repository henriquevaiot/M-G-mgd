import React from "react";
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
    TextEmail
} from './styles'

import logo from '../../assets/logo.png'
import wpp from '../../assets/wpp.png'
import email from '../../assets/email.png'

export default function Header() {
    return (
        <HeaderContainer>

            <Teste>
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
                    <ContainerLogo>
                        <img
                            src={logo} width="80%"/>
                    </ContainerLogo>

                    <Tag href="/">
                        <Texto>HOME</Texto>
                    </Tag>
                    <Tag href="/">
                        <Texto>QUEM SOMOS</Texto>
                    </Tag>
                    <Tag href="/">
                        <Texto>SISTEMAS</Texto>
                    </Tag>
                    <Tag href="/">
                        <Texto>SERVIÇO</Texto>
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
            </Teste>

        </HeaderContainer>
    )
}