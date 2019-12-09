import React, { Component } from 'react';
import SearchBar from './search-bar';
import TableView from './table-view';

const list = [
	{ id: 1, prenom: 'Michel', nom: 'Legrand' },
	{ id: 2, prenom: 'Tom', nom: 'Cruise' },
	{ id: 3, prenom: 'Angelina', nom: 'Joly' },
	{ id: 4, prenom: 'Bradley', nom: 'Cooper' },
	{ id: 5, prenom: 'Brian', nom: 'Depalma' }
];

class HocActorDirectory extends Component {
	constructor(props) {
		super(props);
		this.state = { pattern: '', list };
	}

	render() {
		const { pattern, list } = this.state;

		return (
			<div>
				<SearchBar value={pattern} onChange={this.onSearchChange}>
					Rechercher
				</SearchBar>
				<TableView pattern={pattern} list={list} />
			</div>
		);
	}

	onSearchChange = (e) => this.setState({ pattern: e.target.value });
}
export default HocActorDirectory;
