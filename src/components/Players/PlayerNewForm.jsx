export default function PlayerNewForm({
	name,
	position,
	teamId,
	teams,
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

					<label htmlFor="teamId">Team</label>
					<select
						aria-label="teamId"
						value={teamId}
						onChange={({ target }) => setTeamId(target.value)}
					>
						{teams.map((team) => {
							return (
								<option key={team.id} value={team.id}>
									{team.name}
								</option>
							);
						})}
					</select>

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
