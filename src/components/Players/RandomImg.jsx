import { getRndInteger } from '../../services/global';

export default function RandomImg({ min, max }) {
	// const randomURL = `/kickballs/ball_${getRndInteger(min, max)}.jpg`;
	const randomURL = `/kickballs/ball_4.jpg`;
	return (
		<section className="title-img">
			<img src={randomURL} alt="kickball" height="400" />
		</section>
	);
}
