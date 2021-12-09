import { render } from '@testing-library/react';
import Home from './Home';

it('renders the Home view accurately', () => {
	const { container } = render(<Home />);
	expect(container).toMatchSnapshot();
});
