import { render, screen } from '@testing-library/react';
import TeamList from './TeamList';

it('renders TeamList elements', () => {
	const { container } = render(<TeamList />);

	const textElement = screen.getByText('teams', { exact: false });
	expect(textElement).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
