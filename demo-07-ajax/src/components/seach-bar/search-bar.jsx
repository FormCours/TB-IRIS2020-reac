import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            search: ''
        };

        // Utilisation des refs pour "manipuler" l'input
        this.searchInput = createRef();
    } 

    handleSearch = (e) => {
        this.setState({
            search: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if(!this.state.search) {
            return
        }

        this.props.onSearch(this.state.search.trim());

        this.setState({
            search: ''
        });

        //Utilisation de la ref pour activé le focus sur l'input
        this.searchInput.current.focus();
    }

    render() {
        const {search} = this.state;
        const {placeholder, submitText} = this.props;

        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder={placeholder} type="text" 
                    ref={this.searchInput}
                    value={search} onChange={this.handleSearch}/>
                <input type="submit" value={submitText} disabled={!search}/>
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