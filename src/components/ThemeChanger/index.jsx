import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';

import { readFromCache, writeToCache } from '../../utils/cache';

import { dark, light } from '@constants/theme';

const ThemeChanger = ({ children }) => {
	const [theme, setTheme] = useState(dark);

	useEffect(() => {
		const cachedTheme = readFromCache('theme');
		if (cachedTheme) {
			const newTheme = cachedTheme === 'dark' ? dark : light;
			setTheme(newTheme);
		} else {
			writeToCache('theme', 'dark');
		}
	}, []);

	return <ThemeProvider theme={{ theme, setTheme }}>{children}</ThemeProvider>;
};

ThemeChanger.propTypes = {
	children: PropTypes.oneOfType([
		PropTypes.arrayOf(PropTypes.node),
		PropTypes.node,
	]).isRequired,
};

export default ThemeChanger;
