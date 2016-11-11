import React from 'react';
import { Spinner } from 'react-mdl';
import './css/weatherIcons.css';
import './WeatherIndicator.css';

export default class WeatherIndicator extends React.Component {
	render() {
		if (this.props.weather) {
			const weather = this.props.weather;
			return (
				<div className='weather-indicator-container'>
					<p>
						<li className={'wi wi-owm-'+weather.weather[0].id}></li>
						<span>{Math.round(weather.main.temp - 273.15)} &deg;C</span>
					</p>
					<p>{weather.weather[0].description.replace(/\b\w/g, l => l.toUpperCase())}</p>
				</div>
			);
		}
		else return <Spinner />;
	}
}

WeatherIndicator.PropTypes = {
	weather: React.PropTypes.object,
};