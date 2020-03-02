/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { Link } from "react-router-dom";
import {
    arrowRightS,
    logoW,
    facebookIcon,
    instagramIcon,
    twitterIcon
} from "../../../assets/svg";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="section footer">
            <div className="hero">
                <h1>
                    Ready to get started?
                    <br />
                    It is fast and very easy!
                </h1>
                <Link className="btn btn-secondary" to="/loans">
                    <p>Get started</p>
                    <img src={arrowRightS} alt="" className="arrow" />
                </Link>
            </div>
            <hr className="hero-hr" />
            <div className="foot">
                <img src={logoW} alt="" className="logo" />
                <div className="links">
                    <Link className="link" to="/">
                        HOME
                    </Link>
                    <Link className="link" to="/loans">
                        LOANS
                    </Link>
                    <Link className="link" to="/faq">
                        FAQ
                    </Link>
                    <Link className="link" to="/contact">
                        CONTACT US
                    </Link>
                </div>
                <div className="links">
                    <p className="link">info@lendha.com</p>
                    <p className="link">+234 816 791 0608</p>
                </div>
                <div className="social">
                    <hr />
                    <a className="link" href="https://www.facebook.com/thelendha" target="_blank">
                        <img src={facebookIcon} alt="" className="icon" />
                    </a>
                    <a className="link" href="https://www.instagram.com/thelendha" target="_blank">
                        <img src={instagramIcon} alt="" className="icon" />
                    </a>
                    <a className="link" href="https://www.twitter.com/thelendhaa" target="_blank">
                        <img src={twitterIcon} alt="" className="icon" />
                    </a>
                    <hr />
                </div>
                <div className="links">
                    <Link className="link" to="/terms">
                        Terms & Conditions
                    </Link>
                    <Link className="link" to="/privacy">
                        Privacy
                    </Link>
                </div>
                <p className="copy">c 2020 Lendha . All rights reserved.</p>
            </div>
        </footer>
    );
}
