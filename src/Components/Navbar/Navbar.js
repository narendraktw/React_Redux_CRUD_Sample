import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.module.scss';

const NavBar = () => (
    <nav>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>           
        </ul>
    </nav>
);

export default NavBar;