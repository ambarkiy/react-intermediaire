import React, { Component } from 'react';

const eleves = [
	{ id: 1, nom: 'Ambarki', prenom: 'Youssef01' },
	{ id: 2, nom: 'Ambarki', prenom: 'Youssef02' },
	{ id: 3, nom: 'Ambarki', prenom: 'Youssef02' },
	{ id: 4, nom: 'Ambarki', prenom: 'Youssef02' },
	{ id: 5, nom: 'Ambarki', prenom: 'Youssef03' },
	{ id: 6, nom: 'Ambarki', prenom: 'Youssef04' },
	{ id: 7, nom: 'Ambarki', prenom: 'Youssef05' },
	{ id: 8, nom: 'Ambarki', prenom: 'Youssef06' },
	{ id: 9, nom: 'Ambarki', prenom: 'Youssef07' },
	{ id: 10, nom: 'Ambarki', prenom: 'Youssef08' },
	{ id: 11, nom: 'Ambarki', prenom: 'Youssef09' },
	{ id: 12, nom: 'Ambarki', prenom: 'Youssef10' },
	{ id: 13, nom: 'Ambarki', prenom: 'Youssef11' },
	{ id: 14, nom: 'Ambarki', prenom: 'Youssef12' },
	{ id: 15, nom: 'Ambarki', prenom: 'Youssef13' },
	{ id: 16, nom: 'Ambarki', prenom: 'Youssef14' },
	{ id: 17, nom: 'Ambarki', prenom: 'Youssef15' },
	{ id: 18, nom: 'Ambarki', prenom: 'Youssef16' }
];
const getfullName = (nom, prenom) => `${nom} ${prenom}`;
const isSearched = (searchTerm) => (item) =>
	getfullName(item.nom, item.prenom).toLowerCase().includes(searchTerm.toLowerCase());

class NotSplited extends Component {
	constructor(props) {
		super(props);
		this.state = { eleves, searchTerm: '' };
	}

	render() {
		const { eleves, searchTerm } = this.state;

		return (
			<div>
				<div>
					<span>Rechercher</span>
					<input type='text' onChange={this.OnUserInputChange} />
				</div>
				<div>
					{eleves
						.filter(isSearched(searchTerm))
						.map((item) => <div key={item.id}>{getfullName(item.nom, item.prenom)}</div>)}
				</div>
			</div>
		);
	}

	OnUserInputChange = (e) => {
		this.setState({ searchTerm: e.target.value });
	};
}
export default NotSplited;
