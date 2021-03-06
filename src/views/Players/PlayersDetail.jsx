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
			<h2>{player.position}</h2>
			<img
				width="300px"
				src="https://m.media-amazon.com/images/I/51vPSKT9L7L._AC_SX425_.jpg"
				alt="an adorable frog faced kickyball"
			/>
			<ul>
				<li>
					<Link to={`/teams/${player.teams.id}`}>{player.teams.name}</Link>
				</li>
				<li>
					{player.teams.city}, {player.teams.state}
				</li>
			</ul>
		</div>
	);
}
