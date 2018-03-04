import React, { Component } from 'react';
// = const Component = React.Component;

// SearchBar class based component
class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = { term: 'Starting value'};
    }

    render() {
        // return <input onChange={(event) => console.log(event.target.value)} />
        // return <input onChange={event => console.log(event.target.value)} />
        return (
            <div className="search-bar">
                <input
                    value = { this.state.term }
                    onChange={(event) => this.setState({ term: event.target.value })} />
            </div>
        );
    }
}

export default SearchBar;