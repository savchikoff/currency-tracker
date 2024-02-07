import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { readFromCache, writeToCache } from '@helpers/cache';

import { dark, light } from '@theme/theme';

const ThemeChanger = ({ children }) => {
	const [themeType, setThemeType] = useState(() => {
		const cachedTheme = readFromCache('theme');
		if (cachedTheme) {
			return cachedTheme === 'dark' ? dark : light;
		} else {
			writeToCache('theme', 'dark');
			return dark;
		}
	});

	return <ThemeProvider theme={{ themeType, setThemeType }}>{children}</ThemeProvider>;
};

ThemeChanger.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default ThemeChanger;
