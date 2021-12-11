import {
	waitForElementToBeRemoved,
	render,
	screen,
} from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TeamList from '../TeamList';

it('renders TeamList elements', async () => {
	const { container } = render(
		<Router>
			<TeamList />
		</Router>
	);

	// await screen.findByText('Teams:', {
	// 	exact: false,
	// });
	await waitForElementToBeRemoved(() => screen.queryByText(/Loading.../i));
	const textElement = await screen.findByText('Teams', { exact: false });
	expect(textElement).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
