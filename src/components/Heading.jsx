import React from 'react';
import backGround from './asset/img/portofolioLanding.jpg'
import styled from "styled-components";
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';

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


function Heading() {
  return (
    <StyledHeader id="heading">
      <Fade in={true} timeout={1500}>
        <div className="headingText">
          <Fade in={true} timeout={2000}><h2>I'm</h2></Fade>
          <Grow in={true} timeout={3000}><h1> Satoko,</h1></Grow>
          <Fade in={true} timeout={5000}><h2>a Front-end Web Developer</h2></Fade>
        </div>
      </Fade>
    </StyledHeader>
  )
}

export default Heading;