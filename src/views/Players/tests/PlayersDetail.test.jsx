import {
	waitForElementToBeRemoved,
	render,
	screen,
} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PlayersDetail from '../PlayersDetail';

it('should render a detailed view of an individual player', async () => {
	const player = {
		created_at: '2021-12-10T01:44:26+00:00',
		id: 3,
		name: 'player name',
		position: 'player position',
		team_id: 1,
	};
	const detail = render(
		<MemoryRouter initialEntries={['/players/3']}>
			<Route path="/players/:id">
				<PlayersDetail player={player} />
			</Route>
		</MemoryRouter>
	);

	await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));

	const update = await screen.findByText(/update/i);

	expect(detail).toMatchSnapshot();
	expect(update).toBeInTheDocument();
});
