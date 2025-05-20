'use client';

import { FaDollarSign } from 'react-icons/fa';
import { PointsContainer } from './styles';

interface PointsDisplayProps {
	points: number;
	showAddButton?: boolean;
	maxWidth?: string;
	onClick?: () => void;
	style?: React.CSSProperties;
}

export const PointsDisplay = ({
	points,
	showAddButton = true,
	maxWidth,
	onClick,
	style,
}: PointsDisplayProps) => {
	return (
		<PointsContainer
			style={{ maxWidth: maxWidth, ...style }}
			onClick={onClick}
			className={onClick ? 'clickable' : ''}
		>
			<span className="points">
				<div className="coin-icon">
					<FaDollarSign size={10} />
				</div>
				{points}
			</span>
			{showAddButton && <span className="plus">+</span>}
		</PointsContainer>
	);
};
