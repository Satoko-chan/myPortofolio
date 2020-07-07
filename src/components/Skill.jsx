import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled, { keyframes } from 'styled-components';
// import { slideInUp } from 'react-animations';
import Roll from 'react-reveal/Roll';


const StyledItem1 = styled(Grid)`
  color: #fff;
  background: rgb(36,46,77);
  background: linear-gradient(90deg, rgba(36,46,77,1) 0%, rgba(118,140,192,1) 100%);
  border-radius: 50% 60% 50% 70% /60% 50% 70% 60%;
  mix-blend-mode: multiply;
  margin-left: 3%;
  height: 300px;
  margin-right: -3%;
`;
const StyledItem2 = styled(Grid)`
  color: #fff;
  background: rgb(106,125,96);
  background: linear-gradient(90deg, rgba(106,125,96,1) 0%, rgba(173,168,97,1) 100%);
  border-radius: 80% 30% 50% 50%/50% 70%;
  height: 300px;
  mix-blend-mode: multiply;
  margin-right: -3%;
`;
const StyledItem3 = styled(Grid)`
  color: #fff;
  background: rgb(203,131,132);
  background: linear-gradient(90deg, rgba(203,131,132,1) 0%, rgba(241,149,152,1) 100%);
  border-radius: 40% 50% 40%/40% 50% 50% 50%;
  height: 300px;
`;
// const SlideInUp = styled.div`animation: 2s ${keyframes`${slideInUp}`}`;

function Skill() {
    return (
        <div id="skill">

            <h2>What I do</h2>
            <Grid container spacing={1}>

                <StyledItem1 item xs={12} md={4} style={{ padding: "40px" }}>
                    <Roll left>
                        <h3 >Frond-end</h3>
                        <p>HTML5</p>
                        <p>CSS/SCSS</p>
                        <p>JavaScript, ES6</p>
                        <p>Bootstrap/Sass</p>
                    </Roll>
                </StyledItem1>


                <StyledItem2 item xs={12} md={4} style={{ padding: "50px" }}>
                    <Roll up timeout={2000}>
                        <h3>Frameworks</h3>
                        <p>Ruby on Rails</p>
                        <p>React, Redux</p>
                    </Roll>
                </StyledItem2>

                <StyledItem3 item xs={12} md={4} style={{ padding: "40px" }}>
                    <Roll right timeout={3000}>
                        <h3>Other skills</h3>
                        <p>Github</p>
                        <p>Responsive Design</p>
                        <p>Problem Solving</p>
                        <p>Public Relations</p>
                    </Roll>
                </StyledItem3>
            </Grid>
        </div>

        // <Grid container spacing={10} className="skill">
        //     <Grid item xs={12} sm={4} className="skillHeader">
        //         <div style={{ width: "100%", height: "20em", textAlign: "center", backgroundColor: "#cb73aa" }}>
        //             <h1 style={{ color: "#FFF", transform: "rotate(-10deg)" }}>What I do</h1>
        //         </div>


        //     </Grid>
        //     <Grid item xs={12} sm={4} className="skillOne">
        //         <div className="skillOneA" style={{ paddingBottom: "5em" }}>
        //             <h3>Frond-end</h3>
        //             <p>HTML5</p>
        //             <p>CSS3</p>
        //             <p>JavaScript</p>
        //             <p>React.js/Redux</p>
        //             <p>Bootstrap/Sass</p>
        //             <p>Github</p>
        //         </div>
        //         <div className="skillOneA">
        //             <h3>Back-end</h3>
        //             <p>Ruby on Rails</p>
        //             <p>MySQL</p>
        //         </div>
        //     </Grid>
        //     <Grid item xs={12} sm={4} className="skillTwo">
        //         <div className="skillTwoA" style={{ paddingBottom: "5em" }}>
        //             <h3>Other skills</h3>
        //             <p>Problem Solving</p>
        //             <p>Public Relations</p>
        //             <p>Workflow optimization</p>
        //             <p>Negotiation</p>
        //         </div>
        //         <div className="skillTwoB">
        //             <h3>Interests</h3>
        //             <p>Travel</p>
        //             <p>Hiking</p>
        //             <p>Classic Piano</p>
        //             <p>French Movies</p>
        //         </div>
        //     </Grid>
        // </Grid>
    )
}

export default Skill;