import React from "react";
import { Link } from "react-router-dom";
import './Logo.css';

export default ({ onClick }) => (
    <Link className="logo-link" to="/" onClick={onClick}>
        <p className="logo">Peter .</p>
    </Link>
);