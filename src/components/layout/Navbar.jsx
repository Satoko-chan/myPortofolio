import React from 'react';


function Navbar() {

    return (

        <div style={{ background: "rgba(255,255,255,1)" }} className="navbar">
            <ul>
                <a className="satoko" href="/">Satoko</a>
                <div className="navBarRight">
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#works">Works</a></li>
                    <li><a href="#about">About</a></li>
                </div>
            </ul>
        </div>

    )
}

export default Navbar;