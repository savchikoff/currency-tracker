import {
	breakpoints,
	containerSizes,
	sizes,
	colors,
	positions,
	imageSizes,
	fontWeights,
	fonts,
	width,
	height,
	additionalValues,
	displayValues
} from './styles';

export const baseStyles = {
	colors: {
		...colors
	},
	breakpoints: {
		...breakpoints
	},
	containerSizes: {
		...containerSizes
	},
	sizes: {
		...sizes
	},
	positions: {
		...positions
	},
	imageSizes: {
		...imageSizes
	},
	fontWeights: {
		...fontWeights
	},
	fonts: {
		...fonts
	},
	width: {
		...width
	},
	height: {
		...height
	},
	additionalValues: {
		...additionalValues
	},
	displayValues: {
		...displayValues
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
		headerGradient: "linear-gradient(321deg, #00b03a 0%, rgba(1, 185, 61, 0.45) 100%)",
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
		headerGradient: "linear-gradient(311deg, #32c972 0%, #417b5c 100%)",
		cardBg: colors.lightGreen
	},
};
