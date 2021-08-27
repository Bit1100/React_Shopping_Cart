import React from 'react';
import '../index.css';

//Stateless Functional Component
const Navbar = ({ totalItems }) => {
    return (
        <h1 className="navbar">Navbar-
            <span className="heading heading-info">{totalItems}</span>
        </h1>
    );
}

export default Navbar;
