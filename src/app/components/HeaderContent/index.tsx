'use client';

import { RxChevronLeft } from 'react-icons/rx';
import { GiGemini } from 'react-icons/gi';
import { PointsDisplay } from '../PointsDisplay';
import { theme } from '../../theme';
import { Container, Stack } from '@/app/styles/common';
import {
	HeaderTop,
	HeaderTitle,
	BackButton,
	ProfileInfo,
	Avatar,
	UserInfo,
	UserName,
	UserSubtext,
} from './styles';
import { itemVariants, wrapperVariants } from '@/app/utils/animation';
import { motion } from 'framer-motion';

export const HeaderContent = () => {
	const handlePointsClick = () => {
		console.log('Points clicked');
	};

	return (
		<motion.div initial="hidden" animate="visible" variants={wrapperVariants}>
			<Container>
				<motion.div variants={itemVariants}>
					<HeaderTop>
						<BackButton href="/">
							<RxChevronLeft size={24} />
							<span>Retour</span>
						</BackButton>
						<HeaderTitle>Mon profil</HeaderTitle>
						<PointsDisplay points={0} onClick={handlePointsClick} />
					</HeaderTop>
					<ProfileInfo>
						<Avatar>
							<span
								style={{
									fontSize: `${theme.media.sm ? theme.fontSize.md : theme.fontSize.lg}`,
									fontWeight: '700',
									color: theme.colors.primary.main,
								}}
							>
								MA
							</span>
						</Avatar>
						<UserInfo>
							<Stack>
								<UserName>Bonjour Manon !</UserName>
								<UserSubtext>
									<GiGemini size={17} />
									<span>Gémeaux</span>
								</UserSubtext>
							</Stack>
							<PointsDisplay
								points={0}
								maxWidth="60px"
								style={{ marginTop: theme.spacing.md }}
							/>
						</UserInfo>
					</ProfileInfo>
				</motion.div>
			</Container>
		</motion.div>
	);
};
