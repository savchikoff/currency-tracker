import React, { useState, useContext } from "react";
import { ThemeContext } from "styled-components";

import { Label, Input, Switch } from "./styled";

const ToggleButton = () => {
  const [checked, setChecked] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleChange = (e) => {
    setChecked(e.target.checked);
    toggleTheme();
  };

  return (
    <Label>
      <Input checked={checked} type="checkbox" onChange={handleChange} />
      <Switch />
    </Label>
  );
};

export default ToggleButton;