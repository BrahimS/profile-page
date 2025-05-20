export type Status = 'online' | 'busy';

export interface Favorite {
	id: number;
	name: string;
	image: string;
	status: Status;
}

export interface MenuItemType {
	icon: React.ReactNode;
	text: string;
	rightContent?: React.ReactNode;
	isDanger?: boolean;
}
