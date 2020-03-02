import React from "react";
import { Link } from "react-router-dom";
import './Logo.css';

export default () => (
    <Link className="logo-link" to="/">
        <p className="logo">Peter .</p>
    </Link>
);