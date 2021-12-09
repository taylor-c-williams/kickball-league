import { useEffect, useState } from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { getTeams } from '../../services/teams';

export default function TeamList() {
	const [teams, setTeams] = useState([]);

	useEffect(() => {
		getTeams().then((res) => setTeams(res));
	}, []);
	return (
		<div className="content">
			<h1>Teams:</h1>
			<ul>
				{teams.map((team) => {
					return (
						<li key={team.id}>
							<Link to={`/teams/${team.id}`} className="App-link">
								{team.name}
							</Link>
						</li>
					);
				})}
			</ul>
			<Router>
				<Link to="/create">Create New Team</Link>
			</Router>
		</div>
	);
}
