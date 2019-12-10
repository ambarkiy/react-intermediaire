import React, { Component } from 'react';
import NotSplitted from './not-splitted';
import HOCStudentDirectory from './splitted/hoc-student-directory';
import HomeToComponent from './composition/home-to-component';
import Whatever from './composition/whatever';
import Button from './reusable/button';
import HocActorDirectory from './stateless-functionnal/hoc-actor-directory';
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
				<div>
					<Button>Hello</Button>
				</div>
				<hr />
				<div>
					<h3>Stateless Functionnal Component</h3>
					<HocActorDirectory />
				</div>
			</div>
		);
	}
}
export default App;
