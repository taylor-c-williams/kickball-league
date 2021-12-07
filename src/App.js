import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import Home from './views/Home/Home';
import TeamDetail from './views/Teams/TeamDetail';
import TeamList from './views/Teams/TeamList';
import './App.css';

function App() {
	return (
		<div className="App">
			<Router>
				<header>
					<NavLink to="/" className="App-link" exact>
						Home
					</NavLink>

					<NavLink to="/teams" className="App-link" exact>
						Teams
					</NavLink>
				</header>

				<Switch>
					<Route path="/" component={Home} />
					<Route path="/teams" component={TeamList} />
					<Route path="/teams/:id" component={TeamDetail} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
