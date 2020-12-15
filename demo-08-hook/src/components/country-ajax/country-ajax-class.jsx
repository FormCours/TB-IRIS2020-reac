import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const URL_BASE = 'https://restcountries.eu/rest/v2/alpha/__code__';

class CountryAjax extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false,
            country: null,
            population: null
        }
    }

    componentDidMount() {
        this.requestAjax(this.props.code);
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.code !== this.props.code) {
            this.requestAjax(this.props.code);
        }
    }

    requestAjax = (code) => {
        const url = URL_BASE.replace('__code__', code);
        axios.get(url) 
            .then((response) => {
                const {data} = response;
                this.setState({
                    isLoaded: true,
                    country: data.translations.fr,
                    population: data.population.toLocaleString('FR-fr')
                })
            })
    }

    render() {
        const {isLoaded, country, population} = this.state;

        return (
            <div>
                {!isLoaded ? (
                    <h3>Chargement</h3>
                ) : (<>
                    <h3>{country}</h3>
                    <p>Population : {population}</p>
                </>)
                }
            </div>
        );
    }
}

CountryAjax.propTypes = {
    code: PropTypes.string.isRequired
}

export default CountryAjax;