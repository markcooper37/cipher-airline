import React from 'react';
import './navbar.css';
import MobileNavigation from './mobileNavigation.js';
import Navigation from './navigation.js';


function Navbar() {
    return(
        <div class="NavBar">
            <Navigation/>
            <MobileNavigation/>
        </div>
    )
}


export {Navbar}