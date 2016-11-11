import React, { Component } from 'react';
import { Snackbar, Grid, Cell } from 'react-mdl';
// import logo from './logo.svg';
import './App.css';

import Header from '../Header/Header';
import SearchField from '../SearchField/SearchField';
import LocationList from '../LocationList/LocationList';
import WeatherIndicator from '../WeatherIndicator/WeatherIndicator';

import { getCurrentWeather } from '../../api/weather';

export default class App extends Component {
	constructor() {
		super();
		if (localStorage.getItem('locations') && JSON.parse(localStorage.getItem('locations')).length > 2) {
			const currentCity = localStorage.getItem('currentCity') || 'Kharkiv,UA';
			this.state = {
				locations: JSON.parse(localStorage.getItem('locations')),
				isSnackbarActive: false,
				currentCity: currentCity,
				currentListItem: +localStorage.getItem('currentListItem'),
				searchLocation: '',
			};
			this.handleCurrentLocation(currentCity, this.state.currentListItem);
		}
		else {
			this.state = {
				currentCity: 'Kharkiv,UA',
				locations: ['New York,NY', 'Kharkiv,UA'],
				isSnackbarActive: false,
				currentListItem: 1,
				searchLocation: '',		
			};
			this.handleCurrentLocation('Kharkiv,UA', 1);
			localStorage.setItem('locations', JSON.stringify(this.state.locations));
		}
	}

	handleCitySearch = (event) => {
		event.preventDefault();
		getCurrentWeather(this.state.searchLocation)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				this.setState({
					locations: [...this.state.locations, data.name+','+data.sys.country.toUpperCase()],
					searchLocation: '',
					currentWeather: data,
					currentCity: data.name+','+data.sys.country.toUpperCase(),
					currentListItem: this.state.locations.length,
				});
				localStorage.setItem('locations', JSON.stringify(this.state.locations));
				localStorage.setItem('currentCity', data.name+','+data.sys.country.toUpperCase());
				localStorage.setItem('currentListItem', this.state.locations.length-1);
			});
	}

	handleLocationRemove = (location) => {
		this.setState({ isSnackbarActive: true });
		let locations = JSON.parse(localStorage.getItem('locations'));
		locations.splice(locations.indexOf(location), 1);
		this.setState({ locations });
		localStorage.setItem('locations', JSON.stringify(locations));
		if (location === this.state.currentCity) {
			this.handleCurrentLocation('Kharkiv,UA', 1);
		}	
	}

	handleCurrentLocation = (location, index) => {
		getCurrentWeather(location)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				localStorage.setItem('currentCity', location);
				localStorage.setItem('currentListItem', index);
				this.setState({
					currentWeather: data,
					currentCity: location,
					currentListItem: index,
				});
			});
	}

	handleInputChange = (event) => {
		this.setState({currentCity: event.target.value});
		this.setState({searchLocation: event.target.value});
	}
	
	render() {
		return (
			<div className="App">
				<Header />
				<SearchField onChange={this.handleInputChange} search={this.handleCitySearch} value={this.state.searchLocation} />
				
				<Grid noSpacing={true}>
					<Cell col={3} offsetDesktop={2} tablet={3} phone={4}>
						<LocationList locations={this.state.locations} 
							remove={this.handleLocationRemove} 
							setCurrentLocation={this.handleCurrentLocation}
							currentLocationIndex={this.state.currentListItem} />
					</Cell>
					<Cell col={5} tablet={5} phone={4}>
						<WeatherIndicator weather={this.state.currentWeather} />							
					</Cell>
				</Grid>
				
				<Snackbar
					active={this.state.isSnackbarActive}
					onTimeout={() => this.setState({ isSnackbarActive: false })}>
					Location has been deleted.
				</Snackbar>
			</div>
		);
	}
}
