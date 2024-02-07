import {
	breakpoints,
	colors,
	fontWeights,
	sizes
} from '../constants/styles';

export const baseStyles = {
	colors: {
		...colors
	},
	breakpoints: {
		...breakpoints
	},
	sizes: {
		...sizes
	},
	fontWeights: {
		...fontWeights
	}
};

export const dark = {
	name: 'dark',
	...baseStyles,
	themeColors: {
		background: colors.black,
		text: colors.lightGray,
		modalBg: colors.mirage,
		modalBorder: colors.gravel,
		headerGradient: colors.darkThemeHeaderGradient,
		cardBg: colors.mirage
	},
};

export const light = {
	name: 'light',
	...baseStyles,
	themeColors: {
		background: colors.white,
		text: colors.black,
		modalBg: colors.white,
		modalBorder: colors.vibrantGreen,
		headerGradient: colors.lightThemeHeaderGradient,
		cardBg: colors.lightGreen
	},
};
