import React from 'react';
import { FooterWrapper } from './styles';

interface Props {
	children: React.ReactNode;
	style?: React.CSSProperties;
}
export const Footer = ({ children, style }: Props): React.JSX.Element => (
	<FooterWrapper style={{ ...style }}>{children}</FooterWrapper>
);
