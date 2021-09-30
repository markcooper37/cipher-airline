import React from 'react';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
    return (
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="/">Cipher Airlines</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="/destinations">View Destinations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/all-flights">All Available Flights</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/details-confirmation">View Bookings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Manage Bookings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/about-us">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/contact">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar




// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setOpen] = useState(false);
//   return (
//     <nav
//       className="navbar is-primary"
//       role="navigation"
//       aria-label="main navigation"
//     >
//       <div className="container">
//         <div className="navbar-brand">
//           <a
//             role="button"
//             className={`navbar-burger burger ${isOpen && "is-active"}`}
//             aria-label="menu"
//             aria-expanded="false"
//             onClick={() => setOpen(!isOpen)}
//           >
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//             <span aria-hidden="true"></span>
//           </a>
//         </div>

//         <div className={`navbar-menu ${isOpen && "is-active"}`}>
//           <div className="navbar-start">
//             <NavLink className="navbar-item" activeClassName="is-active" to="/">
//               Home
//             </NavLink>

//             {/* <NavLink
//               className="navbar-item"
//               activeClassName="is-active"
//               to="/about"
//             >
//               About
//             </NavLink> */}

//             {/* <NavLink
//               className="navbar-item"
//               activeClassName="is-active"
//               to="/profile"
//             >
//               Profile
//             </NavLink> */}
//           </div>

//           <div className="navbar-end">
//             <div className="navbar-item">
//               <div className="buttons">
//                 <a className="button is-white">Log in</a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;