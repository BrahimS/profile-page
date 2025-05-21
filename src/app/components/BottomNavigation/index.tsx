'use client';

import { motion } from 'framer-motion';
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineEye } from 'react-icons/hi';
import { BsChat, BsBasket } from 'react-icons/bs';
import { NavItems, NavLink } from './styles';
import { Stack } from '@/app/styles/common';
import { itemVariants, wrapperVariants } from '@/app/utils/animation';

export const BottomNavigation = () => {
	return (
		<motion.div initial="hidden" animate="visible" variants={wrapperVariants}>
			<NavItems>
				<motion.div variants={itemVariants}>
					<NavLink href="/">
						<Stack $iscenter>
							<AiOutlineHome size={20} />
							<span>Accueil</span>
						</Stack>
					</NavLink>
				</motion.div>
				<motion.div variants={itemVariants}>
					<NavLink href="/voyants">
						<Stack $iscenter>
							<HiOutlineEye size={20} />
							<span>Voyants</span>
						</Stack>
					</NavLink>
				</motion.div>
				<motion.div variants={itemVariants}>
					<NavLink href="/discussions">
						<Stack $iscenter>
							<BsChat size={20} />
							<span>Discussions</span>
						</Stack>
					</NavLink>
				</motion.div>
				<motion.div variants={itemVariants}>
					<NavLink href="/boutique">
						<Stack $iscenter>
							<BsBasket size={20} />
							<span>Boutique</span>
						</Stack>
					</NavLink>
				</motion.div>
			</NavItems>
		</motion.div>
	);
};
