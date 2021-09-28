import React from 'react';
import './navbar.css';
import "bootstrap/dist/css/bootstrap.min.css"

function Navbar() {
    return (
        <nav id="navbar" class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Cipher Airlines</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">View Destinations</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">View Bookings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Manage Bookings</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">About Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">Contact Us</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">View Bookings</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar