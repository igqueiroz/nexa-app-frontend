import React, {useState} from 'react';
import styled from "styled-components"
import { Nav } from 'react-bootstrap';

export default function Header(props) {
    const [openMenu, setOpenMenu] = useState(false)
    const changeOpenMenu = (value) => {
        setOpenMenu(value)
    }
    
    return (
        <Wrapper>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Nav className="navbar navbar-dark bg-dark">
                            <Menu resizeNav={resizeNav} className={`${(openMenu) ? "open" : ""}`}>
                                <NavLayer className={`${(openMenu) ? "open" : ""}`} />
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/geolocation">Sobre Geolocalização</a></li>
                                    <li><a href="/about">Nexa Digital</a></li>
                                    <li><a href="/users">Lista de Usuários</a></li>
                                </ul>
                            </Menu>
                            <NavbarBrand href="/">Nexa Digital</NavbarBrand>
                            <NavToggle 
                                onClick={ event => {
                                    changeOpenMenu(true);
                                    if(openMenu) {changeOpenMenu(false)}
                                    }
                                }
                                className={`${(openMenu) ? "open" : ""}`}
                            >
                                <NavToggleSpan />
                                <NavToggleSpan />
                                <NavToggleSpan />
                            </NavToggle>
                        </Nav>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.header`
    background: #343a40;
    color: #fff;
`
const NavbarBrand = styled.a`
    &:link, &:hover, &:visited {
        font-size: 2rem;
        z-index: 2;
        color: white;
        text-decoration: none;    
    }
`

const NavToggle = styled.a`
    width: 32px;
    height: 32px;
    cursor: pointer;
    -webkit-transform: rotate(0deg);
    transform: rotate(0deg);
    z-index: 2;
    &.open span:nth-child(1){
        -webkit-transform: rotate(45deg);
        transform: rotate(45deg);
        top: 3px;
        left: 4px;
    }
    &.open span:nth-child(2){
        width: 0;
        opacity: 0;
    }
    &.open span:nth-child(3){
       -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        top: 25px;
        left: 4px;
    }
`
const NavToggleSpan = styled.span`
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 1px;
    background: #fff;
    position: absolute;
    left: 0;
    -webkit-transition: .5s ease-in-out;
    transition: .5s ease-in-out;
    &:nth-child(1) {
        top: 4px;
        -webkit-transform-origin: left center;
        transform-origin: left center;
    }
    &:nth-child(2) {
        top: 14px;
        -webkit-transform-origin: left center;
        transform-origin: left center;
    }
    &:nth-child(3) {
        top: 24px;
        -webkit-transform-origin: left center;
        transform-origin: left center;
    }
    
`
const NavLayer = styled.div`
    position: absolute;
    top: 16px;
    left: 16px;
    z-index: -1;
    background: rgba(0, 0, 0, 0.8);
    border-radius: 50%;
    -webkit-transition: 2s;
    transition: 2s;
    -webkit-transform: scale3d(0, 0, 0);
    transform: scale3d(0, 0, 0);
    background: -webkit-linear-gradient(to left, #22472c, #71c2ff);
    background: linear-gradient(to left, #22472c, #71c2ff);
    &.open {
        transition: 2s;
        -webkit-transform: scale3d(1, 1, 1);
        transform: scale3d(1, 1, 1);
        width: ${props => props.resizeNav.diameter}px;
        height:  ${props => props.resizeNav.diameter}px;
        margin-top: -${props => props.resizeNav.radius}px;
        margin-left: -${props => props.resizeNav.radius}px;
    }
`
let radius = Math.sqrt(Math.pow(window.innerHeight, 2) + Math.pow(window.innerWidth, 2));
const resizeNav = {
    radius: radius,
    diameter: radius * 2
};
NavLayer.defaultProps = {
    resizeNav
}

const Menu = styled.div`
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    -webkit-transition: ease-in-out 0.25s;
    transition: ease-in-out 0.25s;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
    opacity: 0;
    visibility: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    color: #fff;
    font-size: 5vh;

    @media (max-width:600px) {
        font-size: 4vh;
    }

    ul {
        list-style: none;
    }

        
    height: ${props => window.innerHeight}px;
    &.open {
        visibility: visible;
        opacity: 1;
        -webkit-transition: ease-in-out 0.5s;
        transition: ease-in-out 0.5s;
        -webkit-transition-delay: 0.25s;
        transition-delay: 0.25s;
        z-index: 2;
    }
    & li:hover{
        list-style: disc;
    }
    & li a:visited,
    & li a:link {
        color: #fff;
    }
    & li:hover a {
        text-decoration: none;
    }
`
