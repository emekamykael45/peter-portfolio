import React, { Component } from "react";
import {
    BrowserRouter as Router,
    // Redirect,
    Route,
    Switch
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";

const NotFound = () => <h1>page not found</h1>;

export default class App extends Component {
    render = () => {
        return (
            <Router>
                <Switch>
                    {/* <Route exact path="/" component={() => <Redirect to="/home" />} /> */}
                    <Route exact path="/" component={Home} />
                    <Route exact path="/portfolio/:name" component={Portfolio} />
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    };
}
