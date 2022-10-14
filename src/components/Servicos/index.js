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
    BoxImg4
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
                                backgroundColor: '#fff',
                                marginTop: 70,
                                marginRight: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30
                            }}>
                            <p
                                style={{
                                    color: '#0787B5',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginTop: 7,
                                    fontFamily: 'LemonMilk'
                                }}>FABRICACAO E<br />
                                MONTAGEM DE DUTOS</p>
                        </Bloco>

                    </ContainerTitle>
                    <BoxImg>
                        <p style={{
                            color: 'white',
                            fontSize: 13,
                            marginTop: 20,
                            marginRight: 25,
                            }}>
                            Equipe especializada para<br />
                            fabricação e montagem de redes<br /> dutos metálicos e MPU.<br /><br />

                            Os dutos são fabricados<br />
                            conforme normas vigentes e<br />
                            especificações de projetos,<br />
                            seguindo um rigoroso<br />
                            processo de qualidade e<br />
                            higienização para fabricação<br />
                            e montagem.
                        </p>
                    </BoxImg>
                </Box>

                <Box>
                    <ContainerTitle>
                        <Bloco
                            style={{
                                height: 50,
                                width: 220,
                                backgroundColor: '#fff',
                                marginTop: 70,
                                marginRight: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30
                            }}>
                            <p
                                style={{
                                    color: '#0787B5',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginTop: 7,
                                    fontFamily: 'LemonMilk'
                                }}>FABRICACAO E<br />
                                MONTAGEM DE DUTOS</p>
                        </Bloco>

                    </ContainerTitle>
                    <BoxImg2>
                        <p style={{ color: 'white', fontSize: 13, marginTop: 55, marginRight: 25 }}>
                            Visitas técnicas, visando um estudo<br /> do projeto inicial, onde serão<br /> realizados levantamentos em campo,<br /> análises das necessidades do<br /> empreendimento e as exigências do<br /> cliente, sempre respeitando as<br /> normas pertinentes  e a segurança.<br /><br />

                            Projetos executivos, execução de<br /> instalações, startups, testes e<br /> comissionamento de sistemas.<br /><br />

                            Retrofit dos sistemas HVAC com<br /> fornecimento de equipamentos,<br />
                            peças e acessórios.<br /><br />

                            Elaboração e entrega do Databook<br /> (Manuais e “As Built”) dos sistemas<br /> HVAC.

                        </p>
                    </BoxImg2>
                </Box>

                <Box>
                    <ContainerTitle>
                        <Bloco
                            style={{
                                height: 50,
                                width: 220,
                                backgroundColor: '#fff',
                                marginTop: 70,
                                marginRight: 30,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30
                            }}>
                            <p
                                style={{
                                    color: '#0787B5',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginTop: 7,
                                    fontFamily: 'LemonMilk'
                                }}>FABRICACAO E<br />
                                MONTAGEM DE DUTOS</p>
                        </Bloco>

                    </ContainerTitle>
                    <BoxImg3>
                        <p style={{ color: 'white', fontSize: 13, marginTop: 65, marginRight: 25 }}>
                            Disponibilizamos de técnicos<br /> capacitados a executar as atividades<br /> de manutenção preventiva em<br /> conformidade com o PMOC e<br /> manutenção corretiva não programada.<br /><br />

                            Contamos com equipe de<br />
                            engenheiros capacitados para<br /> elaboração, implantação e<br /> manutenção de PMOC (Plano de<br /> Manutenção, Operação e Controle),<br /> em conformidade com as premissas<br /> legais e normas vigentes para<br /> sistemas de ar condicionado,<br /> garantindo a qualidade dos sistemas<br /> e satisfação dos nossos clientes.<br /><br />

                            Com plantões em períodos de 24<br /> horas por dia, disponibilizamos de<br /> técnicos e engenheiros para<br /> execução de manutenções,<br /> preventivas, corretivas e preditivas<br /><br />

                            Manutenção preventiva<br /><br />

                            Manutenção corretiva<br /><br />

                            Manutenção preditiva

                        </p>
                    </BoxImg3>
                </Box>

                <Box>
                    <ContainerTitle>
                        <Bloco
                            style={{
                                height: 50,
                                width: 250,
                                backgroundColor: '#fff',
                                marginTop: 70,
                                borderTopLeftRadius: 30,
                                borderTopRightRadius: 30
                            }}>
                            <p
                                style={{
                                    color: '#0787B5',
                                    fontWeight: 'bold',
                                    textAlign: 'center',
                                    marginTop: 7,
                                    fontFamily: 'LemonMilk'
                                }}>FABRICACAO E<br />
                                MONTAGEM DE DUTOS</p>
                        </Bloco>

                    </ContainerTitle>
                    <BoxImg4>
                        <p style={{ color: 'white', fontSize: 13, marginTop: 65 }}>
                            Equipe de engenharia qualificada<br />
                            e capacitada para elaboração de<br /> projetos executivos, levando em<br /> consideração todas as normas<br />
                            vigentes e particularidades de cada <br />empreendimento.<br /><br />

                            Nossos projetos incluem<br /> levantamento de informações em<br /> campo, apresentação de um pré-<br />projeto, memorial de cálculos, <br />memorial descritivo, planta baixa,<br /> detalhes<br />
                            típicos, cortes esquemáticos<br />
                            e ART de projeto.
                        </p>
                    </BoxImg4>
                </Box>
                {/* 
                <Box>
                    <ContainerTitle>
                        <Bloco style={{
                            height: 50,
                            width: 235,
                            marginRight: 15,
                            backgroundColor: '#fff',
                            marginTop: 70,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30
                        }}> <p style={{
                            color: '#0787B5',
                            fontWeight: 'bold',
                            textAlign: 'center',
                        }}>MANUTENÇÃO E PMOC</p> </Bloco>
                    </ContainerTitle>
                    <BoxImg>
                        <img src={quad3} height="540" />
                    </BoxImg>
                </Box>
                <Box>
                    <ContainerTitle>
                        <Bloco style={{
                            height: 50,
                            width: 270,
                            marginLeft: 20,
                            backgroundColor: '#fff',
                            marginTop: 70,
                            borderTopLeftRadius: 30,
                            borderTopRightRadius: 30
                        }}> <p style={{
                            color: '#0787B5',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            marginTop: 7
                        }}>ENGENHARIA<br />
                                E PROJETOS</p> </Bloco>
                    </ContainerTitle>
                    <BoxImg>
                        <img src={quad4} height="360" />
                    </BoxImg>
                </Box> */}
            </ContainerBox>
        </Container>
    )
}