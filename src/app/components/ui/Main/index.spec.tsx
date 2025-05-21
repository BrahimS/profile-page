import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Main } from './index';

describe('Main component', () => {
	const children = <main>Test children</main>;
	it('should render correctly', async () => {
		const component = await render(<Main data-testid="main">{children}</Main>);
		expect(component).toBeTruthy();
	});
});
