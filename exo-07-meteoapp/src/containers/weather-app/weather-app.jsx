import React, { Component } from 'react';
import axios from 'axios';

import SearchBar from '../../components/seach-bar/search-bar';
import CurrentWeather from '../../components/weather-current/weather-current';
import WeatherList from '../../components/weather-list/weather-list';

const URL_BASE = 'http://api.openweathermap.org/data/2.5/weather?q=__city__&appid=__key__&units=metric&lang=fr';

class WeatherApp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentWeather: null,
            listWeather: [],
            isloaded: true,
            onError: false
        }
    }

    handleSearch = (city) => {
        this.setState({
            isloaded: false,
            onError: false,
            currentWeather: null,
        })
        
        const url = URL_BASE.replace('__key__', process.env.REACT_APP_WEATHER_KEY)
                            .replace('__city__', city);
        
        axios.get(url)
            .then(({data}) => {
                this.setState({
                    currentWeather: {
                        id: data.id,
                        city: data.name + ' ' + data.sys.country,
                        desc: data.weather[0].description,
                        temp: data.main.temp,
                        icon: data.weather[0].icon
                    },
                    isloaded: true,
                })
            })
            .catch(e => {
                this.setState({
                    isloaded: true,
                    onError: true,
                })
            })
    }

    handleSaveWeather = () => {
        if(!this.state.listWeather.find(w => w.id === this.state.currentWeather.id)) {
            this.setState(s => ({
                listWeather: [...s.listWeather, s.currentWeather]
            }));
        }
    }


    render() {
        const {currentWeather, isloaded, onError, listWeather} = this.state;

        return (
            <div>
                <SearchBar placeholder='Entrer une ville' submitText='Rechercher' disableSpace
                    onSearch={this.handleSearch} />
                {!isloaded ? (
                    <h2>Chargement</h2>
                ) : onError ? (
                    <h2>En erreur!</h2>
                ) : currentWeather !== null && (
                    <CurrentWeather data={currentWeather} onSave={this.handleSaveWeather}/>
                )} 
                <WeatherList list={listWeather} />
            </div>
        );
    }
}

export default WeatherApp;