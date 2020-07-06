import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';


const StyledItem1 = styled(Grid)`
  color: #fff;
  background: #242e4d;
  border-radius: 50% 60% 50% 70% /60% 50% 70% 60%;
  mix-blend-mode: multiply;
  margin-left: 3%;
  height: 300px;
  padding: 30px;
  margin-right: -3%;
`;
const StyledItem2 = styled(Grid)`
  color: #fff;
  background: #6a7d60;
  border-radius: 80% 30% 50% 50%/50%;
  height: 300px;
  padding: 30px;
  mix-blend-mode: multiply;
  margin-right: -3%;
`;
const StyledItem3 = styled(Grid)`
  color: #fff;
  background: #cb8384;
  padding: 30px;
  border-radius: 40% 40% 50% 40%/40% 50% 50% 50%;
  height: 300px;
`;

function Skill() {
    return (
        <div className="skill">

            <h2>What I do</h2>
            <Grid container spacing={1}>
                <StyledItem1 item xs={12} md={4}>
                    <h3>Frond-end</h3>
                    <p>HTML5</p>
                    <p>CSS/SCSS</p>
                    <p>JavaScript, ES6</p>
                    <p>Bootstrap/Sass</p>
                </StyledItem1>

                <StyledItem2 item xs={12} md={4}>
                    <h3>Frameworks</h3>
                    <p>Ruby on Rails</p>
                    <p>React, Redux</p>
                </StyledItem2>

                <StyledItem3 item xs={12} md={4}>
                    <h3>Other skills</h3>
                    <p>Github</p>
                    <p>Responsive Design</p>
                    <p>Problem Solving</p>
                    <p>Public Relations</p>
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