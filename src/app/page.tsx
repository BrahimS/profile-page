'use client';
import { Container } from './styles';
import { Header } from './components/Header';
import { BottomNavigation } from './components/BottomNavigation';
import { FavoritesSection } from './components/FavoritesSection';

export default function ProfilePage() {
	return (
		<Container>
			<Header />
			<FavoritesSection />
			<BottomNavigation />
		</Container>
	);
}
