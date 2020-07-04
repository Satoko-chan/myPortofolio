import React from 'react';
import backGround from './asset/img/portofolioFooter.jpg'

function Contact() {
    const style = {
        backgroundImage: `url(${backGround})`
    }
    return (

        <div style={style} className="contact">
            <div className="contactBg">
                <div className="contactText">
                    <h1 >Contact</h1>
                    <p>Interested In working with me?</p>
                    <p>Reach me by email:</p>
                    <br></br>
                    <p>satoko.wakasa.2020@gmail.com</p>
                </div>
            </div>
        </div>
    )
}

export default Contact;