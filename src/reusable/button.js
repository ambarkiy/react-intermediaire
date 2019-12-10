import React, { Component } from 'react';

class Button extends Component {
	render() {
		// valeur par défault assigné à className
		const { onClick, className = '', children } = this.props;
		return (
			<button onClick={onClick} className={className} type='button'>
				{children}
			</button>
		);
	}
}

export default Button;
