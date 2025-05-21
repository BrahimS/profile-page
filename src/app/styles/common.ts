import styled from 'styled-components';
import { theme } from '../theme';

interface StackProps {
	$iscenter?: boolean;
}

export const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	padding: ${theme.media.sm ? theme.spacing.sm : theme.spacing.lg} 0;
	margin: 0 auto;
	max-width: ${theme.sizes.screen.maxWidth};
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
		props.$iscenter &&
		`
    align-items: center;
    text-align: center;
  `}
`;
