import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TeamDetail from './TeamDetail';

it('should render a detailed view of an individual team', async () => {
	const deets = render(
		<MemoryRouter initialEntries={['/teams/1']}>
			<Route path="/teams/:id">
				<TeamDetail />
			</Route>
		</MemoryRouter>
	);

	screen.getByText('Loading...');

	const textEntry = await screen.findByText('Pitcher', {
		exact: false,
	});

	expect(deets).toMatchSnapshot();
	expect(textEntry).toBeInTheDocument();
});
