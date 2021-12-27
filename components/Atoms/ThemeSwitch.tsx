import { Switch, useColorMode } from "native-base";
import React from "react";
import { DeviceEventEmitter, NativeModule } from "react-native";

// export const eventEmitter = new NativeEventEmitter();

export default function ThemeSwitch() {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  DeviceEventEmitter.addListener("event.colorChangeEvent", (string: string) => {
    setColorMode(() => string);
  });

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
