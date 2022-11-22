import React from 'react';
import {
    Container,
    ContainerBox,
    Box,
    BoxImg,
    ContainerTitle,
    Bloco,
    BoxImg2,
    BoxImg3,
    BoxImg4,
    Description
} from './styles'

export default function Servico() {
    return (
        <Container>
            <ContainerBox style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gridGap: 1 }}>
                <Box>
                    <ContainerTitle>
                        <Bloco
                            style={{
                                height: 50,
                                width: 220,
                                backgroundColor: '#C99C1E',
                                marginTop: 70,
                                marginRight: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30
                            }}>
                            <p
                                style={{
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginTop: 7,
                                    fontFamily: 'LemonMilk'
                                }}>ENGENHARIA <br/> E PROJETOS</p>
                        </Bloco>

                    </ContainerTitle>
                    <BoxImg>
                        <p style={{
                            color: 'white',
                            fontSize: 15,
                            marginTop: 60,
                            marginRight: 25,
                            fontWeight: 100,
                            }}>
                            Equipe de engenharia <br/> qualificada e capacitada para <br/> elaboração de projetos <br/> executivos levando em <br/> consideração todas as normas <br/> vigentes e particularidades de <br/> cada empreendimento <br/><br/> Nossos projetos incluem levanta-<br/>mento de informações em <br/> campo, apresentação de um pré-<br/>projeto, memorial de cálculos, <br/>
                            memorial descritivo, planta <br/> baixa, detalhes típicos <br/> cortes esquemáticos <br/> e ART de projeto.
                        </p>
                    </BoxImg>
                </Box>

                 <Box>
                    <ContainerTitle>
                        <Bloco
                            style={{
                                height: 50,
                                width: 220,
                                backgroundColor: '#C99C1E',
                                marginTop: 70,
                                marginRight: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30
                            }}>
                            <p
                                style={{
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginTop: 7,
                                    fontFamily: 'LemonMilk'
                                }}>FABRICACAO E<br />
                                MONTAGEM DE DUTOS</p>
                        </Bloco>

                    </ContainerTitle>
                    <BoxImg2>
                        <p style={{ marginTop: -10,color: 'white', fontSize: 13,marginRight: 25 }}>
                                Equipe especializada para <br/> fabricação e montagem de redes <br/> dutos metálicos e MPU <br/> <br/>

                                Os dutos são fabricadas <br/> conforme normas vigentes e <br/> especificações de projetos <br/> segudno um rigoroso processo <br/>
                                de qualidade e higienização <br/>
                                para fabricação e montagem
                        </p>
                    </BoxImg2>
                </Box>

                <Box>
                    <ContainerTitle>
                        <Bloco
                            style={{
                                height: 50,
                                width: 220,
                                backgroundColor: '#C99C1E',
                                marginTop: 70,
                                marginRight: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30
                            }}>
                            <p
                                style={{
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginTop: 18,
                                    fontFamily: 'LemonMilk'
                                }}>INSTALACAO E RETROFIT</p>
                        </Bloco>

                    </ContainerTitle>
                    <BoxImg3 style={{display: 'flex', flexDirection: 'column'}}>
                        <Description style={{ color: 'white', fontSize: 13, marginTop: 65, marginRight: 25 }}>
                            Visitas técnicas visando um <br/>
                            estudo do projeto inicial onde <br/>
                            serão realizados levantamentos <br/>
                            em campo, análise das <br/>
                            necessidades do em- <br/>
                            preendimento e as exigências do <br/>
                            clientes, sempre respeitas as <br/>
                            normas pertinentes e a <br/>
                            segurança
                        </Description>
                        <Description style={{ color: 'white', fontSize: 13, marginTop: 5, marginRight: 25, fontWeight: 'bold' }}>
                            Projetos executivos, execução de <br/>
                            instalações, startups, testes e <br/>
                            comissionamento de <br/> sistemas <br/><br/>
                        </Description>

                        <Description style={{ color: 'white', fontSize: 13, marginTop: -15, marginRight: 25}}>
                        Retrofit dos sistemas HVAC com<br/> fornecimento de equipamentos, <br/>
                            peças e acessórios <br/><br/>
                        </Description>

                        <Description style={{ color: 'white', fontSize: 13, marginTop: -15, marginRight: 25, fontWeight: 'bold' }}>
                            Elaboração e entrega do <br/>
                            Databook (Manuais e "As Built")<br/>
                            dos sistemas HVAC
                        </Description>
                    </BoxImg3>
                </Box>

                <Box>
                    <ContainerTitle>
                        <Bloco
                            style={{
                                height: 50,
                                width: 250,
                                backgroundColor: '#C99C1E',
                                marginTop: 70,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30
                            }}>
                            <p
                                style={{
                                    color: '#000000',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginTop: 10,
                                    fontFamily: 'LemonMilk'
                                }}>BALANCEAMENTO E <br/> COMISSIONAMENTO
                            </p>
                        </Bloco>

                    </ContainerTitle>
                    <BoxImg4 style={{display: 'flex', flexDirection: 'column'}}>
                        <Description style={{ color: 'white', fontSize: 13, marginTop: 70 }}>
                            Com profissionais capacitados e <br/> 
                            instrumentos com tecnologia <br/>avançada realizamos o <br/>
                            balanceamo e <br/> comissionamento de novos <br/>
                            projetos, ambientes com layouts <br/>
                            modificados ampliação de salas <br/>
                            ambientes com pontos de <br/>
                            desconforto térmico entre<br/> outro
                        </Description>
                        <Description style={{ color: 'white', fontSize: 13, marginTop: -5, fontWeight: 'bold' }}>
                            BALANCEAMENTO CONSISTE EM: 
                        </Description>
                        <Description style={{ color: 'white', fontSize: 13, marginTop: -5}}>
                            O balanceamento é utilizado<br/> para o direcionamento do fluxo <br/>
                            de ar, para garantir a <br/>
                            homogeneidade na distribuição <br/>
                            do ar e na climatização do <br/> ambiente.
                        </Description>
                    </BoxImg4>
                </Box> 
            </ContainerBox>
        </Container>
    )
}