import React, { useState } from "react";
import './styles.css'
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
    LiListServicos,
    Linha
} from './styles'

import logo from '../../assets/logo.png'
import wpp from '../../assets/wpp.png'
import email from '../../assets/email.png'
import linkedin from '../../assets/logos/linkedin.png'



export default function Header({ levar }) {


    const [mouseOver, setMouseOver] = useState(false)

    return (
        <HeaderContainer>
            <ContainerLinks>
                <LinkWpp>
                    <img src={wpp} width="17%" />
                    <TextWpp href="https://api.whatsapp.com/send?phone=551145514626&text=Ol%C3%A1%2C%20eu%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es!">Fale Cosnoco</TextWpp>
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
                    <Tag href="#anchor">
                        <Texto>QUEM SOMOS</Texto>
                    </Tag>
                </QuemSomos>
                <Tag href="#sistem">
                    <Texto>SISTEMAS</Texto>
                </Tag>
                <Tag href="#servicos">
                    {/* <TextoLi onMouseOver={() => setMouseOver(true)} onMouseOut={() => setMouseOver(false)}>
                        <Texto >SERVIÇOS</Texto>
                        {mouseOver && (
                            <ul style={{position: 'absolute'}}>
                                <LiListServicos href="#teste">ENGENHARIA E PROJETOS</LiListServicos>
                                <LiListServicos>FABRICAÇÃO E MONTAGEM DE DUTOS</LiListServicos>
                                <LiListServicos>INSTAÇÃO E RETROFIT</LiListServicos>
                                <LiListServicos>BALANCEAMENTO E COMISSIONAMENTO</LiListServicos>
                            </ul>
                        )}
                    </TextoLi> */}
                    <div class="dropdown">
                        <Texto >SERVIÇOS</Texto>
                        <div class="dropdown-content">
                            <div>
                                <LiListServicos>ENGENHARIA E PROJETOS</LiListServicos>
                                <LiListServicos>FABRICAÇÃO E MONTAGEM DE DUTOS</LiListServicos>
                                <LiListServicos>INSTAÇÃO E RETROFIT</LiListServicos>
                                <LiListServicos>BALANCEAMENTO E COMISSIONAMENTO</LiListServicos>
                            </div>
                        </div>
                    </div>
                </Tag>
                <Tag href="#portfolio">
                    <Texto>PORTIFÓLIO</Texto>
                </Tag>
                <Tag href="#blog">
                    <Texto>BLOG</Texto>
                </Tag>
                <Tag href="#form">
                    <Texto>CONTATO</Texto>
                </Tag>
                <Tag href="">
                    <img src={linkedin} width="30" />
                </Tag>
            </ContainerNavHeader>
        </HeaderContainer>
    )
}