import React, { useState, useEffect, useRef } from "react";
import Header from '../../components/Header'
import {
    Container,
    HomeContainer,
    ContainerMovie,
    BannerContainer,
    ContainerInform,
    ContText,
    BoxTitle,
    Title,
    ContabainerCircle,
    Circle,
    TitleLogo,
    DivHVAC,
    DivTextTitle,
    ContSubscription,
    ContainerBlocoSubscription,
    ContAndSubscription,
    ContainerPortfolio,
    ContainerGlobalForm,
    ContainerGaleria,
    ContainerBox,
    Box,
    ContainerCircle,
    BalanceamentoText,
    CircleNext,
    BoxGaleria,
    ContainerSistem,
    DivText,
    ContainerConteudoTexto,
    DivConteudo1,
    Bloco,
    TitleConteudo,
    Description,
    BlocoImg,
    ContainerServicos,
    BoxBalance,
    ContainerBalance,
    ContainerBalanceText,
    ContainerCarrosselFound,
    ContainerCircleTitle,
    TitleEspecSistemas,
    CircleDetail,
    BlogText,
    ContainerQuemSomos,
    ContainerFormulário,
    ColumPhotosCarrosel,
    EspecificacoesServico,
    ColumScrollX,
    ColumCarrosselBlog,
} from './styles'

import './App.css'

import { motion } from 'framer-motion'

import Blog from '../../components/Blog'
import Servico from '../../components/Servicos'
import QuemSomos from '../../components/QuemSomos'
import CarrosselPortfolio from "components/Carrossel/CarrosselPortfolio";

import line from '../../assets/line.png'
import Youtube from '../../assets/youtube.png'
import Banner from '../../assets/banner.png'
import Formulario from "components/Formulario";

import pessoa from '../../assets/pessoa.jpg'
import pessoa1 from '../../assets/pessoa1.jpg'
import pessoa2 from '../../assets/pessoa2.jpg'

import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'

import m1 from '../../assets/m1.jpg'
import m2 from '../../assets/m2.jpg'
import m3 from '../../assets/m3.jpg'

const images = [pessoa1, pessoa, pessoa2]
const p = [p1, p2, p3]
const m = [m1, m2, m3]

export default function Home() {

    const carousel = useRef()
    const [width, setWidth] = useState(0)

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, []);

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
                            INSTALACOES E <br />
                            MANUTENCAO DE   <br />
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
                <ContainerGlobalForm>
                    <ContainerBlocoSubscription>
                        <ContText>
                            <BoxTitle>
                                <Title>
                                    Contamos com<br />engenheiros<br />especializados.
                                </Title>
                            </BoxTitle>
                        </ContText>
                        <ContSubscription>
                            <p style={{ fontSize: 23, marginLeft: 20 }}>
                                Somos uma empresa especialista em <br />fornecimento de Equipamentos, Peça, Projetos,<br /> Gerenciamento, Coordenação, Fabricação,<br /> Instalação e Manutenção de Sistema HVAC (ar<br /> condicionado, ventilação, exaustão e<br /> refrigeração).
                            </p>
                        </ContSubscription>
                    </ContainerBlocoSubscription>

                    <ContAndSubscription>
                        <p style={{ fontSize: 37, textAlign: 'end', marginRight: 100 }}>
                            Possuímos ampla experiência em<br />
                            instalações de empreendimentos<br />
                            que buscam certificação LEED<br />
                            de sustentabilidade.
                        </p>
                    </ContAndSubscription>

                </ContainerGlobalForm>
            </ContainerInform>

            <ContainerPortfolio>
                <CarrosselPortfolio />
            </ContainerPortfolio>

            <ContainerGaleria>
                <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
                    <motion.div
                        drag="x"
                        className="inner"
                        dragConstraints={{ right: 0, left: width }}>
                        {images.map(image => (
                            <motion.div className="item" key={image}>
                                <img src={image} alt="texto alto" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </ContainerGaleria>

            <ContainerSistem>
                <DivText>
                    <TitleEspecSistemas style={{ fontSize: 80, marginLeft: 150, marginTop: 150 }}>
                        ESPECIFICAÇÕES<br />
                        DOS SISTEMAS
                    </TitleEspecSistemas>
                    <ContainerCircleTitle>
                        <CircleDetail></CircleDetail>
                    </ContainerCircleTitle>
                </DivText>
                <ContainerConteudoTexto style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 1 }}>
                    <div style={{ width: 190 }}>
                        <DivConteudo1>
                            <Bloco>
                                <Description>
                                    <TitleConteudo>DUTOS</TitleConteudo>
                                    Sistema utilizado para<br /> distribuição de ar para<br /> os ambientes, de<br /> acordo com a pressão<br /> e vazão determinado em<br /> projeto</Description>
                            </Bloco>
                            <BlocoImg>
                                <img style={{ marginLeft: 60 }} src={line} height="350" />
                            </BlocoImg>
                        </DivConteudo1>
                        <DivConteudo1>
                            <Bloco>
                                <Description>
                                    <TitleConteudo>VENTILACAO</TitleConteudo>
                                    Sistema utilizado para<br />
                                    insuflamento do ar<br />
                                    externo em ambientes<br />
                                    fechados, para melhorar<br />
                                    a condição térmica e<br />
                                    realizar a renovação do<br />
                                    ar. Se necessário deve-<br />se realizar a filtragem<br /> do ar externo antes que<br /> seja insuflado no<br /> ambiente interno.<br /><br />

                                    <span style={{ color: '#215D98' }}>Os equipamentos mais<br />
                                        utilizados são:</span><br />
                                    ventiladores, grelhas,<br />
                                    difusores, dampers e<br />
                                    elementos filtrantes.</Description>
                            </Bloco>
                            <BlocoImg>
                                <img style={{ marginLeft: 60 }} src={line} height="350" />
                            </BlocoImg>
                        </DivConteudo1>

                    </div>
                    <div>
                        <DivConteudo1>
                            <Bloco>
                                <Description style={{ width: 230 }}>
                                    <TitleConteudo>ARCONDICIONDO</TitleConteudo>
                                    Sistema utilizado para<br /> o
                                    tratamento do ar no<br />
                                    interior de espaços<br />
                                    fechados, que consiste<br />
                                    em regular a qualidade<br />
                                    do ar, no que diz<br /> respeito às suas<br /> condições de<br />
                                    temperatura, umidade,<br />
                                    limpeza e movimento.<br />
                                    <br />
                                    <span style={{ color: '#215D98' }}>Os equipamentos mais<br />
                                        utilizados são ar<br />
                                        condicionados tipo:</span><br />
                                    split, cassete, VRF, Ar<br />
                                    condicionado Central,<br />
                                    CAG (central de água<br />
                                    gelada) com chillers,<br />
                                    torres de resfriamentos,<br />
                                    fancoils e CAC (central<br />
                                    de água condensada)<br />
                                    com torres de<br />
                                    resfriamentos.</Description>
                            </Bloco>
                            <BlocoImg>
                                <img style={{ marginLeft: 100 }} src={line} height="350" />
                            </BlocoImg>
                        </DivConteudo1>
                    </div>
                    <div style={{ width: 190 }}>
                        <DivConteudo1>
                            <Bloco>
                                <Description>
                                    <TitleConteudo>REFRIGERACAO</TitleConteudo>
                                    Sistema utilizado para<br />
                                    resfriar determinados<br />
                                    ambientes de forma<br />
                                    controlada, para<br /> viabilizar<br />
                                    processos, processar e<br />
                                    conservar produtos<br />
                                    (refrigeração comercial<br />
                                    e industrial).<br /><br />

                                    <span style={{ color: '#215D98' }}>Os equipamentos mais
                                        utilizados são:</span> centrais<br /> de água gelada,<br /> geladeiras industriais,<br /> freezers, balcões, ilhas,<br /> câmaras frias, racks e<br /> forçadores.
                                </Description>
                            </Bloco>
                            <BlocoImg>
                                <img style={{ marginLeft: 80 }} src={line} height="350" />
                            </BlocoImg>
                        </DivConteudo1>
                        <DivConteudo1>
                            <Bloco style={{ marginTop: 110 }}>
                                <Description>
                                    <TitleConteudo>EXAUSTAO</TitleConteudo>
                                    Sistema utilizado para<br />
                                    retirada de partículas,<br />
                                    odor e calor de um<br />
                                    ambiente fechado e<br />
                                    expelir para o ambiente<br />
                                    externo. Se necessário<br />
                                    deve-se realizar a<br />
                                    filtragem das partículas<br />
                                    para não ocorrer<br />
                                    degradação do meio ambiente.<br /><br />

                                    <span style={{ color: '#215D98' }}>Os equipamentos mais
                                        utilizados são:</span><br /> exaustores<br />
                                    (ventiladores), grelhas,<br />
                                    coifas, dampers e<br />
                                    elementos filtrantes.</Description>
                            </Bloco>
                            <BlocoImg>
                                <img style={{ marginLeft: 80 }} src={line} height="350" />
                            </BlocoImg>
                        </DivConteudo1>
                    </div>
                </ContainerConteudoTexto>
                <Blog />
                <ContainerCarrosselFound>
                    <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
                        <motion.div
                            drag="x"
                            className="inner"
                            dragConstraints={{ right: 0, left: width }}>
                            {p.map(image => (
                                <motion.div className="item" key={image}>
                                    <img src={image} alt="texto alto" />
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </ContainerCarrosselFound>
            </ContainerSistem>

            <ContainerServicos style={{ marginTop: 40 }}>
                <DivTextTitle>
                    <EspecificacoesServico>ESPECIFICAÇÕES DO SERVIÇO</EspecificacoesServico>
                </DivTextTitle>
                <Servico />
            </ContainerServicos>

            <ContainerBalance>
                <ContainerBalanceText>
                    <BoxBalance>
                        <div>
                            <BalanceamentoText>BALANCEAMENTO E<br />
                                COMISSIONAMENTO</BalanceamentoText>
                            <p style={{ color: '#fff' }}>Com profissionais capacitados e instrumentos com tecnologia avançada, realizamos o<br /> balanceamento e<br />
                                comissionamento de novos projetos, ambientes com layouts modificados, ampliação de<br /> salas, ambientes com pontos de desconforto térmico, entre outros.</p>
                        </div>
                        <div>
                            <h2 style={{ color: '#fff', fontSize: 25, fontFamily: 'LemonMilk' }}>BALANCEAMENTO CONSISTE EM:
                            </h2>
                            <p style={{ color: '#fff' }}>O balanceamento é utilizado para o direcionamento do fluxo de ar, para garantir a<br /> homogeneidade na distribuição do ar e na climatização do ambiente.<br /> <br />

                                Com técnicos capacitados e instrumentos com tecnologias avançadas, realizamos o<br /> balanceamento do fluxo de ar para projetos novos, ambientes onde houve modificações<br /> no layout, ampliação de salas, ambientes com pontos de desconforto térmico e etc.<br /><br />

                                Disponibilizamos os relatórios de balanceamentos, que através das medições utilizando<br /> equipamentos específicos e calibrados, garantimos a confiabilidade das medições e dos<br /> resultados.</p>
                        </div>

                        <div>
                            <h2 style={{ color: '#fff', fontSize: 20, fontFamily: 'LemonMilk' }}>COMISSIONAMENTO CONSISTE EM:
                            </h2>
                            <p style={{ color: '#fff' }}>Disponibilização de equipe e equipamentos específicos para verificação e análise das<br /> instalações, assegurando que os sistemas e componentes do empreendimento estejam<br /> projetados, instalados, testados, mantidos e operando de acordo com as necessidades e<br /> requisitos operacionais do proprietário.<br /><br />

                                O processo de comissionamento pode ser aplicado tanto a novos empreendimentos<br /> quanto a unidades e sistemas existentes em processo de expansão, modernização ou<br /> ajuste.</p>
                        </div>
                    </BoxBalance>
                </ContainerBalanceText>
            </ContainerBalance>


            <ContainerCarrosselFound>
                <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
                    <motion.div
                        drag="x"
                        className="inner"
                        dragConstraints={{ right: 0, left: width }}>
                        {m.map(image => (
                            <motion.div className="item" key={image}>
                                <img src={image} alt="texto alto" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </ContainerCarrosselFound>

            <ContainerQuemSomos>
                <QuemSomos />
            </ContainerQuemSomos>

            <ContainerFormulário>
                <Formulario />

                {/* <Global />
                <Home boxData={data} /> */}
            </ContainerFormulário>
        </Container>
    )
}