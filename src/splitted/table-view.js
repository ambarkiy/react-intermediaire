import React, { Component } from 'react';

const getProjection = (item) => {
	let proj = '';
	for (const key in item) {
		if (item.hasOwnProperty(key)) {
			proj = proj + item[key];
		}
	}
	return proj;
};

const isSearchedV1 = (searchTerm, target) => getProjection(target).toLowerCase().includes(searchTerm.toLowerCase());
// const isSearchedV2 = (target) => (searchTerm) => target.toLowerCase().includes(searchTerm.toLowerCase());

class TableView extends Component {
	render() {
		const { list, pattern } = this.props;

		// version simple, on donne a la fonction les deux paramètres directement
		return list.map((item) => {
			return isSearchedV1(pattern, getProjection(item)) && <div key={item.id}>{getProjection(item)}</div>;
		});

		// version plus fonctionnelle, composition, on applique d'abard la projection et on verifie que ça math
		// return list
		// 	.filter((item) => isSearchedV2(getProjection(item))(pattern))
		// 	.map((item) => <div key={item.id}> {getProjection(item)}</div>);
	}
}
export default TableView;
