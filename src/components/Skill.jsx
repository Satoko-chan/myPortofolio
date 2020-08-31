import React from 'react';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components';
import Roll from 'react-reveal/Roll';


const StyledGrid1 = styled(Grid)`
  color: #fff;
  background: rgb(36,46,77);
  background: linear-gradient(90deg, rgba(36,46,77,1) 0%, rgba(118,140,192,1) 100%);
  mix-blend-mode: multiply;
  border-radius: 50% 60% 50% 70% /60% 50% 70% 60%;
  height: 43vh;
`;
const StyledGrid2 = styled(Grid)`
  color: #fff;
  background: rgb(106,125,96);
  background: linear-gradient(90deg, rgba(106,125,96,1) 0%, rgba(173,168,97,1) 100%);
  mix-blend-mode: multiply;
  border-radius: 80% 30% 50% 50%/50% 70%;
  height: 35vh;
`;
const StyledGrid3 = styled(Grid)`
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
            <br />
            <Grid container spacing={1}>
                <StyledGrid1 item xs={12} sm={4} style={{ padding: "60px 38px" }}>
                    <Roll left>
                        <h3 >Frond-end</h3>
                        <p>HTML5</p>
                        <p>CSS3/SCSS</p>
                        <p>JavaScript</p>
                        <p>JQuery</p>
                        <p>Bootstrap</p>
                    </Roll>
                </StyledGrid1>

                <StyledGrid2 item xs={12} sm={4} style={{ padding: "60px 20px" }}>
                    <Roll up timeout={2000}>
                        <h3>Frameworks</h3>
                        <p>Ruby on Rails</p>
                        <p>React.js</p>
                        <p>Redux</p>
                    </Roll>
                </StyledGrid2>

                <StyledGrid3 item xs={12} sm={4} style={{ padding: "60px 38px" }}>
                    <Roll right timeout={3000}>
                        <h3>Other skills</h3>
                        <p>Github</p>
                        <p>Responsive-Design</p>
                        <p>Sketch</p>
                        <p>Public Relations</p>
                    </Roll>
                </StyledGrid3>
            </Grid>
        </div>
    )
}

export default Skill;