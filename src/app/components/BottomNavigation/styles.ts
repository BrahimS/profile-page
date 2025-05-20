import { theme } from '@/app/theme';
import Link from 'next/link';
import styled from 'styled-components';

export const NavItems = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	padding: 0 2rem;
`;

export const NavLink = styled(Link)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-decoration: none;
	color: ${theme.colors.text.white};
	gap: 6px;
	min-width: 60px;
	text-align: center;

	svg {
		width: 20px;
		height: 20px;
		opacity: 0.9;
		display: block;
	}

	span {
		font-size: 12px;
		opacity: 0.9;
		white-space: nowrap;
		display: block;
	}
`;
