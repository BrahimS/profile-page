import styled from 'styled-components';
import { theme } from '../../theme';

interface StatusIndicatorProps {
	$status: 'online' | 'busy';
}
interface FavoriteAvatarProps {
	$status?: 'online' | 'busy';
}

export const ProfileCardTransparent = styled.section`
	background-color: transparent !important;
	border-radius: 1rem;
	padding: 1.5rem;
	position: relative;
	z-index: 1;
`;
export const FavoritesCard = styled(ProfileCardTransparent)`
	background-color: ${theme.colors.background.main} !important;
`;
export const FavoritesTitle = styled.h3`
	font-size: 1.125rem;
	font-weight: 600;
	margin: 0;
	margin-bottom: ${theme.spacing.sm};
	color: ${(props) => props.theme.colors.text.black};
`;

export const FavoritesList = styled.div`
	display: flex;
	gap: 0.5rem;
	padding: 0.2rem;
	overflow-x: auto;
	scrollbar-width: none;
	-ms-overflow-style: none;

	&::-webkit-scrollbar {
		display: none;
	}
`;

export const FavoriteItem = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 0.2rem;
	min-width: 60px;
`;

export const FavoriteAvatar = styled.div<FavoriteAvatarProps>`
	border-radius: 50%;
	border: 2px solid
		${(props) =>
			props.$status === 'online'
				? props.theme.colors.success.main
				: props.$status === 'busy'
					? props.theme.colors.warning.main
					: props.theme.colors.text.black};
	overflow: hidden;
	flex-shrink: 0;
	position: relative;
	object-fit: contain;
	background-size: cover;

	img {
		padding: 2px;
	}
`;

export const FavoriteName = styled.span`
	color: ${(props) => props.theme.colors.text.black};
	font-size: 0.875rem;
	font-weight: 500;
`;
export const FavoriteAvatarWrapper = styled.section`
	position: relative;
`;
export const StatusIndicator = styled.div<StatusIndicatorProps>`
	position: absolute;
	right: 1px;
	bottom: 10px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 1px solid ${(props) => props.theme.colors.background.white};
	background-color: ${(props) =>
		props.$status === 'online'
			? props.theme.colors.success.main
			: props.theme.colors.warning.main};
`;
