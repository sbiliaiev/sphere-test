import React from 'react';
import { Tabs, Tab } from 'react-mdl';

export default class LocationList extends React.Component {
	constructor(props) {
        super(props)
        this.state = { activeTab: 2 };
    }

	render() {
		return (
			<List style={{width: '300px'}}>
				<ListItem>
					<ListItemContent avatar="person">Bryan Cranston</ListItemContent>
					<ListItemAction>
					<a href="#"><Icon name="star" /></a>
					</ListItemAction>
				</ListItem>
			</List>
		); 
	}
}