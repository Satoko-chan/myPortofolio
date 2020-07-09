import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Roll from 'react-reveal/Roll';


const StyledItem1 = styled(Grid)`
  color: #fff;
  background: rgb(36,46,77);
  background: linear-gradient(90deg, rgba(36,46,77,1) 0%, rgba(118,140,192,1) 100%);
  mix-blend-mode: multiply;
  border-radius: 50% 60% 50% 70% /60% 50% 70% 60%;
  height: 43vh;
`;
const StyledItem2 = styled(Grid)`
  color: #fff;
  background: rgb(106,125,96);
  background: linear-gradient(90deg, rgba(106,125,96,1) 0%, rgba(173,168,97,1) 100%);
  mix-blend-mode: multiply;
  border-radius: 80% 30% 50% 50%/50% 70%;
  height: 35vh;
`;
const StyledItem3 = styled(Grid)`
  color: #fff;
  background: rgb(203,131,132);
  background: linear-gradient(90deg, rgba(203,131,132,1) 0%, rgba(241,149,152,1) 100%);
  mix-blend-mode: multiply;
  border-radius: 40% 50% 40%/40% 50% 50% 50%;
  height: 45xh;
`;

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
    )
}

export default Skill;