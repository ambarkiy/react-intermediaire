import React from 'react';

const SearchBar = ({ value, onChange, children }) => {
	return (
		<div>
			{children}
			<input type='text' value={value} onChange={onChange} />
		</div>
	);
};

export default SearchBar;
