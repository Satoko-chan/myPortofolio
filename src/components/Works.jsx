import React from 'react';
import Grid from '@material-ui/core/Grid';
// import workImg from "./asset/img/workImg.png"
// import Button from '@material-ui/core/Button';
import YamaLog from "./asset/img/YamaLog.jpg"
import Peace from "./asset/img/Peace.jpg"
import Blog from "./asset/img/Blog.jpg"
import BookChat from "./asset/img/BookChat.png"





function Works() {
    return (
        <div id="works">
            <h2>Works</h2>
            {/* <Grid container spacing={5} className="workOne" style={{ marginBottom: "10em" }}>
                <Grid item xs={12} sm={4} className="workImg">
                    <img src={workImg} width="80%" alt="workImg" />
                </Grid>
                <Grid item xs={12} sm={8} className="workText">
                    <h3 style={{ paddingBottom: "5%" }}>Yama-log</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <Button variant="outlined" size="large">GitHub</Button>
                </Grid>
            </Grid>
            <Grid container spacing={5} className="workTwo">
                <Grid item xs={12} sm={4} className="workImg">
                    <img src={workImg} width="80%" alt="workImg" />
                </Grid>
                <Grid item xs={12} sm={8} className="workText">
                    <h3 style={{ paddingBottom: "5%" }}>Dokusho-app</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <Button variant="outlined" size="large">GitHub</Button>
                    <Button variant="contained" size="large">Visit Webpage</Button>
                </Grid>
            </Grid> */}

            <Grid container spacing={5}>
                <Grid item xs={12} md={8} className="work1" >
                    <img src={YamaLog} width="100%" height="400em" alt="YamaLog" />
                </Grid>
                <Grid item xs={12} md={4} >
                    <img src={Peace} width="100%" height="400em" alt="Peace" className="work2" />
                </Grid>
                <Grid item xs={12} md={6} ><img src={Blog} width="100%" height="400em" alt="Blog" className="work3" /></Grid>
                <Grid item xs={12} md={6} ><img src={BookChat} width="100%" height="400em" alt="BookChat" className="work4" /></Grid>
            </Grid>


        </div >
    )
}

export default Works;