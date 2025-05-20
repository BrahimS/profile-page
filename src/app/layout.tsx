import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { Lato } from 'next/font/google';
import './styles/globals.css';
import { Providers } from './providers';

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
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
