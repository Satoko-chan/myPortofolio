import React from 'react';
import Heading from "./Heading"
import About from "./About"
import Skill from "./Skill"
import Works from "./Works"
import Contact from "./Contact"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"

function App() {
    return (
        <div>
            <Navbar />
            <Heading />
            <About />
            <Works />
            <Skill />
            <Contact />
            <Footer />
        </div>
    )
}

export default App;