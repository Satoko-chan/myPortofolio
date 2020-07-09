import React from 'react';
import satoko from "./asset/img/profilePhoto.JPG"
import Grid from '@material-ui/core/Grid';
import { Wave } from 'react-animated-text';
import styled from "styled-components";


// const StyledAboutSatoko = styled.h3`


//   @media only screen and (min-width: 600px) {
//     fontSize: "15vh";
//   }
// `;

function About() {

    return (
        <div id="about">
            <h2>About</h2>
            {/* <StyledAboutSatoko style={{ fontSize: "20vh", paddingBottom: "0.5em", letterSpacing: "1vh" }}><Wave text="Satoko" speed="2" delay="0" ></Wave></StyledAboutSatoko> */}
            <h3 style={{ fontSize: "20vh", paddingBottom: "0.5em", letterSpacing: "1vh" }}><Wave text="Satoko" speed="2" delay="0" ></Wave></h3>
            <Grid container spacing={5} >
                <Grid item xs={12} md={4} className="aboutImg">
                    <img src={satoko} width="85%" alt="satokoImg" />
                </Grid>
                <Grid item xs={12} md={8} className="aboutText">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <br></br>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;