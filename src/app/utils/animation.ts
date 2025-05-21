export const wrapperVariants = {
	hidden: {
		opacity: 0,
	},
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delay: 0.2,
			ease: 'easeInOut',
		},
	},
};

export const itemVariants = {
	hidden: { y: 30, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1,

		transition: {
			duration: 0.3,
			ease: 'easeInOut',
		},
	},
};
