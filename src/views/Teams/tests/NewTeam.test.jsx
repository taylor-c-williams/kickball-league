import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import NewTeam from '../NewTeam';

it('should render a detailed view of an individual team', async () => {
	const container = render(
		<MemoryRouter initialEntries={['/create']}>
			<Route path="/create">
				<NewTeam />
			</Route>
		</MemoryRouter>
	);

	const textEntry = await screen.findByText('Create stuff', {
		exact: false,
	});

	expect(container).toMatchSnapshot();
	expect(textEntry).toBeInTheDocument();
});
