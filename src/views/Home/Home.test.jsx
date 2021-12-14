import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';

it('renders the Home view accurately', () => {
	const { container } = render(
		<Router>
			<Home />
		</Router>
	);
	expect(container).toMatchSnapshot();
});
