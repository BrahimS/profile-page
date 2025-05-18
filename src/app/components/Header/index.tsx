'use client';

import { RxChevronLeft } from 'react-icons/rx';
import { GiGemini } from 'react-icons/gi';

import {
	Avatar,
	BackButton,
	Header as HeaderWrapper,
	HeaderTitle,
	HeaderTop,
	ProfileInfo,
	Stack,
	UserInfo,
	UserName,
	UserSubtext,
} from '../../styles';

export const Header = () => {
	const handlePointsClick = () => {
		console.log('Points clicked');
	};

	return (
		<HeaderWrapper>
			<HeaderTop>
				<BackButton href="/">
					<RxChevronLeft size={24} />
					<span>Retour</span>
				</BackButton>
				<HeaderTitle>Mon profil</HeaderTitle>
			</HeaderTop>
			<ProfileInfo>
				<Avatar>
					<span
						style={{ fontSize: '0.9rem', fontWeight: '700', color: '#008080' }}
					>
						MA
					</span>
				</Avatar>
				<UserInfo>
					<Stack iscenter={false}>
						<UserName>Bonjour Manon !</UserName>
						<UserSubtext>
							<GiGemini size={17} />
							<span>Gémeaux</span>
						</UserSubtext>
					</Stack>
				</UserInfo>
			</ProfileInfo>
		</HeaderWrapper>
	);
};
