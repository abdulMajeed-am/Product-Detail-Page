import React from 'react';
import classes from './TopBar.module.css';

const TopBar=()=>{
    return(
        <header>
            <nav className={classes.Topbar}>
                <img src='https://www.logo.wine/a/logo/Amazon_(company)/Amazon_(company)-Logo.wine.svg' alt="Amazon Logo"/>
            </nav>
        </header>
    )
}
export default TopBar;