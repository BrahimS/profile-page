'use client';

import Image from 'next/image';
import {
	Container,
	FavoriteAvatar,
	FavoriteAvatarWrapper,
	FavoriteItem,
	FavoriteName,
	FavoritesCard,
	FavoritesList,
	FavoritesTitle,
	StatusIndicator,
} from '../../styles';

type Status = 'online' | 'busy';

interface Favorite {
	id: number;
	name: string;
	image: string;
	status: Status;
}

const favorites: Favorite[] = [
	{ id: 1, name: 'Bella', image: '/images/1.png', status: 'online' },
	{ id: 2, name: 'Gloria', image: '/images/2.png', status: 'online' },
	{ id: 3, name: 'Donis', image: '/images/3.png', status: 'busy' },
	{ id: 4, name: 'Anais', image: '/images/4.png', status: 'busy' },
	{ id: 5, name: 'Alcee', image: '/images/5.png', status: 'online' },
];

export const FavoritesSection = () => {
	return (
		<FavoritesCard>
			<Container>
				<FavoritesTitle>Mes favoris</FavoritesTitle>
				<FavoritesList>
					{favorites.map((favorite) => (
						<FavoriteItem key={favorite.id}>
							<FavoriteAvatarWrapper>
								<FavoriteAvatar status={favorite.status}>
									<Image
										src={favorite.image}
										alt={favorite.name}
										width={60}
										height={60}
									/>
								</FavoriteAvatar>
								<StatusIndicator status={favorite.status} />
							</FavoriteAvatarWrapper>
							<FavoriteName>{favorite.name}</FavoriteName>
						</FavoriteItem>
					))}
				</FavoritesList>
			</Container>
		</FavoritesCard>
	);
};
