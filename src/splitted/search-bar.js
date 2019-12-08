import React, { Component } from 'react';

class SearchBar extends Component {
	render() {
		const { value, onChange } = this.props;
		return (
			<div>
				<span>Rechercher</span>
				<input type='text' value={value} onChange={onChange} />
			</div>
		);
	}
}
export default SearchBar;
