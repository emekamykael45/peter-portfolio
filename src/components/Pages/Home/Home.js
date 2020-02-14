import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Logo from "../components/Logo/Logo";
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
                <div className="home">
                    
                    <Logo />

                    <h1 className="welcome">HOME</h1>

                </div>
            </>
        );
    }
}

export default Home;
