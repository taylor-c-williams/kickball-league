import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { createTeam } from '../../services/teams';
import TeamNewForm from '../../components/Teams/TeamNewForm';

export default function NewTeam() {
	const [name, setName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await createTeam({ name, city, state });
		history.push(`/teams/${res[0].id}`);
	};
	return (
		<div>
			<h1>Create New Team</h1>
			<TeamNewForm
				name={name}
				city={city}
				state={state}
				handleSubmit={handleSubmit}
				setName={setName}
				setCity={setCity}
				setState={setState}
			/>
		</div>
	);
}
