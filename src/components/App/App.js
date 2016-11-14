import React from 'react';
import { Snackbar, Grid, Cell } from 'react-mdl';

import Header from '../Header/Header';
import SearchField from '../SearchField/SearchField';
import LocationList from '../LocationList/LocationList';
import WeatherIndicator from '../WeatherIndicator/WeatherIndicator';

export default class App extends React.Component {
	constructor() {
		super();
		if (localStorage.getItem('locations') && JSON.parse(localStorage.getItem('locations')).length > 0) {
			this.state = {
				locations: JSON.parse(localStorage.getItem('locations')),
				isSnackbarActive: false,
			};
		}
		else if (localStorage.getItem('locations') && JSON.parse(localStorage.getItem('locations')).length === 0) {
			this.state = {
				locations: [],
				isSnackbarActive: false,
			};
		}
		else {
			this.state = {
				locations: ['Kharkiv,UA', 'New York,US'],
				isSnackbarActive: false,
			};
		}
	}

	componentDidMount() {
		localStorage.setItem('locations', JSON.stringify(this.state.locations));
	}

	handleLocationSearch = (location) => {
		this.setState({
			currentLocation: location,
		});
	}

	handleLocationAdd = (location) => {
		this.setState({
			currentLocation: location,
		});
	}

	handleLocationRemove = (locationIndex) => {
		this.setState({ isSnackbarActive: true });
		let locations = this.state.locations;
		locations.splice(locationIndex, 1);
		this.setState({ locations });
	}

	handleLocationChange = (locationIndex) => {	
		this.setState({currentLocation: this.state.locations[locationIndex]});
	}

	handleWeatherResponse = (location) => {
		if (this.state.currentLocation !== location) {
			this.setState({
				locations: [...this.state.locations, location],
				currentLocation: location,
			});
		}
	}

	componentDidUpdate() {
		localStorage.setItem('locations', JSON.stringify(this.state.locations));
	}

	render() {
		return (
			<div>
				<Header />
				<SearchField onSearch={this.handleLocationSearch} />
				
				<Grid noSpacing={true}>
					<Cell col={3} offsetDesktop={2} tablet={3} phone={4}>
						<LocationList 
							locations={this.state.locations} 
							onLocationRemove={this.handleLocationRemove} 
							onLocationChange={this.handleLocationChange}
							onLocationAdd={this.handleLocationAdd} />
					</Cell>
					<Cell col={5} tablet={5} phone={4}>
						<WeatherIndicator 
							location={this.state.currentLocation}
							onResponse={this.handleWeatherResponse}
							show={this.state.locations.length > 0 ? true: false} />							
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
