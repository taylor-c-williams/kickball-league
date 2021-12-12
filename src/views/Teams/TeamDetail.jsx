import { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';
import { getRndInteger } from '../../services/global';
import { getTeamById, deleteTeamById } from '../../services/teams';

export default function TeamDetail() {
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
			<section className="title-img">
				<img
					src={`/kickballs/ball_${getRndInteger(1, 35)}.jpg`}
					alt="kickball"
					height="400"
				/>
			</section>
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
