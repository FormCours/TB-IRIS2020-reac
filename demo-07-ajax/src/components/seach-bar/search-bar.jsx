import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };
    }

    handleSearch = (e) => {
        this.setState({
            search: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.onSearch(this.state.search);

        this.setState({
            search: ''
        });
    }

    render() {
        const {search} = this.state;
        const {placeholder, submitText} = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder={placeholder} type="text" value={search} onChange={this.handleSearch}/>
                <input type="submit" value={submitText}/>
            </form>
        );
    }
}

SearchBar.propTypes = {
    onSearch: PropTypes.func,
    placeholder: PropTypes.string, 
    submitText: PropTypes.string
}

SearchBar.defaultProps = {
    onSearch: () => {},
    placeholder: '',
    submitText: 'Search'
}

export default SearchBar;