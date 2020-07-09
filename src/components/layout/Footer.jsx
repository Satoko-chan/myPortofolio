import React from 'react';

const year = new Date().getFullYear();
function Footer() {
    return (
        <p style={{ height: "8vh", lineHeight: "8vh", fontSize: "2vh" }} className="footer">Created with full of ♡ by Satoko, ©︎{year}</p>
    );
}

export default Footer;