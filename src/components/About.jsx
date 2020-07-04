import React from 'react';
import satoko from "./asset/img/profilePhoto.JPG"
import Grid from '@material-ui/core/Grid';

function About() {

    return (
        <div>
            <Grid container spacing={5} className="about">
                <h1 style={{ position: "absolute", top: 5, right: 100 }}>About</h1>
                <Grid item xs={12} sm={4} className="aboutImg">
                    <img src={satoko} width="80%" alt="satokoImg" />
                </Grid>
                <Grid item xs={12} sm={8} className="aboutText">
                    <h3 style={{ paddingBottom: "5%" }}>I'm Satoko,<br></br>a front-end web developer based in Bangkok.</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;