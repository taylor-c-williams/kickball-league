// import { render, screen } from '@testing-library/react';
// import { MemoryRouter } from 'react-router-dom';
// import TeamDetail from './TeamDetail';

// test('renders individual Team details', async () => {
// 	render(
// 		<MemoryRouter>
// 			<TeamDetail match={{ params: { id: 1 } }} />
// 		</MemoryRouter>
// 	);

// 	const textElement = await screen.findByText('div', { exact: false });
// 	expect(textElement).toBeInTheDocument();
// });

import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import TeamDetail from './TeamDetail';

it('should render a detailed view of an individual team', async () => {
	render(
		<MemoryRouter initialEntries={['/teams/1']}>
			<Route path="/teams/:id">
				<TeamDetail />
			</Route>
		</MemoryRouter>
	);

	screen.getByText('Loading...');

	const textEntry = await screen.findByText('Pitcher', {
		exact: false,
	});

	expect(textEntry).toBeInTheDocument();
});
