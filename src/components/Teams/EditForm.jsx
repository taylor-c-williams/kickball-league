// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import { getTeamById } from '../../services/teams';
export default function EditForm({
	name,
	city,
	state,
	handleSubmit,
	setName,
	setCity,
	setState,
}) {
	// const [team, setTeam] = useState(null);
	// const [loading, setLoading] = useState(true);
	// const { id } = useParams();

	// useEffect(() => {
	// 	getTeamById(id)
	// 		.then((res) => setTeam(res))
	// 		.finally(() => setLoading(false));
	// }, [id]);
	// if (loading) return <span className="loading">Loading...</span>;

	return (
		<div>
			<h1>{name}</h1>

			<fieldset>
				<legend>Edit stuff</legend>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Team Name:</label>
					<input
						id="name"
						name="name"
						type="text"
						value={name}
						placeholder={name}
						onChange={({ target }) => setName(target.value)}
					/>

					<label htmlFor="city">City:</label>
					<input
						id="city"
						name="city"
						type="text"
						value={city}
						placeholder={city}
						onChange={({ target }) => setCity(target.value)}
					/>

					<label htmlFor="state">State:</label>
					<input
						id="state"
						name="state"
						type="text"
						value={state}
						placeholder={state}
						onChange={({ target }) => setState(target.value)}
					/>
					<input type="submit" aria-label="Add New Team" value="Update Team" />
				</form>
			</fieldset>
		</div>
	);
}
