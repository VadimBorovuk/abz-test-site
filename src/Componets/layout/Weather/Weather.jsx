import React, {Component} from 'react';
import Mainform from "./mainform";
import MainMenu from "./mainMenu";
import MainTitle from "./mainTitle";

import BodyWeather from '../../../assets/imgs/weather-body.jpg'

import './style.scss';

const API_KEY = "30f23d9beb1fb6c803bb7bc15898dfa7";

class Weather extends Component {

    state = {
        city: undefined,
        temp: undefined,
        country: undefined,
        sunrise: undefined,
        sunset: undefined,
        wind: undefined,
        pressure: undefined,
        error: undefined,
    };

    gettingWeather = async (e) => {
        e.preventDefault();

        const city = e.target.elements.city.value;
        if (city) {
            const api_url = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();

            let sunset = data.sys.sunset;
            let Sdate = new Date();
            Sdate.setTime(sunset);
            let sunset_date = Sdate.getHours() + ":" + Sdate.getMinutes() + ":" + Sdate.getSeconds();

            let sunrise = data.sys.sunrise;
            let Rdate = new Date();
            Rdate.setTime(sunrise);
            let sunrise_date = Rdate.getHours() + ":" + Rdate.getMinutes() + ":" + Rdate.getSeconds();


            this.setState({
                temp: data.main.temp,
                city: data.name,
                country: data.sys.country,
                sunrise: sunrise_date,
                pressure: data.main.pressure,
                wind: data.wind.speed,
                sunset: sunset_date,
                error: undefined
            })
        } else {
            this.setState({
                city: undefined,
                temp: undefined,
                country: undefined,
                sunrise: undefined,
                sunset: undefined,
                wind: undefined,
                pressure: undefined,
                error: "Введите название города"
            })
        }

    };

    render() {
        return (
            <div id="weather">
                <div className="container">
                    <div className="row">
                        <div className="show-info">

                            <div className="show-info-block">
                                <MainMenu/>
                                <Mainform getWeather={this.gettingWeather}/>
                                <MainTitle {...this.state}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Weather;