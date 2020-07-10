import React from 'react';
import backGround from './asset/img/portofolioLanding.jpg'
import styled, { keyframes } from "styled-components";
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
import { HashLink as Link } from 'react-router-hash-link';
import { BrowserRouter as Router } from 'react-router-dom';

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
  left: 50%; 
  margin-top: 80vh;
  width: 35px;
  height: 35px;
  border-width: 0 3px 3px 0;
  transform: rotate(45deg) translate(0, 0);
  -webkit-transform: rotate(45deg);
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

function Heading() {
  return (
    <Router>
      <StyledHeader id="heading">
        <Fade in={true} timeout={1500}>
          <div className="headingText">
            <Fade in={true} timeout={2000}><h2>I'm</h2></Fade>
            <Grow in={true} timeout={3000}><h1> Satoko,</h1></Grow>
            <Fade in={true} timeout={5000}><h2>a Front-end Web Developer</h2></Fade>
          </div>
        </Fade>
        <Link smooth={true} to="/#about">
          <StyledArrowAnimation >
            <StyledArrow href="#about"></StyledArrow>
          </StyledArrowAnimation>
        </Link>
      </StyledHeader>
    </Router>
  )
}

export default Heading;