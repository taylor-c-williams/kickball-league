import { Link } from 'react-router-dom';
import './footer.css';

export default function Footer() {
	return (
		<div className="footer-container">
			<footer>
				<Link to="/teams"> Browse by Team</Link> | | |
				<Link to="/players">Browse by Player</Link>| | |<Link to="/">Home</Link>
			</footer>
		</div>
	);
}
