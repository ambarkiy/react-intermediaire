import React, { Component } from 'react';
import NotSplitted from './not-splitted.js';
import HOCStudentDirectory from './splitted/hOCStudentDirectory.js';

class App extends Component {
	render() {
		return (
			<div>
				<div>
					<span>Composant non découpé</span>
					<NotSplitted />
				</div>
				<hr />
				<div>
					<span>Composant découpé</span>
					<HOCStudentDirectory />
				</div>
			</div>
		);
	}
}
export default App;
