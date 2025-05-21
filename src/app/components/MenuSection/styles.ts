import styled from 'styled-components';

interface MenuCardProps {
	$istransparent?: boolean;
}

export const MenuCard = styled.div<MenuCardProps>`
	background-color: ${(props) =>
		props.$istransparent ? 'transparent' : props.theme.colors.background.white};
	border-radius: 1rem;
	margin: 1rem;
	padding: ${(props) => (props.$istransparent ? '0 1rem' : '1rem')};
	box-shadow: ${(props) =>
		props.$istransparent
			? 'none'
			: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'};
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
	color: ${(props) => props.theme.colors.text.black};
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
		color: {theme.colors.primary.main};
	}

	.payment-method,
	.language {
		color: ${(props) => props.theme.colors.text.gray};
    font-size: 0.875rem;
	}

	.icon {
		font-size: 1.25rem;
		color: ${(props) => props.theme.colors.primary.main};
	}

	svg {
		color: ${(props) => props.theme.colors.text.gray};
	}
`;
