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
const isSearched = (searchTerm) => (item) => getProjection(item).toLowerCase().includes(searchTerm.toLowerCase());
class TableView extends Component {
	render() {
		const { list, pattern } = this.props;
		return list.filter(isSearched(pattern)).map((item) => <div key={item.id}> {getProjection(item)}</div>);
		// deux facon de faire a voir laquelle est la meilleur
		// return list.map((item) => {
		// 	return isSearched(pattern, getProjection(item)) && <div key={item.id}>{getProjection(item)}</div>;
		// });
	}
}
export default TableView;
