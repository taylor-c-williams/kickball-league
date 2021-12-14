import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import EditTeam from '../EditTeam';

it('should render accurately the edit team view and form component', async () => {
	const container = render(
		<MemoryRouter initialEntries={['/editTeam/1']}>
			<Route path="/editTeam/:id">
				<EditTeam />
			</Route>
		</MemoryRouter>
	);

	await screen.findByText('Loading...', {
		exact: false,
	});
	await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));

	const textEntry = await screen.findByText('Edit stuff', {
		exact: false,
	});

	expect(container).toMatchSnapshot();

	expect(textEntry).toBeInTheDocument();
});
