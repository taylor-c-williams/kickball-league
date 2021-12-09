export default function EditForm({
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

			{/* 
		defaultvalue acts as a placeholder, if each entry is not changed, that filed
		gets updated as blank  
		*/}

			<fieldset>
				<legend>Edit stuff</legend>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Team Name:</label>
					<input
						id="name"
						name="name"
						type="text"
						defaultValue={name}
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
					<input type="submit" aria-label="Add New Team" value="Update Team" />
				</form>
			</fieldset>
		</div>
	);
}
