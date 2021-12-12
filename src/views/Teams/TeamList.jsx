import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTeams } from '../../services/teams';
import { getRndInteger } from '../../services/global';

export default function TeamList() {
	const [teams, setTeams] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getTeams()
			.then((res) => setTeams(res))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <span className="loading">Loading...</span>;

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
			<section className="title-img">
				<img
					src={`/kickballs/ball_${getRndInteger(1, 35)}.jpg`}
					alt="kickball"
					height="300"
				/>
			</section>
			<Link to="/newTeam">Create New Team</Link>
		</div>
	);
}
