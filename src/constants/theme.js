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
    additionalValues
} from "./styles";

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
    additionalValues: {
        ...additionalValues
    }
}

export const dark = {
    name: "dark",
    ...baseStyles,
    themeColors: {
        background: colors.black,
        text: colors.lightGray
    }
}

export const light = {
    name: "light",
    ...baseStyles,
    themeColors: {
        background: colors.white,
        text: colors.black
    }
}