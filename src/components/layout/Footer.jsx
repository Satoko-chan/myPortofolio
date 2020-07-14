import React from 'react';
import styled from "styled-components";

const StyledP = styled.p`
  color: #717171;
  font-size: 1.5vh;
  height: 6vh;
  line-height: 6vh;
  @media only screen and (min-width: 1000px) {
    font-size: 1.8vh;
    height: 8vh;
    line-height: 8vh;
  }
`;

const year = new Date().getFullYear();
function Footer() {
    return (
        <StyledP>Created with full of ♡ by Satoko, ©︎{year}</StyledP>
    );
}

export default Footer;