'use client';

import {
	FaUser,
	FaTag,
	FaHeadset,
	FaCreditCard,
	FaComments,
	FaGlobe,
} from 'react-icons/fa';
import { RxExit, RxTrash, RxChevronRight } from 'react-icons/rx';
import { Container } from './styles';
import { Header } from './components/Header';
import { FavoritesSection } from './components/FavoritesSection';
import { MenuSection } from './components/MenuSection';
import { BottomNavigation } from './components/BottomNavigation';
import { BsBasket } from 'react-icons/bs';

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
		{ icon: <FaHeadset className="icon" />, text: 'Support client' },
		{
			icon: <FaCreditCard className="icon" />,
			text: 'Préférences de paiement',
			rightContent: (
				<div className="right-content">
					<span className="payment-method">Paypal</span>
					<RxChevronRight size={20} />
				</div>
			),
		},
		{
			icon: <FaComments className="icon" />,
			text: 'Préférences de communication',
		},
		{
			icon: <FaGlobe className="icon" />,
			text: 'Langue',
			rightContent: (
				<div className="right-content">
					<span className="language">Français</span>
					<RxChevronRight size={20} />
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
		<Container>
			<Header />
			<FavoritesSection />
			<MenuSection items={mainMenuItems} />
			<MenuSection items={settingsMenuItems} isTransparent />
			<MenuSection items={accountActionItems} isTransparent />
			<BottomNavigation />
		</Container>
	);
}
