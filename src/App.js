import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from 'react-router-dom';
import Home from './views/Home/Home';
import TeamDetail from './views/Teams/TeamDetail';
import TeamList from './views/Teams/TeamList';
import NewTeam from './views/Teams/NewTeam';
import EditTeam from './views/Teams/EditTeam';
import PlayersDetail from './views/Players/PlayersDetail';
import PlayersList from './views/Players/PlayersList';
import NewPlayer from './views/Players/NewPlayer';
import Footer from './components/Footer';
import './App.css';
import EditPlayer from './views/Players/EditPlayer';

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
					<Route exact path="/newTeam" component={NewTeam} />
					<Route exact path="/editTeam/:id" component={EditTeam} />
					<Route exact path="/players" component={PlayersList} />
					<Route exact path="/newPlayer" component={NewPlayer} />
					<Route exact path="/editPlayer/:id" component={EditPlayer} />
					<Route
						exact
						path="/teams/:id"
						render={() => <TeamDetail min={1} max={35} />}
					/>
					<Route
						exact
						path="/players/:id"
						render={() => <PlayersDetail min={1} max={35} />}
					/>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
