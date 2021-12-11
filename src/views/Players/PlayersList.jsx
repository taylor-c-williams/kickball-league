import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers } from '../../services/players';

export default function PlayersList() {
	const [players, setPlayers] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		getPlayers()
			.then((res) => setPlayers(res))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <span className="loading">Loading...</span>;

	return (
		<div className="content">
			<h1>Players </h1>
			<ul>
				{players.map((player) => {
					return (
						<li key={player.id}>
							<Link to={`/players/${player.id}`} className="App-Link">
								{player.name}
							</Link>
						</li>
					);
				})}
			</ul>
			<Link to="/newPlayer">Add New Player</Link>
		</div>
	);
}
