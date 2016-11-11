import React from 'react';
import { Textfield, Grid, Cell, FABButton, Icon } from 'react-mdl';

export default class SearchField extends React.Component {
	render() {
		return(
			<Grid>
				<Cell col={8} tablet={8} phone={4} offsetDesktop={2}>
					<form>
						<Textfield
							onChange={this.props.onChange}
							label="Enter your location"
							style={{width: '200px'}}
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