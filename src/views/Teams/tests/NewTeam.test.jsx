import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import NewTeam from '../NewTeam';

it('should render accurately the create team view and component', async () => {
	const container = render(
		<MemoryRouter initialEntries={['/newTeam']}>
			<Route path="/newTeam">
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
