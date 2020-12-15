import React from 'react';
import { connect } from 'react-redux';
import SearchBar from '../../components/search-bar/search-bar';
import {requestCountry} from './../../store/actions/country-action';

const CountrySearch = (props) => {

    const handleSearch = (code) => {
        props.requestCountry(code);
    }

    return (
        <SearchBar placeholder='be' onSearch={handleSearch} />
    );
}


const mapDispatchToProp = {
    requestCountry
}

export default connect(null, mapDispatchToProp)(CountrySearch);