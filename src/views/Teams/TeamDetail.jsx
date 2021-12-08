import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getTeamById } from '../../services/teams';

export default function TeamDetail() {
	const { id } = useParams();
	const [team, setTeam] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getTeamById(id)
			.then((res) => setTeam(res))
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) return <span className="loading">Loading...</span>;

	return (
		<div className="content">
			<Link to="/teams" className="App-link">
				Back to Teams
			</Link>
			<h1>{team.name}</h1>
			{team.city}, {team.state}
			<ul>
				{team.players.map((player) => {
					return (
						<Link to={`/players/${player.id}`}>
							<li key={player.id}>
								{player.position} - {player.name}
							</li>
						</Link>
					);
				})}
			</ul>
		</div>
	);
}
