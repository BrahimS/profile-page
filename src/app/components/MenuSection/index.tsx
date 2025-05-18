'use client';

import { RxChevronRight } from 'react-icons/rx';
import { MenuCard, MenuItem, MenuText } from '../../styles';

interface MenuItemType {
	icon: React.ReactNode;
	text: string;
	rightContent?: React.ReactNode;
	isDanger?: boolean;
}

interface MenuSectionProps {
	items: MenuItemType[];
	isTransparent?: boolean;
}

export const MenuSection = ({ items, isTransparent }: MenuSectionProps) => {
	return (
		<MenuCard isTransparent={isTransparent}>
			{items.map((item, index) => (
				<MenuItem key={index}>
					<MenuText>
						<div
							className={`menu-item-content ${item.isDanger ? 'danger' : ''}`}
						>
							{item.icon}
							<span>{item.text}</span>
						</div>
						{item.rightContent || <RxChevronRight size={20} />}
					</MenuText>
				</MenuItem>
			))}
		</MenuCard>
	);
};
