import { render, screen } from '@testing-library/react';
import App from './App';

test.skip('renders app elements', () => {
	render(<App />);
	const linkElement = screen.getByText('kickball', { exact: false });
	expect(linkElement).toBeInTheDocument();
});
