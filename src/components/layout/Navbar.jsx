import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

function Navbar() {
    return (

        <AppBar style={{ background: "rgba(255,255,255,0.8)" }}>
            <Toolbar>
                <Button>Satoko</Button>
                <Button>About</Button>
                <Button>Works</Button>
                <Button>Contact</Button>
            </Toolbar>
        </AppBar>

    )
}

export default Navbar;