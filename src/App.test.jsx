import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app elements', () => {
	render(<App />);
	const linkElement = screen.getByText('kickbol', { exact: false });
	expect(linkElement).toBeInTheDocument();
});
