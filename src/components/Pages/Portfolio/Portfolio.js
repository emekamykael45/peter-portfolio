import React, { Component } from "react";
import Logo from "../components/Logo/Logo";
import Spinner from "../components/Spinner/Spinner";
import Error from "../components/Error/Error";
import "./Portfolio.css";


class Portfolio extends Component {
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
                <div className="portfolio">
                    
                    <Logo />

                    <h1 className="welcome">SERVICES</h1>

                </div>
            </>
        );
    }
}

export default Portfolio;
