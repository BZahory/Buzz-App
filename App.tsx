import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import {
  ColorMode,
  extendTheme,
  NativeBaseProvider,
  StorageManager,
} from "native-base";
import React from "react";
import { LogBox } from "react-native";
import PreMain from "./components/Organisms/PreMain";

// Define the config
const config = {
  useSystemColorMode: true,
  // initialColorMode: "dark",
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
  fonts: {
    heading: "sans-serif",
    body: "sans-serif",
    mono: "sans-serif",
  },
};

// extend the theme
export const theme = extendTheme({ config });

//enables persistent color storage, messes with theme selection in settings
// const colorModeManager: StorageManager = {
//   get: async () => {
//     console.log("called");
//     try {
//       let val = await AsyncStorage.getItem("@color-mode");
//       return val === "dark" ? "dark" : "light";
//     } catch (e) {
//       return "dark";
//     }
//   },
//   set: async (value: ColorMode) => {
//     try {
//       await AsyncStorage.setItem("@color-mode", value + "");
//     } catch (e) {
//       console.log(e);
//     }
//   },
// };

export default function App() {
  LogBox.ignoreAllLogs(true);
  const [isBiometricEnabled, setIsBiometricEnabled] = React.useState(false);
  const biometricContext = React.createContext(isBiometricEnabled);

  return (
    <NativeBaseProvider
      config={theme.config}
      // colorModeManager= {colorModeManager}
    >
      <NavigationContainer>
        <PreMain />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
