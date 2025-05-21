import React from 'react';
import { Headerwrapper } from './styles';

interface Props {
	children: React.ReactNode;
	styles?: React.CSSProperties;
}

export const Header = ({ children, styles }: Props): React.JSX.Element => {
	return (
		<Headerwrapper data-testid="header" style={{ ...styles }}>
			{children}
		</Headerwrapper>
	);
};
