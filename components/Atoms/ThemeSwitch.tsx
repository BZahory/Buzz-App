import { Switch, useColorMode } from "native-base";
import React from "react";

export default function ThemeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Switch
      isChecked={colorMode === "light" ? true : false}
      onToggle={toggleColorMode}
      aria-label={
        colorMode === "light" ? "switch to dark mode" : "switch to light mode"
      }
    />
  );
}
