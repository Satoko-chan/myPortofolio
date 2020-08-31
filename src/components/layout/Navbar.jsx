import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styled from "styled-components";
import smoothscroll from 'smoothscroll-polyfill';

const StyledSatoko = styled(Link)`
    font-family: 'Megrim', cursive;
    float: left;
    padding: 0 15px;
    line-height: 48px;
    font-size: 20px;
    list-style: none;
    color: #000;
`;

const StyledLink = styled(Link)`
    font-family: 'Megrim', cursive;
    float: right;
    margin: 0 10px;
    line-height: 48px;
    list-style: none;
    color: #000;
    @media only screen and (min-width: 1140px) {
      margin: 0 15px;
    }
`;

const StyledNavbar = styled.div`
    height: 48px;
    position: sticky;
    top: 0;
    z-index: 9999;
    margin: 0;
    padding: 0;
`;

// const scrollWithOffset = (e) => {
//     const yCoordinate = e.getBoundingClientRect().top + window.pageYOffset;
//     const yOffset = -80;
//     window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
// };

function Navbar() {
    smoothscroll.polyfill();
    return (
        // <Router>
        <StyledNavbar style={{ background: "rgba(255,255,255,0.9)" }}>
            {/* <StyledSatoko to="/#heading" smooth scroll={(e) => scrollWithOffset(e)}>Satoko</StyledSatoko> */}
            <StyledSatoko smooth={true} to="/#heading" >Satoko</StyledSatoko>
            <StyledLink smooth={true} to="/#contact">Contact</StyledLink>
            <StyledLink smooth={true} to="/#works">Works</StyledLink>
            <StyledLink smooth={true} to="/#about">About</StyledLink>
        </StyledNavbar>
        // </Router>
    )
}

export default Navbar;