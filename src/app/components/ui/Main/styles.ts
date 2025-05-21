import styled from 'styled-components';
import { theme } from '../../../theme';

export const MainWrapper = styled.main`
	overflow-y: scroll;
	margin-bottom: ${theme.media.sm ? '60px' : 0};
	background-color: ${theme.colors.background.main};
`;
