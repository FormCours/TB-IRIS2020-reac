import React, { Component } from 'react';
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
            codes: [...s.codes, code]
        }));
    }


    render() {
        const countries = this.state.codes.map(
            (c, index) => <CountryAjax key={index} code={c} />
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