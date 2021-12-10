import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import PlayerEditForm from '../../components/Players/PlayerEditForm';
import { updatePlayerById, getPlayerById } from '../../services/players';

export default function EditPlayer() {
	const { id } = useParams();
	const [name, setName] = useState('');
	const [position, setPosition] = useState('');
	const [loading, setLoading] = useState(true);
	const history = useHistory();

	useEffect(() => {
		getPlayerById(id)
			.then((res) => {
				setPosition(res.position);
				setName(res.name);
			})
			.finally(() => setLoading(false));
	}, [id]);

	if (loading) return <span className="loading">Loading...</span>;

	const handleSubmit = async (e) => {
		e.preventDefault();
		const res = await updatePlayerById(id, { name, position });
		history.push(`/players/${res[0].id}`);
	};

	return (
		<div>
			<h1>Edit Player</h1>
			<PlayerEditForm
				id={id}
				name={name}
				position={position}
				handleSubmit={handleSubmit}
				setName={setName}
				setPosition={setPosition}
			/>
		</div>
	);
}
