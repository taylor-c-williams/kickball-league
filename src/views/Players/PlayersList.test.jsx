import { render, screen } from '@testing-library/react';
import PlayersList from './PlayersList';

it('renders PlayersList elements', () => {
	const { container } = render(<PlayersList />);

	const textElement = screen.getByText('Players:', { exact: false });
	expect(textElement).toBeInTheDocument();
	expect(container).toMatchSnapshot();
});
