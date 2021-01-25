import React from 'react';

import NavBar from '../../components/navbar/navbar.component';
import Search from '../../components/search/search.component';
import Button from '../../components/button/button.component';
import Footer from '../../components/footer/footer.components';

import './gallery.styles.scss';

class Gallery extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            photo: []
        };
    }

    nasaGallery = () => {
        fetch(`https://images-api.nasa.gov/search?q=${this.state.value}&media_type=image`)
        .then(response => response.json())
        .then(jsonResponse => {

            this.setState({photo: jsonResponse.collection.items.map((image, number) => {
                return (
                    <div key={number} className="gallery-picture">
                        <img src={image.links[0].href} alt="" />
                    </div>
                )
            })})
        });
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleClick = () => {
        this.nasaGallery();
    }

    render() {
        return (
            <div>
                <NavBar />
                <section className="gallery-container">
                    <div className="gallery-title">
                        <h2>Discover the most beautiful NASA's pictures</h2>
                    </div>
                    <div className="gallery-search">
                        <Search value={this.state.value} onChange={this.handleChange} />
                        <Button onClick={this.handleClick} />
                    </div>
                    {this.state.photo}
                </section>
                <Footer />
            </div>
        )
    }

}

export default Gallery;