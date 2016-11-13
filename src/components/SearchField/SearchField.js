import React from 'react';
import { Textfield, Grid, Cell, FABButton, Icon } from 'react-mdl';
import './SearchField.css';

export default class SearchField extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			searchLocation: '',
		};
	}

	handleInputChange = (event) => {
		this.setState({searchLocation: event.target.value});
	}

	handleFormSubmit = (event) => {
		event.preventDefault();
		this.props.onSearch(this.state.searchLocation);
		this.setState({searchLocation: ''});
		event.target.firstChild.className = "mdl-textfield mdl-js-textfield is-upgraded is-focused";
	}

	render() {
		return(
			<Grid>
				<Cell col={3} offsetDesktop={2} tablet={4} phone={4}>
<<<<<<< HEAD
					<form onSubmit={this.handleFormSubmit}>
=======
					<form>
>>>>>>> 8bdd2fb9bff1cc2c1bc6b3ef2edec8f3879f6641
						<Textfield
							onChange={this.handleInputChange}
							label="Enter your location"
<<<<<<< HEAD
							value={this.state.searchLocation}
=======
							value={this.props.value}
>>>>>>> 8bdd2fb9bff1cc2c1bc6b3ef2edec8f3879f6641
						/>
						<FABButton ripple>
							<Icon name="search" />
						</FABButton>
					</form>					
				</Cell>
			</Grid>
		);
	}
}

SearchField.PropTypes = {
	onChange: React.PropTypes.func,
	onClick: React.PropTypes.func,
	value: React.PropTypes.string,
};