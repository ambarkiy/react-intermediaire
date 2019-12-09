import React, { Component } from 'react';

class HomeToComponent extends Component {
	render() {
		const { children } = this.props;
		return (
			<div>
				<div>J'attends n'importe quel composant</div>
				{children}
			</div>
		);
	}
}
export default HomeToComponent;
