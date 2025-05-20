import { theme } from '@/app/theme';
import styled from 'styled-components';

export const PointsContainer = styled.div`
	background-color: ${theme.colors.background.white};
	border-radius: 20px;
	padding: 0.25rem 0.75rem;
	display: flex;
	align-items: center;
	gap: 0.25rem;
	position: relative;
	min-width: 60px;
	justify-content: center;

	&.clickable {
		cursor: pointer;
		transition: transform 0.2s ease;
		&:hover {
			transform: scale(1.05);
		}
		&:active {
			transform: scale(0.95);
		}
	}
	.points {
		color: ${theme.colors.text.black};
		font-weight: 500;
		display: flex;
		align-items: center;
		gap: 0.25rem;
	}

	.coin-icon {
		width: 18px;
		height: 18px;
		border-radius: 50%;
		background-color: #ffd700;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #b8860b;
		font-size: 12px;
	}

	.plus {
		width: 16px;
		height: 16px;
		border-radius: 50%;
		display: flex;
		align-items: center;
		justify-content: center;
		font-weight: bold;
		position: absolute;
		top: -6px;
		right: -6px;
		padding: 2px;
		background-color: ${theme.colors.primary.light};
		color: ${theme.colors.text.white};
		font-size: 0.75rem;
	}
`;
