import { theme } from '@/app/theme';
import Link from 'next/link';
import styled from 'styled-components';

interface AvatarProps {
	border?: boolean;
}

// Header

export const HeaderTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-bottom: ${theme.spacing.xl};
	max-width: 1200px;
`;

export const BackButton = styled(Link)`
	display: flex;
	align-items: center;
	color: ${theme.colors.text.white};
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
	color: ${theme.colors.text.white};
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
	background-color: ${theme.colors.text.white};
	border: ${(props) =>
		props.border ? `3px solid ${theme.colors.success.main}` : 'none'};
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;
	flex-shrink: 0;
	padding: 12px;

	span {
		font-size: 2rem;
		font-weight: 500;
		color: ${theme.colors.primary.main};
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
	color: ${theme.colors.text.white};
	font-weight: 500;
	font-size: 1.5rem;
`;

export const UserSubtext = styled.span`
	display: flex;
	align-items: center;
	gap: 0.5rem;
	opacity: 0.7;
	color: ${theme.colors.text.white};
	font-size: 1rem;
`;
