import React from 'react';
import { Spinner } from 'react-mdl';
import './css/weatherIcons.css';
import './WeatherIndicator.css';
<<<<<<< HEAD

import { getCurrentWeather } from '../../api/weather';

export default class WeatherIndicator extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentWeather: '',
			showSpinner: true,
		};
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.location !== nextProps.location) {
			this.setState({showSpinner: true});
			getCurrentWeather(nextProps.location)
				.then((data) => {
					this.setState({
						currentWeather: data,
						showSpinner: false,
					});
					let str = data.name+','+data.sys.country.toUpperCase();
					nextProps.onResponse(str);
				});
		}
	}

	render() {
		if (this.props.show === false) {
			return null;
		}
		else if (this.state.showSpinner) {
			return (
				<div className='weather-indicator-container'>
					<Spinner />
				</div>
			);
		}
		else if (this.state.currentWeather) {
			const weather = this.state.currentWeather;
=======

export default class WeatherIndicator extends React.Component {
	render() {
		if (this.props.weather) {
			const weather = this.props.weather;
>>>>>>> 8bdd2fb9bff1cc2c1bc6b3ef2edec8f3879f6641
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
<<<<<<< HEAD
=======
		else return <Spinner />;
>>>>>>> 8bdd2fb9bff1cc2c1bc6b3ef2edec8f3879f6641
	}
}

WeatherIndicator.PropTypes = {
	weather: React.PropTypes.object,
};