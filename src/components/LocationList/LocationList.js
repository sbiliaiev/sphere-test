import React from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Icon, Button } from 'react-mdl';
import './LocationList.css';

export default class LocationList extends React.Component {
	render() {
		return (
			<List className="location-list">
				{this.props.locations.map((item, index) => {
					return (<ListItem key={index}>
							<ListItemContent>
								<Button raised ripple onClick={() => this.props.setCurrentLocation(item, index)}
								className={index === this.props.currentLocationIndex ? 'active-location' : ''}>
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
	currentLocationIndex: React.PropTypes.number,
};