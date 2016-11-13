import React, { Component } from 'react';
import { Snackbar, Grid, Cell } from 'react-mdl';
<<<<<<< HEAD
=======
// import logo from './logo.svg';
>>>>>>> 8bdd2fb9bff1cc2c1bc6b3ef2edec8f3879f6641
import './App.css';

import Header from '../Header/Header';
import SearchField from '../SearchField/SearchField';
import LocationList from '../LocationList/LocationList';
import WeatherIndicator from '../WeatherIndicator/WeatherIndicator';

export default class App extends Component {
	constructor() {
		super();
		if (localStorage.getItem('locations') && JSON.parse(localStorage.getItem('locations')).length > 0) {
			this.state = {
				locations: JSON.parse(localStorage.getItem('locations')),
				isSnackbarActive: false,
<<<<<<< HEAD
			};
		}
		else if (localStorage.getItem('locations') && JSON.parse(localStorage.getItem('locations')).length === 0) {
			this.state = {
				locations: [],
				isSnackbarActive: false,
			};
=======
				currentCity: currentCity,
				currentListItem: +localStorage.getItem('currentListItem'),
				searchLocation: '',
			};
			this.handleCurrentLocation(currentCity, this.state.currentListItem);
>>>>>>> 8bdd2fb9bff1cc2c1bc6b3ef2edec8f3879f6641
		}
		else {
			this.state = {
				locations: ['Kharkiv,UA', 'New York,US'],
				isSnackbarActive: false,
<<<<<<< HEAD
			};
		}
	}

	componentDidMount() {
		localStorage.setItem('locations', JSON.stringify(this.state.locations));
	}

	handleCitySearch = (location) => {
		this.setState({
			currentLocation: location,
		});
=======
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
>>>>>>> 8bdd2fb9bff1cc2c1bc6b3ef2edec8f3879f6641
	}

	onLocationRemove = (locationIndex) => {
		this.setState({ isSnackbarActive: true });
		let locations = this.state.locations;
		locations.splice(locationIndex, 1);
		this.setState({ locations });
<<<<<<< HEAD
	}

	onLocationChange = (locationIndex) => {	
		this.setState({currentLocation: this.state.locations[locationIndex]});
	}

	onLocationAdd = (location) => {
		this.setState({
			currentLocation: location,
		});
	}

	handleWeatherResponse = (location) => {
		if (this.state.currentLocation !== location) {
			this.setState({
				locations: [...this.state.locations, location],
				currentLocation: location,
=======
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
>>>>>>> 8bdd2fb9bff1cc2c1bc6b3ef2edec8f3879f6641
			});
		}
	}

	componentDidUpdate() {
		localStorage.setItem('locations', JSON.stringify(this.state.locations));
	}

	render() {
		return (
			<div className="App">
				<Header />
<<<<<<< HEAD
				<SearchField onSearch={this.handleCitySearch} />
				
				<Grid noSpacing={true}>
					<Cell col={3} offsetDesktop={2} tablet={3} phone={4}>
						<LocationList 
							locations={this.state.locations} 
							onLocationRemove={this.onLocationRemove} 
							onLocationChange={this.onLocationChange}
							onLocationAdd={this.onLocationAdd} />
					</Cell>
					<Cell col={5} tablet={5} phone={4}>
						<WeatherIndicator 
							location={this.state.currentLocation}
							onResponse={this.handleWeatherResponse}
							show={this.state.locations.length > 0 ? true: false} />							
=======
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
>>>>>>> 8bdd2fb9bff1cc2c1bc6b3ef2edec8f3879f6641
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
