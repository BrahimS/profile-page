import styled from 'styled-components';
import Link from 'next/link';
import { theme } from './theme';

interface StackProps {
  iscenter?: boolean;
}

interface FavoriteAvatarProps {
  status?: 'online' | 'busy';
}

interface MenuCardProps {
  isTransparent?: boolean;
}

interface StatusIndicatorProps {
  status: 'online' | 'busy';
}

interface AvatarProps {
  border?: boolean;
}

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 0 ${theme.spacing.lg};
  margin: 0 auto;
  max-width: ${props => props.theme.sizes.screen.maxWidth};
`;
export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
export const Stack = styled.div<StackProps>`
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
  ${props => props.iscenter && `
    align-items: center;
    text-align: center;
  `}
`;
export const ProfileCardTransparent = styled.section`
  background-color: transparent !important;
  border-radius: 1rem;
  padding: 1.5rem;
  position: relative;
  z-index: 1;
`;
export const FavoritesCard = styled(ProfileCardTransparent)`
    background-color: transparent !important;
`;


// Header
export const Header = styled.header`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.primary.main};
  padding: 1rem 1.5rem 5rem;
  overflow: hidden;
  color: ${props => props.theme.colors.text.white};

  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: -1px;
    right: -1px;
    height: 220px;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 340' preserveAspectRatio='none'%3E%3Cpath fill='%23ededed' d='M0,288 C240,272 480,256 720,272 C960,288 1200,304 1440,288 L1440,320 L0,320 Z'/%3E%3C/svg%3E");
    background-position: center bottom;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transform: scale(1.1);
  }
`;

export const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-Bottom: ${props => props.theme.spacing.xl};
  max-width: 1200px;
`;

export const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.text.white};
  text-decoration: none;
  gap: 0.5rem;
  font-size: 1rem;
  svg {
    width: 24px;
    height: 24px;
  }
  span {
    font-size: 1rem;
    opacity: 0.9;
  }
`;

export const HeaderTitle = styled.h1`
  color: ${props => props.theme.colors.text.white};
  font-size: 1.25rem;
  font-weight: 500;
  margin: 0;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
export const Avatar = styled.div<AvatarProps>`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: ${props => props.theme.colors.text.white};
  border: ${props => props.border ? `3px solid ${props.theme.colors.success.main}` : 'none'};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  padding: 12px;


  span {
    font-size: 2rem;
    font-weight: 500;
    color: ${props => props.theme.colors.primary.main};
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 1rem;
`;

// Profile
export const FavoriteAvatarWrapper = styled.section`
  position: relative;
`;
export const StatusIndicator = styled.div<StatusIndicatorProps>`
  position: absolute;
  right: 1px;
  bottom: 10px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.colors.background.white};
  background-color: ${props => props.status === 'online' ? props.theme.colors.success.main : props.theme.colors.warning.main};
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.h2`
margin: 0;
color: ${props => props.theme.colors.text.white};
font-weight: 500;
font-size: 1.5rem;
`;

export const UserSubtext = styled.span`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  color: ${props => props.theme.colors.text.white};
  font-size: 1rem;
`;
// pointerDisplay
export const PointsContainer = styled.div`
  background-color: ${props => props.theme.colors.background.white};
  border-radius: 20px;
  padding: 0.25rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  position: relative;
  min-width: 60px;
  justify-content: center;

  &.clickable {
    cursor: pointer;
    transition: transform 0.2s ease;
    &:hover {
      transform: scale(1.05);
    }
    &:active {
      transform: scale(0.95);
    }
  }
  .points {
    color: ${props => props.theme.colors.text.black};
    font-weight: 500;
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  .coin-icon {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background-color: #FFD700;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #B8860B;
    font-size: 12px;
  }

  .plus {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: absolute;
    top: -6px;
    right: -6px;
    padding: 2px;
    background-color: ${props => props.theme.colors.primary.light};
    color: ${props => props.theme.colors.text.white};
    font-size: 0.75rem;
  }
`;

// Favorites Profile

export const FavoritesTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: ${theme.spacing.sm};
  color: ${props => props.theme.colors.text.black};
`;

export const FavoritesList = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0.2rem;
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FavoriteItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  min-width: 60px;
`;

export const FavoriteAvatar = styled.div<FavoriteAvatarProps>`
  border-radius: 50%;
  border: 2px solid ${props => props.status === 'online' ? props.theme.colors.success.main : props.status === 'busy' ? props.theme.colors.warning.main : props.theme.colors.text.black};
  overflow: hidden;
  flex-shrink: 0;
  position: relative;
  object-fit: contain;
  background-size: cover;

  img {
    padding: 2px;
  }
`;

export const FavoriteName = styled.span`
  color: ${props => props.theme.colors.text.black};
  font-size: 0.875rem;
  font-weight: 500;
`;

// Personal menu
export const MenuCard = styled.div<MenuCardProps>`
  background-color: ${props => props.isTransparent ? 'transparent' : props.theme.colors.background.white};
  border-radius: 1rem;
  margin: 1rem 0;
  padding: ${props => props.isTransparent ? '0 1.5rem' : '1rem  1.5rem'};
  box-shadow: ${props => props.isTransparent ? 'none' : '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'};
`;

export const MenuItem = styled.div`
  padding: 0.8rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  &:last-child {
    border-bottom: none;
  }
`;

export const MenuText = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme.colors.text.black};
  font-size: 1rem;

  .menu-item-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
  }

  .right-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme.colors.primary.main};
  }

  .payment-method,
  .language {
    font-size: 0.9rem;
    color: ${props => props.theme.colors.text.gray};
  }

  .icon {
    font-size: 1.25rem;
    color: ${props => props.theme.colors.primary.main};
  }

  svg {
    color: ${props => props.theme.colors.text.gray};
  }
`;

export const ModifierButton = styled.button`
  color: ${props => props.theme.colors.primary.main};
  border: 1px solid ${props => props.theme.colors.primary.main};
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  background: none;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primary.main};
    color: ${props => props.theme.colors.text.white};
  }
`;

export const BottomNav = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${props => props.theme.colors.primary.main};
  padding: 0.75rem 0;
  z-index: 10;
`;

export const NavItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const NavLink = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: ${props => props.theme.colors.text.white};
  gap: 6px;
  min-width: 60px;
  text-align: center;

  svg {
    width: 20px;
    height: 20px;
    opacity: 0.9;
    display: block;
  }

  span {
    font-size: 12px;
    opacity: 0.9;
    white-space: nowrap;
    display: block;
  }
`;
