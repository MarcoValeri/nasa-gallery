import React from 'react';

import './button.styles.scss';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input type="submit" value="Search" onClick={this.props.onClick} />
        )
    }
}

export default Button;