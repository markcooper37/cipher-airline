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


// const NavSlide = () => {
        
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');
//     //toggle nav
//     burger.addEventListener('click', () =>{
//         nav.classList.toggle('.nav-active');

//          //animate links
//         navLinks.forEach((link, index) => {
//             if(link.style.animation) {
//                 link.style.animation = '';
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 1.5}s`;
//             }
//         });
//         //Burger animation
//         burger.classList.toggle(`toggle`);
//     });
   
// }


export {Navbar}