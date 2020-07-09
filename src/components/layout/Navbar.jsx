import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from "styled-components";

const StyledSatoko = styled(Link)`
    float: left;
    padding: 0 15px;
    line-height: 48px;
    list-style: none;
    color: #000;
`;

const StyledLink = styled(Link)`
    float: right;
    padding: 0 15px;
    line-height: 48px;
    list-style: none;
    color: #000;
`;

const StyledNavbar = styled.div`
    font-family: 'Megrim', cursive;
    height: 48px;
    position: sticky;
    top: 0;
    z-index: 9999;
    margin: 0;
    padding: 0;
`;

function Navbar() {
    return (
        <Router>
            <StyledNavbar style={{ background: "rgba(255,255,255,0.9)" }}>
                <StyledSatoko smooth={true} to="/#heading">Satoko</StyledSatoko>
                <StyledLink smooth={true} to="/#contact">Contact</StyledLink>
                <StyledLink smooth={true} to="/#works">Works</StyledLink>
                <StyledLink smooth={true} to="/#about">About</StyledLink>
            </StyledNavbar>
        </Router>
    )
}

export default Navbar;