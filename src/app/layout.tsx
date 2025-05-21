'use client';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Lato } from 'next/font/google';
import { Providers } from './providers';
import { Footer } from './components/ui/Footer';
import { BottomNavigation } from './components/BottomNavigation';
import { HeaderContent } from './components/HeaderContent';
import { Header } from './components/ui/Header';
import { Main } from './components/ui/Main';
import './styles/globals.css';

const lato = Lato({
	weight: ['400', '700'],
	subsets: ['latin'],
	variable: '--font-lato',
});

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Movie App',
	description: 'A movie library app built with Next.js',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${lato.variable} ${geistSans.variable} ${geistMono.variable} antialiased`}
			>
				<Header>
					<HeaderContent />
				</Header>
				<Providers>
					<Main>{children}</Main>
				</Providers>
				<Footer>
					<BottomNavigation />
				</Footer>
			</body>
		</html>
	);
}
