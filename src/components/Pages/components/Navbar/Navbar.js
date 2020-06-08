/* eslint-disable eqeqeq */
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../Logo/Logo";
import './Navbar.css';


function scrollToHome() {
    const anchor = document.querySelector('#home');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function scrollToAbout() {
    const anchor = document.querySelector('#about');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function scrollToPortfolio() {
    const anchor = document.querySelector('#portfolio');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
function scrollToContact() {
    const anchor = document.querySelector('#contact');
    anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
}


export default function Navbar({ location }) {

    return (
        <nav className="navbar navbar-expand-md sticky-top">
            <Logo onClick={scrollToHome} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><img className="menu" alt="" src="https://res.cloudinary.com/emekamykael45/image/upload/v1583156965/peter/menu_cauu9l.png" /></span>
            </button>

            <div className="collapse navbar-collapse signed-in" id="navbarsExample08">
                <ul className="navbar-nav mr-auto"></ul>

                <ul className="navbar-nav mr-right">
                    <Link className={`nav-item ${location == '#home' && 'active'}`} to='#home' onClick={scrollToHome}>
                        Home
                    </Link>
                    <Link className={`nav-item ${location == '#about' && 'active'}`} to='#about'  onClick={scrollToAbout}>
                        About
                    </Link>
                    <Link className={`nav-item ${location == '#portfolio' && 'active'}`} to='#portfolio'  onClick={scrollToPortfolio}>
                        Portfolio
                    </Link>
                    <Link className={`nav-item ${location == '#contact' && 'active'}`} to='#contact'  onClick={scrollToContact}>
                        Contact
                    </Link>
                </ul>
            </div>
        </nav>
    );

}