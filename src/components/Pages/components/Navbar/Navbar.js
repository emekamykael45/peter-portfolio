import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from "../Logo/Logo";
import './Navbar.css';

export default function Navbar({home, about, faq, contact}) {

    return (
        <nav className="navbar navbar-expand-md sticky-top">
            <Logo />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"><img className="menu" alt="" src="https://res.cloudinary.com/emekamykael45/image/upload/v1583156965/peter/menu_cauu9l.png" /></span>
            </button>

            <div className="collapse navbar-collapse signed-in" id="navbarsExample08">
                <ul className="navbar-nav mr-auto"></ul>

                <ul className="navbar-nav mr-right">
                    <NavLink className='nav-item' to={home ? home : '#home'}>
                        Home
                    </NavLink>
                    <NavLink className='nav-item' to={about ? about : '#about'}>
                        About
                    </NavLink>
                    <NavLink className='nav-item' to={faq ? faq : '#faq'}>
                        Portfolio
                    </NavLink>
                    <NavLink className='nav-item' to={contact ? contact : '#contact'}>
                        Contact
                    </NavLink>
                </ul>
            </div>
        </nav>
    );
}