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
