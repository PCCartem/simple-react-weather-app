import React, { Component } from 'react';

class WeatherDisplay extends Component {

    constructor() {
        super();
        this.state = {
            weatherData: null
        }
    }

    componentDidMount() {
        const zip = this.props.zip;

        const URL = "http://api.openweathermap.org/data/2.5/weather?q=" +
            zip +
            "&appid=b1b35bba8b434a28a0be2a3e1071ae5b&units=metric&lang=ru";
        fetch(URL).then(res => res.json()).then(json => {
            this.setState({ weatherData: json });
        });
    }

    render() {
        const weatherData = this.state.weatherData;
        if (!weatherData) return <div>Loading</div>;
        const weather = weatherData.weather[0];
        const iconUrl = "http://openweathermap.org/img/w/" + weather.icon + ".png";
        return (
            <div className="weather">
                <h2>
                    {weather.description} в городе {this.props.name}
                    <img src={iconUrl} alt={weatherData.description} />
                </h2>
                <p>Текущая: {weatherData.main.temp}°</p>
                <p>Максимальная: {weatherData.main.temp_max}°</p>
                <p>Минимальная: {weatherData.main.temp_min}°</p>
                <p>Скорость ветра: {weatherData.wind.speed} м/с</p>
            </div>
        );

    }
}

export default WeatherDisplay;