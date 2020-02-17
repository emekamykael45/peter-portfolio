import React from "react";
import './Navbar.css';

export default () => (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#home">
                    Peter.
                </a>
            </div>

            <ul class="navbar-nav">
                <li class=" nav-item active">
                    <a href="#home" class="nav-link"> Home </a>
                </li>
                <li class="nav-item">
                    <a  class="nav-link" href="#about"> About </a>
                </li>
                <li class="nav-item">
                    <a  class="nav-link" href="#portfolio"> Portfolio </a>
                </li>
                <li class="nav-item">
                    <a  class="nav-link" href="#contact"> Contact </a>
                </li>
            </ul>
        </div>
    </nav>
);
