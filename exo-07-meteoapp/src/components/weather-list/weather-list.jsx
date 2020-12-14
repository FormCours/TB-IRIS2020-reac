import React from 'react';
import PropTypes, { exact } from 'prop-types';
import Weather from '../weather/weather';


const WeatherList = (props) => {
    const weathersJSX = props.list.map(
        weather => <li key={weather.id}><Weather {...weather} /></li>
    );

    return (<>
        <h2>Liste</h2>
        <ul>
            {weathersJSX}
        </ul>
    </>);
}

WeatherList.defaultProps = {
    list: []
}

WeatherList.propTypes = {
    list: PropTypes.arrayOf(exact({
        id: PropTypes.number.isRequired,
        city: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        temp: PropTypes.number.isRequired,
        icon: PropTypes.string.isRequired
    }))
}

export default WeatherList;