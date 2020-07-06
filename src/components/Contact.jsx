import React from 'react';
import backGround from './asset/img/portofolioFooter.jpg'
import styled, { keyframes } from "styled-components";


const StyledFooter = styled.footer`
  width: 95%;
  margin: 10px 3% 0 3%;
  text-align: center;
   //&.loaded {
  background-image: url(${backGround});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
   //}
  height: 90vh;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-right: 0;
    margin-left: 0;
  }
`;


function Contact() {
    const style = {
        backgroundImage: `url(${backGround})`
    }
    return (

        <StyledFooter style={style} className="contact">
            <div className="contactText">
                <h2 >Contact</h2>
                <p>Interested In working with me?</p>
                <p>Drop me a line:</p>
                <br></br>
                <h3>satoko.wakasa.2020@gmail.com</h3>
            </div>
        </StyledFooter>
    )
}

export default Contact;