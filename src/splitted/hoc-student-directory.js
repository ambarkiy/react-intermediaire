import React, { Component } from 'react';
import SearchBar from './search-bar.js';
import TableView from './table-view.js';

const list = [
	{ id: 1, nom: 'Ambarki', prenom: 'Youssef01' },
	{ id: 2, nom: 'Ambarki', prenom: 'Youssef02' },
	{ id: 3, nom: 'Ambarki', prenom: 'Youssef03' },
	{ id: 4, nom: 'Ambarki', prenom: 'Youssef04' },
	{ id: 5, nom: 'Ambarki', prenom: 'Youssef05' },
	{ id: 6, nom: 'Ambarki', prenom: 'Youssef06' },
	{ id: 7, nom: 'Ambarki', prenom: 'Youssef07' },
	{ id: 8, nom: 'Ambarki', prenom: 'Youssef08' },
	{ id: 9, nom: 'Ambarki', prenom: 'Youssef09' },
	{ id: 10, nom: 'Ambarki', prenom: 'Youssef10' },
	{ id: 11, nom: 'Ambarki', prenom: 'Youssef11' },
	{ id: 12, nom: 'Ambarki', prenom: 'Youssef12' },
	{ id: 13, nom: 'Ambarki', prenom: 'Youssef13' },
	{ id: 14, nom: 'Ambarki', prenom: 'Youssef14' },
	{ id: 15, nom: 'Ambarki', prenom: 'Youssef15' },
	{ id: 16, nom: 'Ambarki', prenom: 'Youssef16' }
];

class HOCStudentDirectory extends Component {
	constructor(props) {
		super(props);
		this.state = { list, searchTerm: '' };
	}

	render() {
		const { searchTerm, list } = this.state;
		return (
			<div>
				<SearchBar value={searchTerm} onChange={this.onSearchChange} />
				<TableView list={list} pattern={searchTerm} />
			</div>
		);
	}

	onSearchChange = (e) => this.setState({ searchTerm: e.target.value });
}
export default HOCStudentDirectory;
