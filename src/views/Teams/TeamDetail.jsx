import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getRndInteger } from '../../services/global';
import { getTeamById, deleteTeamById } from '../../services/teams';
import RandomImg from '../../components/Players/RandomImg';

export default function TeamDetail({ min, max }) {
	const { id } = useParams();
	const [team, setTeam] = useState(null);
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		getTeamById(id)
			.then((res) => setTeam(res))
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) return <span className="loading">Loading...</span>;

	const handleDelete = async ({ id, name }) => {
		await deleteTeamById(id);
		history.push(`/teams/`);
	};

	return (
		<div className="content">
			<h1>{team.name}</h1>
			<RandomImg min={min} max={max} />
			{team.city}, {team.state}
			<ul>
				{team.players.map((player) => {
					return (
						<Link key={player.id} to={`/players/${player.id}`}>
							<li key={player.id}>
								{player.name} ◌ {player.position}
							</li>
						</Link>
					);
				})}
			</ul>
			<Link to={`/NewPlayer`}>Add Player</Link> ◌
			<Link to={`/editTeam/${team.id}`}>Update Team Details</Link> ◌{' '}
			<button
				type="button"
				aria-label={`Delete ${team.name}`}
				onClick={() => handleDelete({ id: team.id, name: team.name })}
			>
				Delete {team.name}
			</button>
		</div>
	);
}
