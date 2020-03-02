import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import "./Home.css";


class Home extends Component {
    state = {
        isLoading: false,
        showError: false,
        errorMessage: ""
    };

    componentDidMount = () => {
        window.scroll(0, 0);
    };

    render = () => {

        const { isLoading, showError, errorMessage } = this.state;

        return (
            <>
                <Spinner show={isLoading} />
                {showError ? <Error errorMsg={errorMessage} /> : null}
                <div className="content">
                    
                    <Navbar />
                    <div className="home page">
                        <div className="banner">
                            <div className="left">
                                <h6>Hello!</h6>
                                <h1>I am <span>Peter Peroro</span></h1>
                                <p>A professional programmer with longtime experience in this field, with longtime experience in this field.</p>
                                <div className="btn-actions">
                                    <Link className="btn btn-primary" to="/#portfolio">See portfolio</Link>
                                    <Link className="btn btn-secondary" to="/#contact">Contact me</Link>
                                </div>
                            </div>
                            <div className="right"></div>
                        </div>

                        <div className="section-one">
                            <div className="left">
                                <h3>INNOVATIVE SOLUTIONS TO BOOST YOUR CREATIVE PROJECTS</h3>
                                <div className="rule left">
                                    <hr className="top" />
                                    <hr className="bottom" />
                                </div>
                                <p>I am information technology enthusuast. I studued law and all its lies. I have a good heart and a good head. I am information technology enthusuast. I studued law and all its lies. I have a good heart and a good head.</p>

                                <div className="boxes">
                                    <div className="box">
                                        <div className="head">
                                            <img src="" alt="" />
                                            <h6>Back-End Web Development</h6>
                                        </div>
                                        <p>I am information technology enthusuast. I studued law and all its lies and here and there too.</p>
                                    </div>
                                    <div className="box">
                                        <div className="head">
                                            <img src="" alt="" />
                                            <h6>Back-End Web Development</h6>
                                        </div>
                                        <p>I am information technology enthusuast. I studued law and all its lies and here and there too.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <img src="https://res.cloudinary.com/emekamykael45/image/upload/v1583156908/peter/etty-fidele-l5rez6X2m8k-unsplash_1_qlsz5f.png" alt="" />
                                <div className="info">
                                    <h3>9</h3>
                                    <h6></h6>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </>
        );
    }
}

export default Home;
