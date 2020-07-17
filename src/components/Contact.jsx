import React from 'react';
import backGround from './asset/img/footerBg.jpg'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';


const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
   //&.loaded {
  background-image: url(${backGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
   //}
  height: 90vh;
`;

const StyledContactText = styled.div`
  padding: 6vh 0.5vh;
  background-color:#fff ;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  @media only screen and (min-width: 1000px) {
    padding: 7vh 4vh;
  }
`;

const StyledEmailFont = styled.h3`
  font-size: 2.6vh;
  @media only screen and (min-width: 1000px) {
    font-size: 3.2vh;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  margin: 5vh 2vh;
  color: #717171;
  display: inline-block;
`;


function Contact() {
  const style = {
    backgroundImage: `url(${backGround})`
  }
  return (
    <StyledFooter style={style} id="contact" name="contact">
      <StyledContactText>
        <h2 >Contact</h2>
        <p>Interested in working with me?</p>
        <p>Drop me a line:</p>
        <br />
        <br />
        <Fade up>
          <StyledEmailFont><StyledLink href="mailto:satoko.wakasa.2020@gmail.com">satoko.wakasa.2020@gmail.com</StyledLink></StyledEmailFont>
        </Fade>
        <StyledLink href="https://github.com/Satoko-chan">
          <GitHubIcon />
        </StyledLink>
        <StyledLink href="https://www.linkedin.com/in/satoko-wakasa-a26972167/">
          <LinkedInIcon />
        </StyledLink>
        <StyledLink href="https://codesandbox.io/u/Satoko-chan">
          <DeveloperModeIcon />
        </StyledLink>
      </StyledContactText>
    </StyledFooter>
  )
}

export default Contact;