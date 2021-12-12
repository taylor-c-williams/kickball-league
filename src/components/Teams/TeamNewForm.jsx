import { getRndInteger } from '../../services/global';

export default function TeamNewForm({
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
			<fieldset>
				<legend>Details</legend>
				<form onSubmit={handleSubmit}>
					<label htmlFor="name">Team Name:</label>
					<input
						id="name"
						name="name"
						type="text"
						value={name}
						onChange={({ target }) => setName(target.value)}
					/>

					<label htmlFor="city">City:</label>
					<input
						id="city"
						name="city"
						type="text"
						value={city}
						onChange={({ target }) => setCity(target.value)}
					/>

					<label htmlFor="state">State:</label>
					<input
						id="state"
						name="state"
						type="text"
						value={state}
						onChange={({ target }) => setState(target.value)}
					/>
					<button type="submit" aria-label="Add New Team" value="Add New Team">
						Add New Team
					</button>
				</form>
				<section className="title-img">
					<img
						src={`/kickballs/ball_${getRndInteger(1, 35)}.jpg`}
						alt="kickball"
						height="400"
					/>
				</section>
			</fieldset>
		</div>
	);
}
