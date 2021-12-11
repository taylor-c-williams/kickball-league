export default function PlayerEditForm({
	position,
	name,
	teamId,
	teams,
	handleSubmit,
	setName,
	setPosition,
	setTeamId,
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
						value={name}
						required
						onChange={({ target }) => setName(target.value)}
					/>

					<label htmlFor="position">Player Position:</label>
					<input
						id="position"
						name="position"
						type="text"
						value={position}
						required
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
						aria-label="Update Player"
						value="Update Player"
					/>
				</form>
			</fieldset>
		</div>
	);
}
