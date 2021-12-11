import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EditForm from '../../components/Teams/TeamEditForm';
import { updateTeamById, getTeamById } from '../../services/teams';

export default function EditTeam() {
	const { id } = useParams();
	const [team, setTeam] = useState(null);
	const [name, setName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		getTeamById(id)
			.then((res) => {
				setTeam(res);
				setName(res.name);
				setCity(res.city);
				setState(res.state);
			})
			.finally(() => setLoading(false));
	}, [id, setTeam]);

	if (loading) return <span className="loading">Loading...</span>;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await updateTeamById(id, { name, city, state });
		history.push(`/teams/${res[0].id}`);
	};
	return (
		<div>
			<h1>Edit Team</h1>
			{team.name}
			<EditForm
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
