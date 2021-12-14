import {
	waitForElementToBeRemoved,
	render,
	screen,
} from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import EditPlayer from '../EditPlayer';

it('should render accurately the edit player view and form component', async () => {
	const container = render(
		<MemoryRouter initialEntries={['/editPlayer/5']}>
			<Route path="/editPlayer/:id">
				<EditPlayer />
			</Route>
		</MemoryRouter>
	);

	await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));

	const textEntry = await screen.findByText(/update/i);

	expect(container).toMatchSnapshot();
	expect(textEntry).toBeInTheDocument();
});
