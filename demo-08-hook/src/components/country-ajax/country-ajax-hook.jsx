import React, { Component, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const URL_BASE = 'https://restcountries.eu/rest/v2/alpha/__code__';


const CountryAjax = ({code}) => {

    const [isLoaded, setLoaded] = useState(false);
    const [data, setData] = useState(null);

    useEffect(() => {
        const url = URL_BASE.replace('__code__', code);
        axios.get(url) 
            .then((response) => {
                const {data} = response;
                setLoaded(true);
                setData({
                    country: data.translations.fr,
                    population: data.population.toLocaleString('FR-fr')
                })
            })
    }, [code]); // Execution uniquement si la valeur de "code" a été modifier !

    return (
        <div>
            {!isLoaded ? (
                <h3>Chargement</h3>
            ) : (<>
                <h3>{data?.country}</h3>
                <p>Population : {data?.population}</p>
            </>)
            }
        </div>
    );
}



CountryAjax.propTypes = {
    code: PropTypes.string.isRequired
}

export default CountryAjax;