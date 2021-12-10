import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import PlayersDetail from '../PlayersDetail';

it('should render a detailed view of an individual player', async () => {
	const deets = render(
		<MemoryRouter initialEntries={['/players/1']}>
			<Route path="/players/:id">
				<PlayersDetail />
			</Route>
		</MemoryRouter>
	);

	screen.getByText('Loading...');

	const textEntry = await screen.findByText('Loading...', {
		exact: false,
	});

	expect(deets).toMatchSnapshot();
	expect(textEntry).toBeInTheDocument();
});
