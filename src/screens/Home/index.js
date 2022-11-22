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
    BalanceamentoText,
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
    ContDescription1,
    CircleDetail,
    ContAndText,
    ContainerQuemSomos,
    Tag,
    Texto,
    AlignItemsLocation,
    EspecificacoesServico,
    ContainerBlog,
    ContainerDepoimentos,
    TitleDepoimentos,
    LogoMM,
    LogoYoutube,
    Linha,
    BlocoExaustao,
    TitleConteudoArcon,
    DescriptionBalance,
    ImageMpoc,
    ButtonEspecificacoes
} from './styles'

import './App.css'

import { motion } from 'framer-motion'

import Blog from '../../components/Blog'
import Servico from '../../components/Servicos'
import Servico0 from '../../components/Servicos/Servicos-0/index'
import Servico1 from '../../components/Servicos/Servicos-1/index'
import Servico2 from '../../components/Servicos/Servicos-2/index'
import Servico3 from '../../components/Servicos/Servicos-3/index'
import QuemSomos from '../../components/QuemSomos'
import CarrosselPortfolio from "components/Carrossel/CarrosselPortfolio";
import Clientes from '../../components/Clientes'
import Formulario from "components/Formulario";

import line from '../../assets/line.png'
import Youtube from '../../assets/youtube.png'
import Banner from '../../assets/banner.png'
import Depoimentos from "components/Depoimentos";
import mpoc from '../../assets/mpoc.jpg'

import pessoa from '../../assets/images/1.png'
import pessoa1 from '../../assets/images/2.png'
import pessoa2 from '../../assets/images/3.png'

import p1 from '../../assets/p1.jpg'
import p2 from '../../assets/p2.jpg'
import p3 from '../../assets/p3.jpg'

import m1 from '../../assets/images/m1.png'
import m2 from '../../assets/images/m2.png'
import m3 from '../../assets/images/m3.png'

import d1 from '../../assets/depoimentos/pessoa.png'
import d2 from '../../assets/depoimentos/pessoa1.png'
import d3 from '../../assets/depoimentos/pessoa2.png'

import { DefaultPlayer as Video } from 'react-html5video'
import 'react-html5video/dist/styles.css'
import playvideo from '../../assets/video/video.mp4'

const images = [pessoa, pessoa1, pessoa2]
const depoimentos = [d1, d2, d3]
const p = [p1, p2, p3]
const m = [m1, m2, m3]

export default function Home() {

    const carousel = useRef()
    const [width, setWidth] = useState(0)

    const [pressedServico, setPressedServico] = useState(0)
    const [pressed, setPressed] = useState('')

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, []);

    return (
        <Container>

            <HomeContainer>
                {<Header />}
                <BannerContainer>
                    <LogoMM width="50%" src={Banner} />
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
            <Video
                autoPlay loop>
                <source src={playvideo} type="video/webm" />
            </Video>
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
                            <ContDescription1>
                                Somos uma empresa especialista em <br />fornecimento de Equipamentos, Peça, Projetos,<br /> Gerenciamento, Coordenação, Fabricação,<br /> Instalação e Manutenção de Sistema HVAC (ar<br /> condicionado, ventilação, exaustão e<br /> refrigeração).
                            </ContDescription1>
                        </ContSubscription>
                    </ContainerBlocoSubscription>

                </ContainerGlobalForm>
                <ContAndSubscription>
                    <ContAndText>
                        Possuímos ampla experiência em<br />
                        instalações de empreendimentos<br />
                        que buscam certificação LEED<br />
                        de sustentabilidade.
                    </ContAndText>
                </ContAndSubscription>
            </ContainerInform>

             <QuemSomos id="anchor" />

            <ContainerGaleria style={{marginTop: -5}}>
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

             <ContainerSistem id="sistem">
                <DivText>
                    <TitleEspecSistemas>
                        ESPECIFICAÇÕES<br />
                        DOS SISTEMAS
                    </TitleEspecSistemas>
                    <ContainerCircleTitle> 
                         <CircleDetail></CircleDetail>
                     </ContainerCircleTitle> 
                </DivText>
                <ContainerConteudoTexto>
                    <div className="divColumn" style={{ width: 190 }}>
                        <DivConteudo1>
                            <Bloco>
                                <Description>
                                    <TitleConteudo>DUTOS</TitleConteudo>
                                    Sistema utilizado para<br /> distribuição de ar para<br /> os ambientes, de<br /> acordo com a pressão<br /> e vazão determinado em<br /> projeto</Description>
                            </Bloco>
                            <BlocoImg>
                                <Linha style={{ marginLeft: 60 }} src={line} height="350" />
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
                                <Linha style={{ marginLeft: 60 }} src={line} height="350" />
                            </BlocoImg>
                        </DivConteudo1>

                    </div>
                    <div className="divColumn">
                        <DivConteudo1>
                            <Bloco>
                                <Description style={{ width: 230 }}>
                                    <TitleConteudoArcon>ARCONDICIONDO</TitleConteudoArcon>
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
                                <Linha style={{ marginLeft: 100 }} src={line} height="350" />
                            </BlocoImg>
                        </DivConteudo1>
                    </div>
                    <div className="divColumn" style={{ width: 190 }}>
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
                                <Linha style={{ marginLeft: 80 }} src={line} height="350" />
                            </BlocoImg>
                        </DivConteudo1>
                        <DivConteudo1>
                            <BlocoExaustao>
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
                            </BlocoExaustao>
                            <BlocoImg>
                                <Linha style={{ marginLeft: 27 }} src={line} height="350" />
                            </BlocoImg>
                        </DivConteudo1>
                    </div>
                </ContainerConteudoTexto>
            </ContainerSistem> 

            <ContainerServicos id="servicos">
                <DivTextTitle>
                    <EspecificacoesServico>ESPECIFICAÇÕES DO SERVIÇO</EspecificacoesServico>
                    <AlignItemsLocation>
                        <Tag onClick={() => setPressed('firstComponent')} style={{ cursor: 'pointer' }}>
                            <Texto>ENGENHARIA E PROJETOS</Texto>
                        </Tag>
                        <Tag onClick={() => setPressed('secondComponent')} style={{ cursor: 'pointer', marginLeft: 20 }}>
                            <Texto>FABRICAÇÃO E MONTAGEM DE DUTOS</Texto>
                        </Tag>
                        <Tag onClick={() => setPressed('threeComponent')}  style={{ cursor: 'pointer', marginLeft: 20 }}>
                            <Texto>INSTAÇÃO E RETROFIT</Texto>
                        </Tag>
                        <Tag onClick={() => setPressed('fourComponent')} style={{ cursor: 'pointer', marginLeft: 20 }}>
                            <Texto>BALANCEAMENTO E COMISSIONAMENTO</Texto>
                        </Tag>
                    </AlignItemsLocation>
                </DivTextTitle>
                {pressed === '' && <Servico id="teste"/>}
                {pressed === 'firstComponent' && <Servico0 />}
                {pressed === 'secondComponent' && <Servico1 />}
                {pressed === 'threeComponent' && <Servico2/>}
                {pressed === 'fourComponent' && <Servico3 />}

            </ContainerServicos>

            <ContainerBalance>
                <ContainerBalanceText>
                    <BoxBalance>
                        <BalanceamentoText>MANUTENCAO E PMOC</BalanceamentoText>
                        <DescriptionBalance>
                            Disponibilizamos de ténicos capacitados a executar as atividades de <br />
                            manutenção preventiva em conformidade com o PMOC e manutenção  <br />
                            corretiva não programada  <br /> <br />
                            Contamos com equipe de engenheiros capacitados para elaboração  <br />
                            implantação e manuntenção de PMOC ( Plano de Manutenção. Operação  <br />
                            e Controle), em conformidades com as premissas legais e normas  <br />
                            vigentes para o sistema de ar condicionado, garantindo a qualidade dos  <br />
                            sistemas e satisfação dos nossos clientes.  <br /> <br />
                            Com plantões em periodos de 24 horas por dia, disponibilizarmos de  <br />
                            técnicos e genheiros para execução de manuntenções, preventivas. <br /> <br />
                            Manunteção preventiva <br />
                            Manunteção corretiva <br />
                            Manuntenção preditiva
                        </DescriptionBalance>

                        <ImageMpoc src={mpoc} height="230" />
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
                            <motion.div className="item" key={images}>
                                <img src={image} alt="texto alto" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </ContainerCarrosselFound>

            <ContainerPortfolio id="portfolio">
                <CarrosselPortfolio />
            </ContainerPortfolio>

            <ContainerBlog id="blog">
                <Blog />
            </ContainerBlog>

            <ContainerDepoimentos>
                <TitleDepoimentos>DEPOIMENTOS</TitleDepoimentos>
                <Depoimentos />
            </ContainerDepoimentos>

            <ContainerGaleria>
                <motion.div ref={carousel} className="carousel" whileTap={{ cursor: 'grabbing' }}>
                    <motion.div
                        drag="x"
                        className="inner"
                        dragConstraints={{ right: 0, left: width }}>
                        {depoimentos.map(image => (
                            <motion.div className="item" key={image}>
                                <img src={image} alt="texto alto" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </ContainerGaleria>

            <Clientes />

            <Formulario id="form"/>
        </Container>
    )
}