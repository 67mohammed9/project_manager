import React from 'react';
import { AppBar, Toolbar, Button } from "@material-ui/core";

const HomeHeader = () => {

  
    return (
        <AppBar color="primary" position="static" style={{ height: 64 }}>
        <Toolbar style={{ height: 64 }}>
            <Button href="#text-buttons" color="secondary">Logout</Button>
        </Toolbar>
        </AppBar>
    );
};


export default HomeHeader;