import styled from 'styled-components';
import Link from 'next/link';

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
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.colors.background.main};
  padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const Header = styled.header`
  background-color: ${props => props.theme.colors.primary.main};
  color: ${props => props.theme.colors.text.white};
  padding: 1rem 1.5rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: -16px;
    left: -1px;
    right: -1px;
    height: 350px;

    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 350' preserveAspectRatio='none'%3E%3Cdefs%3E%3ClinearGradient id='wave-gradient' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0%25' stop-color='%23f5f5f5' stop-opacity='0'/%3E%3Cstop offset='20%25' stop-color='%23f5f5f5' stop-opacity='0.2'/%3E%3Cstop offset='40%25' stop-color='%23f5f5f5' stop-opacity='0.4'/%3E%3Cstop offset='60%25' stop-color='%23f5f5f5' stop-opacity='0.6'/%3E%3Cstop offset='80%25' stop-color='%23f5f5f5' stop-opacity='0.8'/%3E%3Cstop offset='100%25' stop-color='%23f5f5f5' stop-opacity='1'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath fill='url(%23wave-gradient)' d='M0,288 C240,272 480,256 720,272 C960,288 1200,304 1440,288 L1440,320 L0,320 Z'/%3E%3C/svg%3E");
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
  max-width: 1200px;
  margin: 0 auto;
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

export const ProfileCard = styled.div`
  background-color: ${props => props.theme.colors.background.white};
  border-radius: 1rem;
  margin: -3rem 1rem 1rem;
  padding: 0 1.5rem;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;
export const ProfileCardTransparent = styled.div`
  background-color: transparent !important;
  border-radius: 1rem;
  margin: -3rem 1rem 1rem;
  padding: 1.5rem;
  position: relative;
  z-index: 1;
`;

export const ProfileInfo = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
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

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const FavoriteAvatarWrapper = styled.div`
  position: relative;
`;

export const StatusIndicator = styled.div<StatusIndicatorProps>`
  position: absolute;
  right: -2px;
  bottom: 6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.status === 'online' ? props.theme.colors.success.main : props.theme.colors.warning.main};
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

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const UserName = styled.h2`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${props => props.theme.colors.text.white};
  margin: 0;
`;

export const UserSubtext = styled.span`
  color: ${props => props.theme.colors.text.white};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0.7;
  font-size: 1rem;

  svg {
    color: ${props => props.theme.colors.text.white};
  }
`;

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

  .coin {
    color: ${props => props.theme.colors.text.white};
    background-color: ${props => props.theme.colors.primary.light};
    width: 16px;
    height: 16px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75rem;
    font-weight: bold;
    position: absolute;
    top: -6px;
    right: -6px;
    padding: 2px;
  }
`;

export const FavoritesCard = styled(ProfileCardTransparent)`
  margin-top: 0.5rem;
  background-color: transparent !important;
`;

export const FavoritesTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text.black};
  margin: 0;
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

  .status-indicator {
    position: absolute;
    bottom: 2px;
    right: 2px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: ${props => props.status === 'online' ? props.theme.colors.success.main : props.status === 'busy' ? props.theme.colors.warning.main : props.theme.colors.text.black};
    border: 2px solid ${props => props.theme.colors.text.white};
  }
`;

export const FavoriteName = styled.span`
  font-size: 0.875rem;
  color: ${props => props.theme.colors.text.black};
`;

export const MenuCard = styled.div<MenuCardProps>`
  background-color: ${props => props.isTransparent ? 'transparent' : props.theme.colors.background.white};
  border-radius: 1rem;
  margin: 1rem;
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
    align-items: center;
    gap: 1rem;
  }

  .right-content {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${props => props.theme.colors.text.gray};
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
