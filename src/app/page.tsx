'use client';

import { FaUser, FaTag } from 'react-icons/fa';
import { RxExit, RxTrash, RxChevronRight } from 'react-icons/rx';
import { Header } from './components/Header';
import { FavoritesSection } from './components/FavoritesSection';
import { MenuSection } from './components/MenuSection';
import { BottomNavigation } from './components/BottomNavigation';
import { BsBasket } from 'react-icons/bs';
import { Divider } from './components/Divider';
import { theme } from './theme';

export default function ProfilePage() {
	const mainMenuItems = [
		{
			icon: <FaUser className="icon" />,
			text: 'Mes informations personnelles',
		},
		{ icon: <BsBasket className="icon" />, text: 'Recharger mon compte' },
		{ icon: <FaTag className="icon" />, text: 'Mes achats' },
	];

	const settingsMenuItems = [
		{ icon: null, text: 'Support client' },
		{
			icon: null,
			text: 'Préférences de paiement',
			rightContent: (
				<div className="right-content">
					<span style={{ color: 'grey' }}>Paypal</span>
					<RxChevronRight size={20} style={{ color: 'grey' }} />
				</div>
			),
		},
		{
			icon: null,
			text: 'Préférences de communication',
		},
		{
			icon: null,
			text: 'Langue',
			rightContent: (
				<div className="right-content">
					<span style={{ color: 'grey' }}>Français</span>
					<RxChevronRight size={20} color="grey" />
				</div>
			),
		},
	];

	const accountActionItems = [
		{
			icon: <RxExit className="icon" color="grey" />,
			text: 'Me déconnecter',
			isDanger: true,
		},
		{
			icon: <RxTrash className="icon" color="grey" />,
			text: 'Supprimer mon compte',
			isDanger: true,
		},
	];

	return (
		<>
			<Header />
			<main>
				<FavoritesSection />
				<MenuSection items={mainMenuItems} />
				<MenuSection items={settingsMenuItems} isTransparent />
				<Divider
					height={5}
					width="100%"
					color={theme.colors.background.white}
				/>
				<MenuSection items={accountActionItems} isTransparent />
			</main>
			<footer>
				<BottomNavigation />
			</footer>
		</>
	);
}
