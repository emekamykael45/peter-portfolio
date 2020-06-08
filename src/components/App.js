import React, { Component } from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch
} from "react-router-dom";
import Home from "./Pages/Home/Home";

const NotFound = () => <h1>page not found</h1>;

export default class App extends Component {
    render = () => {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="*" component={NotFound} />
                </Switch>
            </Router>
        );
    };
}
