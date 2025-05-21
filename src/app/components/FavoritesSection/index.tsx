'use client';

import Image from 'next/image';
import { FAVORITES } from '@/app/constants';
import { Container } from '@/app/styles/common';
import {
	FavoriteAvatar,
	FavoriteAvatarWrapper,
	FavoriteItem,
	FavoriteName,
	FavoritesCard,
	FavoritesList,
	FavoritesTitle,
	StatusIndicator,
} from './styles';

export const FavoritesSection = () => {
	return (
		<FavoritesCard>
			<Container>
				<FavoritesTitle>Mes favoris</FavoritesTitle>
				<FavoritesList>
					{FAVORITES.map((favorite) => (
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
