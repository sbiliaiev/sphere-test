import React from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Icon, Button } from 'react-mdl';

export default class LocationList extends React.Component {
	render() {
		return (
			<List style={{width: '256px'}}>
				{this.props.locations.map((item, index) => {
					return (<ListItem key={index}>
							<ListItemContent>
								<Button raised ripple style={{width: '200px'}} onClick={() => this.props.setCurrentLocation(item)}>
									{item}
								</Button>
							</ListItemContent>
							<ListItemAction>
								<a onClick={() => this.props.remove(item)}><Icon name="clear" /></a>
							</ListItemAction>
					</ListItem>);
				})}
			</List>
		); 
	}
}

LocationList.PropTypes = {
	locations: React.PropTypes.array,
	remove: React.PropTypes.func,
	setCurrentLocation: React.PropTypes.func,
};