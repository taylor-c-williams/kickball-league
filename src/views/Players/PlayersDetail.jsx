import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getPlayerById, deletePlayerById } from '../../services/players';
import RandomUrl from '../../components/Players/RandomImg';

export default function PlayersDetail({ min, max }) {
	const { id } = useParams();
	const [player, setPlayer] = useState(null);
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		getPlayerById(id)
			.then((res) => setPlayer(res))
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) return <span className="loading">Loading...</span>;

	const handleDelete = async ({ id, name }) => {
		await deletePlayerById(id);
		history.push(`/players/`);
	};

	return (
		<div className="content">
			<h1>{player.name}</h1>
			<h2>{player.position}</h2>
			<ul>
				<RandomUrl min={min} max={max} />
				<li>
					<Link to={`/teams/${player.teams.id}`}>{player.teams.name}</Link>
				</li>
				<li>
					{player.teams.city}, {player.teams.state}
				</li>
			</ul>
			<Link to={`/teams/${player.teams.id}`}>
				◁ Back to {player.teams.name}
			</Link>
			||
			<Link to={`/editPlayer/${player.id}`}>Edit {player.name}</Link>
			<button
				type="button"
				aria-label={`Delete ${player.name}`}
				onClick={() => handleDelete({ id: player.id, name: player.name })}
			>
				Delete {player.name}
			</button>
		</div>
	);
}
