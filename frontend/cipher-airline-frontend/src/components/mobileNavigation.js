import NavLinks from './navLinks.js';
import './navbar.css';
import { useState } from 'react';


const MobileNavigation = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav class="MobileNavigation">
            <div class="burger" onClick={() => setOpen(!open)}>
                <div class="line1" ></div>
                <div class="line2" ></div>
                <div class="line3" ></div>
            </div>
            {open && <NavLinks />}
        </nav>
        
    )
}

export default MobileNavigation;