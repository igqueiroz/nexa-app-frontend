import React from 'react';
import styled from "styled-components"

export default function Footer(props) {
    return (
        <Wrapper> 
            <BoxFirst>
                <BoxSized>
                    <a href="https://www.fmu.br">Portal FMU</a>
                </BoxSized>
                <BoxSized>
                    <a href="https://portal.fmu.br/contato/">Atendimento</a>
                </BoxSized>
                <BoxSized>
                    <a href="https://portal.fmu.br/editais/">Perguntas Frequentes</a>
                </BoxSized>
            </BoxFirst>
            <BoxLast>
                <a href="tel:31323000">DÚVIDAS? LIGUE: 3132-3000</a>
            </BoxLast>
        </Wrapper>
    );
}
const BoxFirst = styled.div`
    display: flex;
    width: 750px;
    justify-content: space-between;
    text-align: center;
    margin: 0 auto;
    @media (max-width:800px) {
        width: 100%;
        display: block;
    }
`
const Wrapper = styled.footer`
    width: 100%;
    background-color: #333;
    margin-top: 60px;
    padding-bottom: 30px;
    padding-top: 30px;
`

const BoxSized = styled.div`
    width: 100%;
    flex-wrap: nowrap;
    text-transform: uppercase;
    justify-content: center;
    a:link, a:visited {
        color: #fff;
        text-decoration: none;
        font-size: 13px;
    } 
    @media (max-width:600px) {
        padding: 15px 0;
    }
    @media (min-width:601px) {
        padding: 20px 0;
    }
   
`

const BoxLast = styled.div`
    display: flex; 
    justify-content: center;
    margin: 10px auto;
    a:link, a:visited {
        color: #fff;
        text-decoration: none;
        font-size: 14px;
        text-align: center;
    }
    @media (max-width: 800px) {
        width: 100%;

    }
    
`