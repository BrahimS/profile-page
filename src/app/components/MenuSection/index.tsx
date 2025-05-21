'use client';

import { RxChevronRight } from 'react-icons/rx';
import { Container } from '@/app/styles/common';
import { MenuItemType } from '@/app/types';
import { theme } from '../../theme';
import { MenuCard, MenuItem, MenuText } from './styles';

interface MenuSectionProps {
	items: MenuItemType[];
	$istransparent?: boolean;
}

export const MenuSection = ({ items, $istransparent }: MenuSectionProps) => {
	return (
		<main>
			<Container>
				<MenuCard $istransparent={$istransparent}>
					{items.map((item, index) => (
						<MenuItem key={index}>
							<MenuText>
								<div
									className={`menu-item-content ${
										item.isDanger ? 'danger' : ''
									}`}
								>
									{item.icon}
									<span
										style={{
											fontSize: `${theme.media.sm ? theme.fontSize.sm : theme.fontSize.lg}`,
										}}
									>
										{item.text}
									</span>
								</div>
								{item.rightContent || (
									<RxChevronRight
										size={20}
										style={{
											color: $istransparent
												? 'grey'
												: theme.colors.primary.main,
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
