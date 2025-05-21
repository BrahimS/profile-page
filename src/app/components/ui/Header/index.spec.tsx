import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Header } from './index';

describe('Header component', () => {
	const children = <header>Test children</header>;
	it('should render correctly', async () => {
		const component = await render(
			<Header data-testid="header">{children}</Header>,
		);
		expect(component).toBeTruthy();
	});
});
