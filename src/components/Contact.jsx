import React from 'react';
import backGround from './asset/img/portofolioFooter.jpg'
import styled from "styled-components";
import Fade from 'react-reveal/Fade';


const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
   //&.loaded {
  background-image: url(${backGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
   //}
  height: 90vh;
`;


function Contact() {
    const style = {
        backgroundImage: `url(${backGround})`
    }
    return (
        <StyledFooter style={style} id="contact" name="contact">
            <div className="contactText">
                <h2 >Contact</h2>
                <p>Interested in working with me?</p>
                <p>Drop me a line:</p>
                <br />
                <br />
                <Fade up>
                    <h3>satoko.wakasa.2020@gmail.com</h3>
                </Fade>
            </div>
        </StyledFooter>
    )
}

export default Contact;