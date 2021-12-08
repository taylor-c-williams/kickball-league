import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPlayerById } from '../../services/players';

export default function PlayersDetail() {
	const { id } = useParams();
	const [player, setPlayer] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getPlayerById(id)
			.then((res) => setPlayer(res))
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) return <span className="loading">Loading...</span>;

	return (
		<div className="content">
			<h1>{player.name}</h1>
			<ul>
				<li>{player.position}</li>
				<li>
					<Link to={`/teams/${player.teams.id}`}>{player.teams.name}</Link>
				</li>
				<li>
					{player.teams.city}, {player.teams.state}
				</li>
				<li>
					<Link to="/teams" className="App-link">
						Back to Teams
					</Link>
					|
					<Link to="/players" className="App-link">
						Back to Players
					</Link>
				</li>
			</ul>
		</div>
	);
}
