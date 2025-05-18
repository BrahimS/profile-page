'use client';
import { Container } from './styles';
import { Header } from './components/Header';
import { BottomNavigation } from './components/BottomNavigation';

export default function ProfilePage() {
	return (
		<Container>
			<Header />
			<BottomNavigation />
		</Container>
	);
}
