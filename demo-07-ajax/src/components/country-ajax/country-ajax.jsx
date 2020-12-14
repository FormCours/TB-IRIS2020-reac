import React, { Component } from 'react';
import PropTypes from "prop-types";
import axios from 'axios';

import style from './country.module.css';

const CountryDisplay = (props) => {
    const {country, population, flag} = props;
    return (
        <div className={style.country}>
            <h3>{country}</h3>
            <p>Population: {population}</p>
            <img src={flag} alt={`Flag of ${country}`} />
        </div>
    );
}


class CountryAjax extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoaded: false, 
            error: null,
            data: null
        }
    }

    componentDidMount() {
        const url = `https://restcountries.eu/rest/v2/alpha/${this.props.code}`;
        axios.get(url)
            .then(response => {
                const {data} = response;
                console.log(data);
                this.setState({
                    data: {
                        country: data.name, 
                        population: data.population.toLocaleString('en'), 
                        flag: data.flag
                    },
                    error: null,
                    isLoaded: true
                })
            })
            .catch(error => {
                this.setState({
                    error: error?.response?.data?.message ?? 'Error :\'(',
                    data: null,
                    isLoaded: true
                })
            })
    }


    render() {
        const {isLoaded, error, data} = this.state;
        console.log('rendu');

        return (
            <div>
                {!isLoaded ? (
                    <h3>Chargement</h3>
                ) : error ? (
                    <h3>{error}</h3>
                ) : (
                    <CountryDisplay {...data} />
                )}
            </div>
        )
    }
}

CountryAjax.propTypes = {
    code: PropTypes.string.isRequired
}

export default CountryAjax;