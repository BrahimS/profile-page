'use client';

import { RxChevronRight } from 'react-icons/rx';
import { theme } from '@/app/theme';
import { MenuCard, MenuItem, MenuText } from './styles';
import { Container } from '@/app/styles/common';

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
		<Container>
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
							{item.rightContent || (
								<RxChevronRight
									size={20}
									style={{
										color: isTransparent ? 'grey' : theme.colors.primary.main,
									}}
								/>
							)}
						</MenuText>
					</MenuItem>
				))}
			</MenuCard>
		</Container>
	);
};
