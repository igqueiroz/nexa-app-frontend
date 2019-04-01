import React from 'react';
import styled from "styled-components"
import NexaLogo from "../images/achar-clinicas.png"

export default function Header(props) {
    return (
        <Wrapper>
            <LogoHeader>
                <a href="https://nexa-digital.appspot.com/"><NexaLogo /></a>
            </LogoHeader>
            <DetalheHeader>
                <Title>
                    Inscrição
                </Title>
            </DetalheHeader>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    width: 100%;
`

const LogoHeader = styled.div`
    width: 100%;
    background-color: #d10a11;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    
    @media (max-width:600px) {
        padding: 15px 0;
    }
    @media (min-width:601px) {
        padding: 20px 0;
    }
`
const DetalheHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    @media (max-width:600px) {
        height: 45px;
    }
    @media (min-width:601px) {
        height: 110px;
    }
`
const Title = styled.h2`
    text-align: center;
    color: #fff;
    @media (max-width:600px) {
        font-size: 20px;
    }
    @media (min-width:601px) {
        font-size: 30px;
    }
`