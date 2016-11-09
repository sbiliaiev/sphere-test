import React from 'react';
import { Grid, Cell } from 'react-mdl';
import './Header.css';

export default function Header() {
	return(
		<Grid>
			<Cell col={8} tablet={8} phone={4} offsetDesktop={2}>
				<h1 className="app-header">Weather Widget</h1>
			</Cell>
		</Grid>
	);
}