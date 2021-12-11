import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { createPlayer } from '../../services/players';
import { getTeams } from '../../services/teams';
import PlayerNewForm from '../../components/Players/PlayerNewForm';

export default function NewPlayer() {
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [teamId, setTeamId] = useState('');
	const [teams, setTeams] = useState([]);
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		getTeams()
			.then((res) => setTeams(res))
			.finally(() => setLoading(false));
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await createPlayer({ name, position, teamId });
		history.push(`/players/${res[0].id}`);
	};

	if (loading) return <span className="loading">Loading...</span>;

	return (
		<div>
			<h1>Add New Player</h1>
			<PlayerNewForm
				name={name}
				position={position}
				teamId={teamId}
				teams={teams}
				handleSubmit={handleSubmit}
				setName={setName}
				setPosition={setPosition}
				setTeamId={setTeamId}
			/>
		</div>
	);
}
