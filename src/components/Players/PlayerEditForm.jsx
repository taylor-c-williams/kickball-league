export default function PlayerEditForm({
	name,
	city,
	state,
	team,
	handleSubmit,
	setName,
	setCity,
	setState,
	setTeam,
}) {
	return (
		<div>
			<h1>{name}</h1>

			<fieldset>
				<legend>Edit stuff</legend>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Player Name:</label>
					<input
						id="name"
						name="name"
						type="text"
						defaultValue={name}
						required
						onChange={({ target }) => setName(target.value)}
					/>

					<label htmlFor="team">Team:</label>
					<input
						id="team"
						name="team"
						type="text"
						defaultValue={team}
						required
						onChange={({ target }) => setName(target.value)}
					/>

					<label htmlFor="city">City:</label>
					<input
						id="city"
						name="city"
						type="text"
						defaultValue={city}
						required
						onChange={({ target }) => setCity(target.value)}
					/>

					<label htmlFor="state">State:</label>
					<input
						id="state"
						name="state"
						type="text"
						defaultValue={state}
						required
						onChange={({ target }) => setState(target.value)}
					/>
					<input
						type="submit"
						aria-label="Update Player"
						value="Update Player"
					/>
				</form>
			</fieldset>
		</div>
	);
}
