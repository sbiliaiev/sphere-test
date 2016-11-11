import React from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Icon } from 'react-mdl';

export default class LocationList extends React.Component {
	render() {
		// console.log(this.props);
		// console.log(JSON.parse(localStorage.getItem('locations')));
		return (
			<List style={{width: '256px'}}>
				{this.props.locations.map((item, index) => {
					return (<ListItem key={index}>
						<ListItemContent style={{borderBottom: 'solid black 1px'}}>
							{item}
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