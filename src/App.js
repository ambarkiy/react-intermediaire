import React, { Component } from 'react';
import NotSplitted from './not-splitted.js';
import HOCStudentDirectory from './splitted/hoc-student-directory.js';
import HomeToComponent from './composition/home-to-component.js';
import Whatever from './composition/whatever.js';

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
				<div>
					<HomeToComponent>
						<Whatever />
					</HomeToComponent>
				</div>
			</div>
		);
	}
}
export default App;
