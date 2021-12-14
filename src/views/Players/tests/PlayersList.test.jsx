import {
	waitForElementToBeRemoved,
	render,
	screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import PlayersList from '../PlayersList';

it('renders PlayersList elements', async () => {
	const { container } = render(
		<Router>
			<PlayersList />
		</Router>
	);

	await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));
	const textElement = await screen.findByText('Players', { exact: false });
	expect(textElement).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
