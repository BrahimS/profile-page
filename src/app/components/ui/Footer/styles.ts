import { theme } from '@/app/theme';
import styled from 'styled-components';

export const FooterWrapper = styled.footer`
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: ${theme.colors.primary.main};
	padding: 0.75rem 0;
	z-index: 10;
`;
