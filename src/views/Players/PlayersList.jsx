import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getPlayers } from '../../services/players';

export default function PlayersList() {
	const [players, setPlayers] = useState([]);

	useEffect(() => {
		getPlayers().then((res) => setPlayers(res));
	}, []);
	console.log(players);
	return (
		<div className="content">
			Players:
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
		</div>
	);
}
