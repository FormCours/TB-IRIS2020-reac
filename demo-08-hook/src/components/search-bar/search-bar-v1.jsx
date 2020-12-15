import React, { useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    const {className, placeholder, submitText} = props;

    // Créer un hook d'état pour stocker la valeur de l'input
    const [search, setSearch] = useState('');

    return (
        <form className={className} onSubmit={(e) => {
            // Attention a la lisibilité avec cette méthode!
            e.preventDefault();
            props.onSearch(search);
            setSearch('');
        }}>
            <input type="text" placeholder={placeholder}
                value={search} onChange={(e) => setSearch(e.target.value)}/>    
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