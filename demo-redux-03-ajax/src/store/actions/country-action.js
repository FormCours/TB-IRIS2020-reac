import axios from 'axios';

export const COUNTRY_LOADING = 'COUNTRY_LOADING';
export const COUNTRY_FETCH ='COUNTRY_FETCH';
export const COUNTRY_ERROR ='COUNTRY_ERROR';

const URL_BASE = 'https://restcountries.eu/rest/v2/alpha/__code__'


export const loadCountry = () => ({
    type: COUNTRY_LOADING
});

export const fetchCountry = (data) => ({
    type: COUNTRY_FETCH,
    payload: {
        name: data.name,
        population: data.population,
        lang: data.languages.map(lang => lang.name)
    }
});

export const errorCountry = (error) => ({
    type: COUNTRY_ERROR,
    payload: error
});


export const requestCountry = (code) => {
    const url = URL_BASE.replace('__code__', code);

    return dispatch => {

        dispatch(loadCountry());

        axios.get(url)
            .then((response) => {
                dispatch(fetchCountry(response.data));
            })
            .catch(() => {
                dispatch(errorCountry('Erreur avec l\'api'));
            });
    }
}