import React from 'react';
import { Link } from 'react-router-dom';

import './main.styles.scss';

const Main = (props) => (
    <main>
        <section className="main-container">
            <h2 className>Discover the space</h2>
            <div className="main-container-media">
                <h2>Space photos</h2>
                <Link to="/gallery"><img src={props.imageUrlOne} alt="moon" /></Link>
            </div>
            <div className="main-container-media">
                <h2>Space media</h2>
                <Link to="/gallery"><img src={props.imageUrlTwo} alt="logo" /></Link>
            </div>
        </section>
    </main>
)

export default Main;