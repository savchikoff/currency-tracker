import { useState } from "react";
import { ThemeProvider } from "styled-components";
import PropTypes from "prop-types";

import { light, dark } from "./styled";


const ThemeChanger = ({ children }) => {
    const [theme, setTheme] = useState(dark);
    const toggleTheme = () => {
        setTheme(theme === dark ? light : dark);
    }
    return (
        <ThemeProvider theme={{ theme, toggleTheme }}>
            {children}
        </ThemeProvider>
    )
}

ThemeChanger.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
}

export default ThemeChanger;