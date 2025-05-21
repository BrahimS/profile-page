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

export const HeaderContent = () => {
	const handlePointsClick = () => {
		console.log('Points clicked');
	};

	return (
		<Container>
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
							fontSize: '0.9rem',
							fontWeight: '700',
							color: '#008080',
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
		</Container>
	);
};
