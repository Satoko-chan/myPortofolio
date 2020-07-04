import React from 'react';
import backGround from './asset/img/portofolioLanding.jpg'


function Heading() {

    const style = {
        backgroundImage: `url(${backGround})`
    }
    return (

        <div style={style} className="heading">
            <div className="headingBg">
                <div className="headingText">
                    <h1 >I'm Satoko,</h1>
                    <h2>a Frontend Web Developer</h2>
                </div>
            </div>
        </div>
    )
}

export default Heading;