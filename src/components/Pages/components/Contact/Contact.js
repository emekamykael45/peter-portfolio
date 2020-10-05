/* eslint-disable eqeqeq */
import React from 'react';
import './Contact.css';


export default function Navbar() {

    return (
        <div id="contact" className="footer section">
            <div className="grid">
                <div className="left">
                    <h3 className="top-text">CONTACT</h3>
                    <div className="rule left">
                        <hr className="top" />
                        <hr className="bottom" />
                    </div>
                    <p className="sub-top-text">Feel free to reach out to me for your technology needs.</p>

                    <div className="info">
                        <h6>PHONE:</h6>
                        <p>+234 803 942 2740.</p>
                    </div>
                    <div className="info">
                        <h6>EMAIL:</h6>
                        <p>me@okaforpeter.com</p>
                    </div>

                    <div className="icons">
                        
                    </div>
                </div>

                <form className="form">
                    <div className="form-group">
                        <input name="name" className="form-control" placeholder="Your name" required />
                    </div>
                    <div className="form-group">
                        <input name="email" type="email" className="form-control" placeholder="Your email" required />
                    </div>
                    <div className="form-group">
                        <textarea name="message" className="form-control" rows='3' placeholder="Your message" required />
                    </div>

                    <button className="btn btn-submit">Send message</button>
                </form>
            </div>
            <p className="copyright">© All rights reserved . Okafor Peter {new Date().getFullYear()}</p>
        </div>
    );

}