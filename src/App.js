import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import Home from './views/Home/Home';
import TeamDetail from './views/Teams/TeamDetail';
import TeamList from './views/Teams/TeamList';
import PlayersDetail from './views/Players/PlayersDetail';
import PlayersList from './views/Players/PlayersList';
import NewTeam from './views/Teams/NewTeam';
import EditTeam from './views/Teams/EditTeam';
import Footer from './components/Footer';
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
					<NavLink to="/players" className="App-link" exact>
						Players
					</NavLink>
				</header>

				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/teams" component={TeamList} />
					<Route exact path="/teams/:id" component={TeamDetail} />
					<Route exact path="/players" component={PlayersList} />
					<Route exact path="/players/:id" component={PlayersDetail} />
					<Route exact path="/create" component={NewTeam} />
					<Route exact path="/edit/:id" component={EditTeam} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
