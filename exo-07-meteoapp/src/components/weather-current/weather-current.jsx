import React from 'react';
import PropTypes from 'prop-types';
import Weather from '../weather/weather';

import style from './weather-current.module.css';

const CurrentWeather = (props) => {
    const {data, onSave} = props;

    return (<>
        <h2 className={style.title}>Resultat de la recherche</h2>
        <div className={style.current}>
            <Weather className={style.data} {...data} />
            <div className={style.savebtn} onClick={onSave}></div>
        </div>
    </>);
}

CurrentWeather.propTypes = {
    data: {
        id: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        temp: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired
    },
    onSave: PropTypes.func.isRequired
}

export default CurrentWeather;