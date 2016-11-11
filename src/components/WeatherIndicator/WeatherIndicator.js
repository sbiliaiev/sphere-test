import React from 'react';

export default class WeatherIndicator extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props);
	}

	render() {
		// const weather = this.props.weather;
		// console.log(weather);
		return(<ul>
			
		</ul>);
	}

	componentWillReceiveProps() {
		console.log('componentWillReceiveProps', this.props.weather);
	}

	componentDidMount() {
		console.log('componentDidMount', this.props.weather);
	}

	componentWillMount() {
		console.log('componentWillMount', this.props.weather);
	}

	componentWillUpdate() {
		console.log('componentWillUpdate', this.props.weather);
	}
}

WeatherIndicator.PropTypes = {
	weather: React.PropTypes.object,
};