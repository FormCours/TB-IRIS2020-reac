import React from 'react';
import PropTypes from 'prop-types';

import style from './weather.module.css'

const Weather = ({city, desc, temp, icon, className}) => (
    <div className={`${className} ${style.weahter}`}>
        <div className={style.info}>
            <h3>{city}</h3>
            <p>{temp}°c</p>
            <p>{desc}</p>
        </div>
        <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={`Image de temps ${desc}`} className={style.icon}/>
    </div>
);

Weather.defaultProps = {
    className: ''
}

Weather.propTypes = {
    city: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    temp: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    className: PropTypes.string 
}

export default Weather;