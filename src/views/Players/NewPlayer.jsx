import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PlayerNewForm from '../../components/Players/PlayerNewForm';
import { createPlayer } from '../../services/players';

export default function NewPlayer() {
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [teamId, setTeamId] = useState('');
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await createPlayer({ name, position, teamId });
		history.push(`/players/${res[0].id}`);
	};
	return (
		<div>
			<h1>Add New Player</h1>
			<PlayerNewForm
				name={name}
				position={position}
				teamId={teamId}
				handleSubmit={handleSubmit}
				setName={setName}
				setPosition={setPosition}
				setTeamId={setTeamId}
			/>
		</div>
	);
}
