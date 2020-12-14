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
        const value = this.props.disableSpace ? e.target.value.replaceAll(' ', '') :  e.target.value;
        this.setState({
            search: value
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
        const {className, placeholder, submitText} = this.props;

        return (
            <form className={className} onSubmit={this.handleSubmit}>
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
    submitText: PropTypes.string,
    className: PropTypes.string,
    disableSpace: PropTypes.bool
}

SearchBar.defaultProps = {
    onSearch: () => {},
    placeholder: '',
    submitText: 'Search',
    className: '',
    disableSpace: false
}

export default SearchBar;