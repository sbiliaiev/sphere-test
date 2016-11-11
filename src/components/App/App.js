import React, { Component } from 'react';
import { Snackbar } from 'react-mdl';
// import logo from './logo.svg';
import './App.css';

import Header from '../Header/Header';
import SearchField from '../SearchField/SearchField';
import LocationList from '../LocationList/LocationList';

import { getCurrentWeather } from '../../api/weather';

export default class App extends Component {
	constructor() {
		super();
		if (JSON.parse(localStorage.getItem('locations')).length > 2) {
			this.state = {
				locations: JSON.parse(localStorage.getItem('locations')),
				isSnackbarActive: false,
				currentCity: '',
			};
		}
		else {
			this.state = {
				currentCity: '',
				locations: ['New York', 'Kharkiv'],
				isSnackbarActive: false,
			};
			localStorage.setItem('locations', JSON.stringify(this.state.locations));
		}
	}

	handleCitySearch = (event) => {
		event.preventDefault();
		getCurrentWeather(this.state.currentCity)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				console.log(data);
				this.setState({locations: [...this.state.locations, data.name]});
				localStorage.setItem('locations', JSON.stringify(this.state.locations));
				this.setState({currentCity: ''});
				console.log('here', this.state);
			});
	}

	handleLocationRemove = (location) => {
		// console.log('delete this', location);
		this.setState({ isSnackbarActive: true });
		let locations = JSON.parse(localStorage.getItem('locations'));
		locations.splice(locations.indexOf(location), 1);
		this.setState({ locations });
		localStorage.setItem('locations', JSON.stringify(locations));
		// console.log('locations', locations);
		// console.log('INDEX', locations.indexOf(location));
		// console.log('here', locations.splice(locations.indexOf(location), 1));
		// console.log('new locations', locations);

	}

	handleInputChange = (event) => {
		// console.log('handleInputChange', event.target.value);
		this.setState({currentCity: event.target.value});
	}
	
	render() {
		return (
			<div className="App">
				<Header />
				<SearchField onChange={this.handleInputChange} search={this.handleCitySearch} value={this.state.currentCity} />
				<LocationList locations={this.state.locations} remove={this.handleLocationRemove} />
				<Snackbar
					active={this.state.isSnackbarActive}
					onTimeout={() => this.setState({ isSnackbarActive: false })}>
					Location has been deleted.
				</Snackbar>
			</div>
		);
	}
}
