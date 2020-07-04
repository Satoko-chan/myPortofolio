import React from 'react';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

function Skill() {
    return (
        <Grid container spacing={10} className="skill">
            <Grid item xs={12} sm={4} className="skillHeader">
                <div style={{ width: "100%", height: "20em", textAlign: "center", backgroundColor: "#cb73aa" }}>
                    <h1 style={{ color: "#FFF", transform: "rotate(-10deg)" }}>What I do</h1>
                </div>


            </Grid>
            <Grid item xs={12} sm={4} className="skillOne">
                <div className="skillOneA" style={{ paddingBottom: "5em" }}>
                    <h3>Frond-end</h3>
                    <p>HTML5</p>
                    <p>CSS3</p>
                    <p>JavaScript</p>
                    <p>React.js/Redux</p>
                    <p>Bootstrap/Sass</p>
                    <p>Github</p>
                </div>
                <div className="skillOneA">
                    <h3>Back-end</h3>
                    <p>Ruby on Rails</p>
                    <p>MySQL</p>
                </div>
            </Grid>
            <Grid item xs={12} sm={4} className="skillTwo">
                <div className="skillTwoA" style={{ paddingBottom: "5em" }}>
                    <h3>Other skills</h3>
                    <p>Problem Solving</p>
                    <p>Public Relations</p>
                    <p>Workflow optimization</p>
                    <p>Negotiation</p>
                </div>
                <div className="skillTwoB">
                    <h3>Interests</h3>
                    <p>Travel</p>
                    <p>Hiking</p>
                    <p>Classic Piano</p>
                    <p>French Movies</p>
                </div>
            </Grid>
        </Grid>
    )
}

export default Skill;