import React from 'react';
import { Link } from 'react-router-dom';

import './navbar.styles.scss';

const NavBar = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
        </ul>
    </nav>
)

export default NavBar;