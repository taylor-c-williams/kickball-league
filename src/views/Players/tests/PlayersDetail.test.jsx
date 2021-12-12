import {
	waitForElementToBeRemoved,
	render,
	screen,
} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PlayersDetail from '../PlayersDetail';

it('should render a detailed view of an individual player', async () => {
	const detail = render(
		<MemoryRouter initialEntries={['/players/5']}>
			<Route path="/players/:id">
				<PlayersDetail />
			</Route>
		</MemoryRouter>
	);

	await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));

	const update = await screen.findByText(/update player/i);

	expect(detail).toMatchSnapshot();
	expect(update).toBeInTheDocument();
});
