import React from 'react';
import display from "../asset/img/portofolioDisplay.png";
import styled, { keyframes } from "styled-components";
import StyledButton from "../asset/button";

const StyledWorkTitle = styled.h3`
    color: #717171;
    font-size: 8vh;
    padding-bottom: 0.5em;
    padding-top: 5%;
  @media only screen and (min-width: 965px) {
    font-size: 10vh;
    letter-spacing: 1vh;
    padding-top: 0;
  }
`;

const StyledSubTitle = styled.h2`
    color: #717171;
    font-size: 5vh;
    letter-spacing: 0.2vh;
  @media only screen and (min-width: 965px) {
    font-size: 7vh;
  }
`;

const StyledP = styled.p`
    color: #717171;
    width: 80%;
    margin: 0 auto;
`;

const StyledDisplay = styled.img`
    width: 95%;
  @media only screen and (min-width: 965px) {
    width: 80%;
  }
`;

const StyledLang = styled.p`
  padding: 12px 20px;
  margin: 8px;
  background-color: rgba(27, 34, 50, 0.9);
  color: #fff;
  border-radius: 5px;
  font-size: 16px;
  display: inline-block;
`;

function Portofolio() {
    return (
        <div id="subWork">
            <StyledWorkTitle>Portofolio</StyledWorkTitle>
            <StyledP>My very first portofolio using React.js</StyledP>
            <br />
            <br />
            <StyledDisplay src={display} alt="portofolioDisplay" />
            <br />
            <br />
            <br />
            <br />
            <StyledSubTitle>Built with</StyledSubTitle>
            <StyledLang>React.js</StyledLang>
            <StyledLang>Material-UI</StyledLang>
            <StyledLang>React.js</StyledLang>
            <StyledLang>HTML5</StyledLang>
            <StyledLang>CSS3</StyledLang>
            <br />
            <br />
            <br />
            <br />
            <StyledSubTitle>Overview</StyledSubTitle>
            <StyledP>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</StyledP>
            <br />
            <br />
            <StyledButton href="https://github.com/Satoko-chan/myPortofolio">visit GitHub</StyledButton>
            <StyledButton href="https://im-satoko-wakasa.netlify.app/">visit Website</StyledButton>
            <br />
            <br />
        </div>
    )
}

export default Portofolio;