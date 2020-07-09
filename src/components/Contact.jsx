import React from 'react';
import backGround from './asset/img/portofolioFooter.jpg'
import styled from "styled-components";


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

        <StyledFooter style={style} id="contact">
            <div className="contactText">
                <h2 >Contact</h2>
                <p>Interested in working with me?</p>
                <p>Drop me a line:</p>
                <br></br>
                <h3>satoko.wakasa.2020@gmail.com</h3>
            </div>
        </StyledFooter>
    )
}

export default Contact;