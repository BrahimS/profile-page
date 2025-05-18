'use client';

import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineEye } from 'react-icons/hi';
import { BsChat, BsBasket } from 'react-icons/bs';
import { BottomNav, NavItems, NavLink, Stack } from '../../styles';

export const BottomNavigation = () => {
	return (
		<BottomNav>
			<NavItems>
				<NavLink href="/">
					<Stack iscenter>
						<AiOutlineHome size={20} />
						<span>Accueil</span>
					</Stack>
				</NavLink>
				<NavLink href="/voyants">
					<HiOutlineEye size={20} />
					<span>Voyants</span>
				</NavLink>
				<NavLink href="/discussions">
					<Stack iscenter>
						<BsChat size={20} />
						<span>Discussions</span>
					</Stack>
				</NavLink>
				<NavLink href="/boutique">
					<Stack iscenter>
						<BsBasket size={20} />
						<span>Boutique</span>
					</Stack>
				</NavLink>
			</NavItems>
		</BottomNav>
	);
};
