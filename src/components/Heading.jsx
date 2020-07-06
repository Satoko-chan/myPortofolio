import React from 'react';
import backGround from './asset/img/portofolioLanding.jpg'
import styled, { keyframes } from "styled-components";

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
        <StyledHeader className="heading star" id="star">
            <div className="headingText">
                <h2 >I'm</h2><h1> Satoko,</h1>
                <h2>a Front-end Web Developer</h2>
            </div>
        </StyledHeader>
    )
}

export default Heading;