export default function PlayerNewForm({
	name,
	position,
	teamId,
	handleSubmit,
	setName,
	setPosition,
	setTeamId,
}) {
	return (
		<div>
			<fieldset>
				<legend>New Player</legend>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Player Name:</label>
					<input
						id="name"
						name="name"
						type="text"
						value={name}
						onChange={({ target }) => setName(target.value)}
					/>

					<label htmlFor="position">Position</label>
					<input
						id="position"
						name="position"
						type="text"
						value={position}
						onChange={({ target }) => setPosition(target.value)}
					/>

					<label htmlFor="teamId">Team:</label>
					<input
						id="teamId"
						name="teamId"
						type="text"
						value={teamId}
						onChange={({ target }) => setTeamId(target.value)}
					/>
					<input
						type="submit"
						aria-label="Add New Player"
						value="Add New Player"
					/>
				</form>
			</fieldset>
		</div>
	);
}
