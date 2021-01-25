import React from 'react';

import './search.styles.scss';

class Search extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <input type="text" value={this.props.value} onChange={this.props.onChange} />
            </div>
        )
    }
}

export default Search;