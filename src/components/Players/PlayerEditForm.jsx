export default function PlayerEditForm({
	position,
	name,
	handleSubmit,
	setName,
	setPosition,
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
