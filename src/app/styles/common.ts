import styled from 'styled-components';
import { theme } from '../theme';

interface StackProps {
	iscenter?: boolean;
}
interface FavoriteAvatarProps {
	status?: 'online' | 'busy';
}
interface StatusIndicatorProps {
	status: 'online' | 'busy';
}
export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	padding: 0 ${theme.spacing.lg};
	margin: 0 auto;
	max-width: ${(props) => props.theme.sizes.screen.maxWidth};
`;
export const Row = styled.div`
	display: flex;
	align-items: center;
	gap: 0.5rem;
`;
export const Stack = styled.div<StackProps>`
	display: flex;
	flex-direction: column;
	gap: 0.1rem;
	${(props) =>
		props.iscenter &&
		`
    align-items: center;
    text-align: center;
  `}
`;
