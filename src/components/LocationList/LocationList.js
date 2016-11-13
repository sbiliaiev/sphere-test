import React from 'react';
import { List, ListItem, ListItemContent, ListItemAction, Icon, Button } from 'react-mdl';
import './LocationList.css';

export default class LocationList extends React.Component {
	constructor(props) {
		super(props);
		if (localStorage.getItem('currentListItem')) {
			this.state = {
				currentLocationIndex: +localStorage.getItem('currentListItem'),
			};
		} 
		else {
			this.state = {
				currentLocationIndex: 0,
			};
		}
			
	}

	componentDidMount() {
		this.props.onLocationChange(this.state.currentLocationIndex);
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.locations.length < nextProps.locations.length) {
			this.setState({currentLocationIndex: this.props.locations.length});
		}
	}

	handleCurrentLocation = (index) => {
		this.setState({currentLocationIndex: index});
		this.props.onLocationChange(index);
	}

	handleLocationRemove = (index) => {
		if (index === this.state.currentLocationIndex) {
			if (index !== 0 && this.props.locations.length > 1) {
				this.handleCurrentLocation(index - 1);
			}
			else if (index === 0 && this.props.locations.length > 1) {
				this.props.onLocationChange(index+1);
			}
			else console.log('empty list');
		}
		this.props.onLocationRemove(index);
	}

	componentDidUpdate() {
		localStorage.setItem('currentListItem', this.state.currentLocationIndex);
	}

	render() {
		if (this.props.locations.length > 0) {
			return (
				<List className="location-list">
					{this.props.locations.map((item, index) => {
						return (<ListItem key={index}>
								<ListItemContent>
									<Button raised ripple onClick={() => this.handleCurrentLocation(index)}
									className={index === this.state.currentLocationIndex ? 'active-location' : ''}>
										{item}
									</Button>
								</ListItemContent>
								<ListItemAction>
									<a onClick={() => this.handleLocationRemove(index)}><Icon name="clear" /></a>
								</ListItemAction>
						</ListItem>);
					})}
				</List>
			); 
		}
		else {
			return(
				<List className="location-list">
					<ListItem key={0}>
						<ListItemContent>
							You dont have any locations :(
						</ListItemContent>
					</ListItem>
					<ListItem key={1}>
						<ListItemContent>
							To add some, find your city in the input field above
						</ListItemContent>
					</ListItem>
				</List>
			);
		}
	}
}

LocationList.PropTypes = {
	locations: React.PropTypes.array,
	remove: React.PropTypes.func,
	onLocationChange: React.PropTypes.func,
};