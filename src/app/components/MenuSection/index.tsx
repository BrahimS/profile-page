'use client';

import { RxChevronRight } from 'react-icons/rx';
import { theme } from '@/app/theme';
import { Container } from '@/app/styles/common';
import { MenuItemType } from '@/app/types';
import { MenuCard, MenuItem, MenuText } from './styles';

interface MenuSectionProps {
	items: MenuItemType[];
	isTransparent?: boolean;
}

export const MenuSection = ({ items, isTransparent }: MenuSectionProps) => {
	return (
		<main>
			<Container>
				<MenuCard isTransparent={isTransparent}>
					{items.map((item, index) => (
						<MenuItem key={index}>
							<MenuText>
								<div
									className={`menu-item-content ${
										item.isDanger ? 'danger' : ''
									}`}
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
		</main>
	);
};
