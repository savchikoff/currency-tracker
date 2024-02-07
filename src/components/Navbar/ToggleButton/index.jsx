import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { Label, Input, Switch } from './styled';
import { dark, light } from '@theme/theme';
import { writeToCache } from '@helpers/cache';

const ToggleButton = () => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme.name === 'dark' ? light : dark;
		setTheme(newTheme);
		writeToCache('theme', newTheme.name);
	};

	const isLightTheme = theme.name === 'light';

	return (
		<Label>
			<Input data-cy="toggle-checkbox" checked={isLightTheme} type="checkbox" onChange={toggleTheme} />
			<Switch />
		</Label>
	);
};

export default ToggleButton;
