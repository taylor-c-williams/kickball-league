import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import TeamList from '../TeamList';

it('renders TeamList elements', () => {
	const { container } = render(
		<Router>
			<TeamList />
		</Router>
	);

	const textElement = screen.getByText('Teams', { exact: false });
	expect(textElement).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
