import React, { Component } from 'react';
import {nanoid} from 'nanoid';
import CountryAjax from '../../components/country-ajax/country-ajax';
import SearchBar from '../../components/seach-bar/search-bar';

class CountryApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            codes: []
        }
    }

    handleSearch = (code) => {
        this.setState((s) => ({
            codes: [{key:nanoid(), code}, ...s.codes]
        }));
    }


    render() {
        const countries = this.state.codes.map(
            c => <CountryAjax key={c.key} code={c.code} />
        )

        return (
            <div>
                <SearchBar onSearch={this.handleSearch}  placeholder={'Country Code'} />
                <ul>
                    {countries}
                </ul>
            </div>
        );
    }
}


export default CountryApp;