import React from 'react';
import backGround from './asset/img/portofolioFooter.jpg'
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
            <div className="contactText">
                <h2 >Contact</h2>
                <p>Interested in working with me?</p>
                <p>Drop me a line:</p>
                <br />
                <br />
                <Fade up>
                    <h3><StyledLink href="mailto:satoko.wakasa.2020@gmail.com">satoko.wakasa.2020@gmail.com</StyledLink></h3>
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
            </div>
        </StyledFooter>
    )
}

export default Contact;