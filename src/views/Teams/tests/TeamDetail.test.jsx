import {
	waitForElementToBeRemoved,
	render,
	screen,
} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TeamDetail from '../TeamDetail';

it('should render a detailed view of an individual team', async () => {
	const container = render(
		<MemoryRouter initialEntries={['/teams/1']}>
			<Route path="/teams/:id">
				<TeamDetail />
			</Route>
		</MemoryRouter>
	);
	await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));

	const textEntry = await screen.findByText(/delete team name/i);

	expect(container).toMatchSnapshot();
	expect(textEntry).toBeInTheDocument();
});
