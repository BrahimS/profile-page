import 'styled-components';

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
	spacing: {
		sm: '0.25rem',
		md: '0.5rem',
		lg: '1rem',
		xl: '2rem',
	},
	sizes: {
		screen: {
			maxWidth: '1200px',
		},
	},
};
