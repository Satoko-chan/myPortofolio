import React from 'react';
import satoko from "./asset/img/profilePhoto.JPG"
import Grid from '@material-ui/core/Grid';
import { Wave } from 'react-animated-text';
import styled from "styled-components";

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';


const StyledAboutSatoko = styled.h3`
    font-size: 15vh;
    padding-bottom: 0.5em;
    letter-spacing: 1vh;
  @media only screen and (min-width: 600px) {
    font-size: 20vh;
  }
`;

const StyledSatokoImg = styled.img`
    width: 60%;
  @media only screen and (min-width: 1000px) {
    width: 85%;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  margin: 5vh 2vh;
  color: #717171;
  display: inline-block;
`;

function About() {

  return (
    <div id="about">
      <h2>About</h2>
      <StyledAboutSatoko><Wave text="Satoko" speed="2" delay="0" ></Wave></StyledAboutSatoko>
      <Grid container spacing={5} >
        <Grid item xs={12} md={4} className="aboutImg">
          <StyledSatokoImg src={satoko} alt="satokoImg" />
        </Grid>
        <Grid item xs={12} md={8} className="aboutText">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <br></br>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
          <StyledLink href="https://github.com/Satoko-chan">
            <GitHubIcon />
          </StyledLink>
          <StyledLink href="https://www.linkedin.com/in/satoko-wakasa-a26972167/">
            <LinkedInIcon />
          </StyledLink>
          <StyledLink href="https://codesandbox.io/u/Satoko-chan">
            <DeveloperModeIcon />
          </StyledLink>
        </Grid>
      </Grid>
    </div>
  )
}

export default About;