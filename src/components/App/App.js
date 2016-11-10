import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
// import logo from './logo.svg';
import './App.css';

import Header from '../Header/Header';
import SearchField from '../SearchField/SearchField';


import { getCurrentWeather } from '../../api/weather';

export default class App extends Component {

	costructor() {
		this.state = {
			currentCity: '',
		};
	}

	handleCitySearch = (event) => {
		event.preventDefault();
		let tmp;
		getCurrentWeather(this.state.currentCity)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				console.log(data);
			});
	}

	handleInputChange = (event) => {
		console.log('handleInputChange', event.target.value);
		this.setState({currentCity: event.target.value});
	}
	
	render() {
		return (
			<div className="App">
				<Header />
				<SearchField onChange={this.handleInputChange} search={this.handleCitySearch} />
			</div>
		);
	}
}
