import React from 'react';

import Header from '../../components/header/header.component';
import Main from '../../components/main/main.component';
import Footer from '../../components/footer/footer.components';

// Import images
import blackMoon from '../../images/blackMoon.jpg';
import moonDarkness from '../../images/moonDarkness.jpg';

class HomePage extends React.Component {
    
    render() {
        return (
            <div>
                <Header imageUrl={blackMoon} />
                <Main imageUrlOne={moonDarkness} imageUrlTwo={blackMoon} />
                <Footer />
            </div>
        )
    }

}

export default HomePage;