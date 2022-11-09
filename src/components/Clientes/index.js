import React from 'react';

import {
    Container,
    Title,
    DivLogos,
    Logos,
    Linha
} from './styles'

import logosClientes from '../../assets/logos/logos.png'

export default function Blog() {
    return (
        <Container>
            <Title>Principais Clientes</Title>

            <DivLogos>
                <Logos src={logosClientes} width="80%" />
                <Linha></Linha>
            </DivLogos>

        </Container>
    )
}