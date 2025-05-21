import 'styled-components';

const breackpoints = {
	sm: '640px',
	md: '768px',
	lg: '1024px',
	xl: '1280px',
} as const;
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			primary: {
				main: string;
				light: string;
			};
			secondary: {
				main: string;
			};
			background: {
				main: string;
				white: string;
			};
			text: {
				main: string;
				white: string;
				black: string;
				gray: string;
			};
			success: {
				main: string;
			};
			warning: {
				main: string;
			};
			error: {
				main: string;
			};
		};
		fontSize: {
			xs: string;
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
		media: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
		spacing: {
			sm: string;
			md: string;
			lg: string;
			xl: string;
		};
		sizes: {
			screen: {
				maxWidth: string;
			};
		};
	}
}

export const theme = {
	colors: {
		primary: {
			main: '#118787',
      light: '#5AAB29',
      dark: '#015e5e'
		},
		secondary: {
			main: '#5856D6',
		},
		background: {
			main: '#ededed',
			white: '#FFFFFF',
		},
		text: {
			main: '#1F1F1F',
			white: '#FFFFFF',
			black: '#000000',
			gray: '#BFBFBF',
		},
		success: {
			main: '#34C759',
		},
		warning: {
			main: '#FF9500',
		},
		error: {
			main: '#FF3B30',
		},
	},
	fontSize: {
		xs: '0.75rem',
		sm: '0.875rem',
		md: '1.2rem',
		lg: '2rem',
		xl: '2.25rem',
	},
	media: {
		sm: `@media (min-width: ${breackpoints.sm})`,
		md: `@media (min-width: ${breackpoints.md})`,
		lg: `@media (min-width: ${breackpoints.lg})`,
		xl: `@media (min-width: ${breackpoints.xl})`,
	},
	spacing: {
		sm: '0.25rem',
		md: '0.5rem',
		lg: '1rem',
		xl: '2rem',
	},
	sizes: {
		screen: {
			maxWidth: breackpoints.xl,
			padding: {
				mobile: '1rem',
				tablet: '2rem',
				desktop: '3.5rem',
			},
		},
	},
};
