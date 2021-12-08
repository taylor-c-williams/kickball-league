import { render, screen } from '@testing-library/react';
import TeamList from './TeamList';

test('renders TeamList elements', () => {
	const { container } = render(<TeamList />);

	const textElement = screen.getByText('teams', { exact: false });
	expect(textElement).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
