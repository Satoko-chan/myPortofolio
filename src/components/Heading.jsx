import React from 'react';
import backGround from './asset/img/portofolioBg.jpeg'
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
  @media only screen and (min-width: 1140px) {
    padding: 8vh 4vh;
  }
`;

const StyledHeadingH1 = styled.h1`
  font-size: 17vh;
  line-height: 17vh;
  @media only screen and (min-width: 1140px) {
    font-size: 20vh;
    line-height: 20vh;
    }
`;

const StyledHeadingH2 = styled.h2`
  font-size: 6vh;
  @media only screen and (min-width: 1140px) {
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

// function onReady(callback) {
//   var intervalId = window.setInterval(function () {
//     if (document.getElementsByTagName('App')[0] !== undefined) {
//       window.clearInterval(intervalId);
//       callback.call(this);
//     }
//   }, 1000);
// }

// function setVisible(selector, visible) {
//   document.getElementsByTagName('App').style.display = visible ? 'block' : 'none';
// }

// onReady(function () {
//   setVisible('.page', true);
//   setVisible('#loading', false);
// })


function Heading() {
  return (
    <Router>
      <Fade in={true} timeout={1000}>
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
      <div id="loading"></div>
    </Router>
  )
}

export default Heading;