import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Divider } from './index';

describe('Divider component', () => {
	it('should render correctly', async () => {
		const component = await render(
			<Divider
				data-testid="divider"
				height={10}
				width="100%"
				color="black"
			></Divider>,
		);
		expect(component).toBeTruthy();
	});
});
