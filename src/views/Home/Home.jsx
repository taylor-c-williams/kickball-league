import { Link } from 'react-router-dom';
import './home.css';

export default function Home() {
	return (
		<div>
			<section className="kickyball-container">
				<header className="kickyball-header">
					<h1>Kickball League Directory! </h1>
				</header>
				<p className="kickyball">
					<img
						src="https://i5.walmartimages.com/asr/7cd32c12-dfff-4e90-983e-9dd712f11222.019e16ba07684ed951902a359a0f5504.jpeg"
						alt="kickball with adorable turtle printed on it"
					/>
					{/* another incredibly cute kickball in case I or anyone else need it:
			https://m.media-amazon.com/images/I/51vPSKT9L7L._AC_SX425_.jpg */}
				</p>
			</section>
		</div>
	);
}
