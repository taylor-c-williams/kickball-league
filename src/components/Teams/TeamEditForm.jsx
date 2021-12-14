export default function TeamEditForm({
	name,
	city,
	state,
	handleSubmit,
	setName,
	setCity,
	setState,
}) {
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
						required
						onChange={({ target }) => setName(target.value)}
					/>

					<label htmlFor="city">City:</label>
					<input
						id="city"
						name="city"
						type="text"
						value={city}
						required
						onChange={({ target }) => setCity(target.value)}
					/>

					<label htmlFor="state">State:</label>
					<input
						id="state"
						name="state"
						type="text"
						value={state}
						required
						onChange={({ target }) => setState(target.value)}
					/>
					<input type="submit" aria-label="Update" value="Update Team" />
				</form>
			</fieldset>
		</div>
	);
}
