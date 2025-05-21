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
import { itemVariants, wrapperVariants } from '@/app/utils/animation';
import { motion } from 'framer-motion';

export const FavoritesSection = () => {
	return (
		<FavoritesCard>
			<Container>
				<FavoritesTitle>Mes favoris</FavoritesTitle>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={wrapperVariants}
				>
					<FavoritesList>
						{FAVORITES.map((favorite) => (
							<FavoriteItem key={favorite.id}>
								<motion.div variants={itemVariants}>
									<FavoriteAvatarWrapper>
										<FavoriteAvatar $status={favorite.status}>
											<Image
												key={favorite.id}
												src={favorite.image}
												alt={favorite.name}
												width={60}
												height={60}
											/>
										</FavoriteAvatar>
										<StatusIndicator $status={favorite.status} />
									</FavoriteAvatarWrapper>
									<FavoriteName>{favorite.name}</FavoriteName>
								</motion.div>
							</FavoriteItem>
						))}
					</FavoritesList>
				</motion.div>
			</Container>
		</FavoritesCard>
	);
};
