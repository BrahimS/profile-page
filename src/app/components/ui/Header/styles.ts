import { theme } from '@/app/theme';
import styled from 'styled-components';

export const Headerwrapper = styled.header`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: ${theme.colors.primary.main};
	padding: 1rem 1.5rem 5rem;
	overflow: hidden;
	color: ${theme.colors.text.white};

	&::after {
		content: '';
		position: absolute;
		bottom: -16px;
		left: -1px;
		right: -1px;
		height: 220px;
		background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 340' preserveAspectRatio='none'%3E%3Cpath fill='%23ededed' d='M0,288 C240,272 480,256 720,272 C960,288 1200,304 1440,288 L1440,320 L0,320 Z'/%3E%3C/svg%3E");
		background-position: center bottom;
		background-repeat: no-repeat;
		background-size: 100% 100%;
		transform: scale(1.1);
	}
`;
