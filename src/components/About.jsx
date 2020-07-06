import React from 'react';
import satoko from "./asset/img/profilePhoto.JPG"
import Grid from '@material-ui/core/Grid';

function About() {

    return (
        <div className="about">
            <h2>About</h2>
            <h3 style={{ fontSize: "20vh", paddingBottom: "0.5em" }}>Satoko</h3>
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