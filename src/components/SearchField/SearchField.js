import React from 'react';
import { Textfield, Grid, Cell, FABButton, Icon } from 'react-mdl';
import './SearchField.css';

export default class SearchField extends React.Component {
	render() {
		return(
			<Grid>
				<Cell col={3} offsetDesktop={2} tablet={4} phone={4}>
					<form>
						<Textfield
							onChange={this.props.onChange}
							label="Enter your location"
							value={this.props.value}
						/>
						<FABButton ripple onClick={this.props.search}>
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