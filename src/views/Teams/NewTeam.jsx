import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import NewForm from '../../components/Teams/NewForm';
import { createTeam } from '../../services/teams';

export default function NewTeam() {
	const [name, setName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await createTeam({ name, city, state });
		history.pushState(`/teams/${res[0].id}`);
	};
	return (
		<div>
			<h1>Create New Team</h1>
			<NewForm
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
