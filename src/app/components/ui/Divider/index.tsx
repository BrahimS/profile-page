import React from 'react';

interface Props {
	height: number;
	width: string;
	color: string;
}

export const Divider = (props: Props) => {
	return (
		<div
			style={{
				height: props.height,
				width: props.width,
				backgroundColor: props.color,
			}}
		></div>
	);
};
