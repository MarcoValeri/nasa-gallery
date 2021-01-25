import React from 'react';
import { Link } from 'react-router-dom';

import './header.styles.scss';

const Header = (props) => (
    <header
        style={{
            backgroundImage: `url(${props.imageUrl})`
        }}
    >
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
            </ul>
        </nav>
        <section className="header-container">
            <h1 className="header-container-title">NASA Gallery</h1>
        </section>
    </header>
)

export default Header;