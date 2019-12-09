import React from 'react';

const SearchBar = (props) => {
	const { value, onChange, children } = props;

	return (
		<div>
			{children}
			<input type='text' value={value} onChange={onChange} />
		</div>
	);
};

export default SearchBar;
