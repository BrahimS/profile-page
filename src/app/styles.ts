import Link from 'next/link';
import styled from 'styled-components';


interface StackProps {
  iscenter?: boolean;
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
  font-weight: 700;
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
  margin: 0 auto;
  padding: 0 1rem;
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
