import Link from 'next/link';
import styled from 'styled-components';

interface AvatarProps {
	border?: boolean;
}

// Header
export const Header = styled.header`
	position: relative;
	display: flex;
	flex-direction: column;
	background-color: ${(props) => props.theme.colors.primary.main};
	padding: 1rem 1.5rem 5rem;
	overflow: hidden;
	color: ${(props) => props.theme.colors.text.white};

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

export const HeaderTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: ${(props) => props.theme.spacing.xl};
	max-width: 1200px;
`;

export const BackButton = styled(Link)`
	display: flex;
	align-items: center;
	color: ${(props) => props.theme.colors.text.white};
	text-decoration: none;
	gap: 0.5rem;
	font-size: 1rem;
	svg {
		width: 24px;
		height: 24px;
	}
	span {
		font-size: 1rem;
		opacity: 0.9;
	}
`;

export const HeaderTitle = styled.h1`
	color: ${(props) => props.theme.colors.text.white};
	font-size: 1.25rem;
	font-weight: 500;
	margin: 0;
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
`;
export const Avatar = styled.div<AvatarProps>`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: ${(props) => props.theme.colors.text.white};
	border: ${(props) =>
		props.border ? `3px solid ${props.theme.colors.success.main}` : 'none'};
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	flex-shrink: 0;
	padding: 12px;

	span {
		font-size: 2rem;
		font-weight: 500;
		color: ${(props) => props.theme.colors.primary.main};
	}
`;

export const ProfileInfo = styled.div`
	display: flex;
	gap: 1rem;
	align-items: center;
	width: 100%;
	max-width: 1200px;
	padding: 0 1rem;
`;
export const UserInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const UserName = styled.h2`
	margin: 0;
	color: ${(props) => props.theme.colors.text.white};
	font-weight: 500;
	font-size: 1.5rem;
`;

export const UserSubtext = styled.span`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	opacity: 0.7;
	color: ${(props) => props.theme.colors.text.white};
	font-size: 1rem;
`;
