import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    const {className, placeholder, submitText} = props;

    // Créer un hook d'état pour stocker la valeur de l'input
    const [search, setSearch] = useState('');

    const handleSearch = (event) => {
        setSearch(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(search);
        setSearch('');
    }

    return (
        <form className={className} onSubmit={handleSubmit}>
            <input type="text" placeholder={placeholder}
                value={search} onChange={handleSearch}/>    
            <input type="submit" value={submitText}/>    
        </form>
    )
}

SearchBar.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    submitText: PropTypes.string,
    onSearch: PropTypes.func
}

SearchBar.defaultProps = {
    className: '',
    placeholder: '',
    submitText: 'Search',
    onSearch: () => {}
}
export default SearchBar;