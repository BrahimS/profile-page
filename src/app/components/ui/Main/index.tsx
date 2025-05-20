import React from 'react';
import { MainWrapper } from './styles';

interface Props {
	children: React.ReactNode;
	styles?: React.CSSProperties;
}

export const Main = ({ children, styles }: Props): React.JSX.Element => {
	return <MainWrapper style={{ ...styles }}>{children}</MainWrapper>;
};
