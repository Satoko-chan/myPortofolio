import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Heading from "./Heading"
import About from "./About"
import Skill from "./Skill"
import Works from "./Works"
import Contact from "./Contact"
import Navbar from "./layout/Navbar"
import Footer from "./layout/Footer"
import Portofolio from "./subpage/Portofolio"
import Yamalog from "./subpage/Yamalog"
import Api from "./subpage/Api"
import Blog from "./subpage/Blog"

function App() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/">
                        <Heading />
                        <About />
                        <Works />
                        <Skill />
                        <Contact />
                    </Route>
                    <Route path="/portofolio" component={Portofolio} />
                    <Route path="/yamalog" component={Yamalog} />
                    <Route path="/api" component={Api} />
                    <Route path="/blog" component={Blog} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;