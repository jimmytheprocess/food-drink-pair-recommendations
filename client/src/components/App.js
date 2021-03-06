import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Switch
} from 'react-router-dom';
import Home from './Home';
import Pair from './Pair';
import Info from './Info';
import Map from './Map';

export default class App extends React.Component {

	render() {
		return (
			<div className="App">
				<Router>
					<Switch>
						<Route
							exact
							path="/"
							render={() => (
								<Home />
							)}
						/>
						<Route
							exact
							path="/home"
							render={() => (
								<Home />
							)}
						/>
						<Route
							path="/pair"
							render={() => (
								<Pair />
							)}
						/>
						<Route
							path="/info"
							render={() => (
								<Info />
							)}
						/>
						<Route
							path="/map"
							render={() => (
								<Map />
							)}
						/>
					</Switch>
				</Router>
			</div>
		);
	}
}