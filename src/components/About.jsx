import React from 'react';
import satoko from "./asset/img/satokoPhoto.JPG"
import Grid from '@material-ui/core/Grid';
// import { Wave } from 'react-animated-text';
import Rotate from 'react-reveal/Rotate';
import styled from "styled-components";

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';


const StyledAboutSatoko = styled.h3`
    font-size: 10vh;
    padding-bottom: 0.5em;
  @media only screen and (min-width: 965px) {
    font-size: 20vh;
    letter-spacing: 1.5vh;
  }
`;

const StyledSatokoImg = styled.img`
    width: 55%;
  @media only screen and (min-width: 965px) {
    width: 90%;
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
      {/* <StyledAboutSatoko><Wave text="Satoko" effect="jump" speed="2" delay="0" ></Wave></StyledAboutSatoko> */}
      <StyledAboutSatoko><Rotate bottom left timeout={1000}>Satoko</Rotate></StyledAboutSatoko>
      <Grid container spacing={5} >
        <Grid item xs={12} md={4} className="aboutImg">
          <StyledSatokoImg src={satoko} alt="satokoImg" />
        </Grid>
        <Grid item xs={12} md={8} className="aboutText" style={{ fontSize: "3.5vh", fontWeight: "bold" }}>
          <p>I’m Satoko, a 29-year-old Japanese front-end engineer based in Japan.</p>
          <br />
          <p>I enjoy creating the whole visual part of the web, keep improving my newly-learned skills and learning up-to-date technologies!</p>
          <br />
          <p>Working as a team member, I always try to be humility, hunger and flexible.</p>
          <br />
          <p>I studied Web Development at CICCC, an international community college in Vancouver, Canada.</p>
          <br />
          <p>I love to play and listen to classic piano, hiking, watching french movies, and travel all around the world!</p>
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