import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import EditForm from '../../components/Players/PlayerEditForm';
import { updatePlayerById, getPlayerById } from '../../services/players';

export default function EditPlayer() {
	const { id } = useParams();
	const [team, setTeam] = useState(null);
	const [name, setName] = useState('');
	const [city, setCity] = useState('');
	const [state, setState] = useState('');
	const [player, setPlayer] = useState('');
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		getPlayerById(id)
			.then((res) => setPlayer(res))
			.then((res) => setTeam(res))
			.then((res) => setName(res))
			.then((res) => setCity(res))
			.then((res) => setState(res))
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) return <span className="loading">Loading...</span>;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await updatePlayerById(id, { name, city, state, team });
		history.push(`/players/${res[0].id}`);
	};
	console.log(player);
	return (
		<div>
			<h1>Edit Player</h1>
			<EditForm
				id={id}
				name={player.name}
				city={player.teams.city}
				state={player.teams.state}
				team={player.teams.name}
				handleSubmit={handleSubmit}
				setPlayer={setPlayer}
				setName={setName}
				setCity={setCity}
				setState={setState}
			/>
		</div>
	);
}
