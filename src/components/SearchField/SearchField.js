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
					<form onSubmit={this.handleFormSubmit}>
						<Textfield
							onChange={this.handleInputChange}
							label="Enter your location"
							value={this.state.searchLocation}
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
	onSearch: React.PropTypes.func,
};