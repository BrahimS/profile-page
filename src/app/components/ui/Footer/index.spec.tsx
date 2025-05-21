import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from './index';

describe('Footer component', () => {
	const children = <footer>Test children</footer>;
	it('should render correctly', async () => {
		const component = await render(
			<Footer data-testid="footer">{children}</Footer>,
		);
		expect(component).toBeTruthy();
	});
});
