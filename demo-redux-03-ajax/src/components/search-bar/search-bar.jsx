import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

const SearchBar = (props) => {
    const {submitText, placeholder} = props;

    const [search, setSearch] = useState('');
    const inputRef = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSearch(search);
        inputRef.current.focus();
        setSearch('');
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder={placeholder} ref={inputRef}
                value={search} onChange={(e) => setSearch(e.target.value)}/>
            <input type="submit" value={submitText}/>
        </form>
    );
}

SearchBar.propTypes = {
    submitText: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func
}

SearchBar.defaultProps = {
    placeholder: '',
    submitText: 'Rechercher',
    onSearch: () => {}
}

export default SearchBar;