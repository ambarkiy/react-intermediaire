import React from 'react';

const getProjection = (item) => {
	let proj = '';
	for (const property in item) {
		if (item.hasOwnProperty(property)) {
			proj = proj + item[property];
		}
	}

	return proj;
};

const isSearched = (target) => (pattern) => target.toLowerCase().includes(pattern.toLowerCase());

const TableView = ({ pattern, list }) => {
	return list
		.filter((item) => isSearched(getProjection(item))(pattern))
		.map((item) => <div key={item.id}>{getProjection(item)}</div>);
};

export default TableView;
