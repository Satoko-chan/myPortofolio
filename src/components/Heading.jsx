import React from 'react';
import backGround from './asset/img/portofolioLanding.jpg'
import styled, { keyframes } from "styled-components";
import Fade from '@material-ui/core/Fade';
import Grow from '@material-ui/core/Grow';
// import { Typography } from "@material-ui/core";
// import { Skeleton } from '@material-ui/lab';

const StyledHeader = styled.header`
  width: 90%;
  margin: 10px 5% 0 5%;
  text-align: center;
  background-image: url(${backGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height: 90vh;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;


function Heading() {
  return (
    // <Skeleton animation="wave" >
    <StyledHeader className="heading">
      <Fade in={true} timeout={1500}>
        <div className="headingText">

          <Fade in={true} timeout={2000}><h2>I'm</h2></Fade>
          <Grow in={true} timeout={3000}><h1> Satoko,</h1></Grow>
          <Fade in={true} timeout={7000}><h2>a Front-end Web Developer</h2></Fade>
        </div>
      </Fade>
    </StyledHeader>
    // </Skeleton>

  )
}

export default Heading;