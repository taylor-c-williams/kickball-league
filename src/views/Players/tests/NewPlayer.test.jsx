import {
	waitForElementToBeRemoved,
	render,
	screen,
} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import NewPlayer from '../NewPlayer';

it('should render accurately the create new player view and component', async () => {
	const container = render(
		<MemoryRouter initialEntries={['/newPlayer']}>
			<Route path="/newPlayer">
				<NewPlayer />
			</Route>
		</MemoryRouter>
	);

	await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));
	const textEntry = await screen.findByText(/Position/i);

	expect(container).toMatchSnapshot();
	expect(textEntry).toBeInTheDocument();
});
