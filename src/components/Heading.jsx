import React from 'react';
import backGround from './asset/img/portofolioLanding.jpg'
import styled, { keyframes } from "styled-components";
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';
// import satokoGirl from "./asset/img/satokoGirl2.png"

const StyledHeader = styled.header`
  width: 100%;
  margin-top: 10px;
  text-align: center;
  background-image: url(${backGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
`;

const StyledArrow = styled.a`
  border: solid #fff;
  display: block;
  position: absolute;
  left: 48%; 
  margin-top: 78vh;
  width: 35px;
  height: 35px;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg) translate(0, 0);
  -webkit-transform: rotate(45deg);
  ${'' /* -ms-transform: translate(-50%); */}
`;

const StyledHeadingText = styled.div`
  color: white;
  padding: 6vh 2vh;
  /* background-color:rgba(107, 197, 173, 0.8) ; */
  background-color:rgba(137, 201, 184, 0.8) ;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  @media only screen and (min-width: 1000px) {
    padding: 8vh 4vh;
  }
`;

const StyledHeadingH1 = styled.h1`
  font-size: 17vh;
  @media only screen and (min-width: 1000px) {
    font-size: 20vh;
    }
`;

const StyledHeadingH2 = styled.h2`
  font-size: 6vh;
  @media only screen and (min-width: 1000px) {
    font-size: 8vh;
    }
`;

const Animation = keyframes`
  0% { 
      opacity: 0;
      top: 45%;
  }
  70% {
      opacity: 1;
  }
  100% { 
      opacity: 0;
  }
`;

const StyledArrowAnimation = styled.div`
  -moz-animation: ${Animation} 2s infinite;
  -webkit-animation: ${Animation} 2s infinite;
  animation: ${Animation} 2s infinite;
`;

// const StyledSatokoGirl = styled.img`
//   width: 100px;
//   opacity: 1;
// `;

function Heading() {
  return (
    <Router>
      <Fade in={true} timeout={500}>
        <StyledHeader id="heading">
          <Fade in={true} timeout={1500}>
            <StyledHeadingText>
              <Fade in={true} timeout={2000}><StyledHeadingH2>I'm</StyledHeadingH2></Fade>
              <Grow in={true} timeout={3000}><StyledHeadingH1> Satoko,</StyledHeadingH1></Grow>
              {/* <Grow><StyledSatokoGirl src={satokoGirl} /></Grow> */}
              <Fade in={true} timeout={5000}><StyledHeadingH2>a Front-end Web Developer</StyledHeadingH2></Fade>
            </StyledHeadingText>
          </Fade>
          <Link smooth={true} to="/#about">
            <StyledArrowAnimation >
              <StyledArrow href="#about"></StyledArrow>
            </StyledArrowAnimation>
          </Link>
        </StyledHeader>
      </Fade>
    </Router>
  )
}

export default Heading;