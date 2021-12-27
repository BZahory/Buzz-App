import AsyncStorage from "@react-native-async-storage/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import {
  ColorMode,
  extendTheme,
  NativeBaseProvider,
  StorageManager,
} from "native-base";
import React from "react";
import PreMain from "./components/Organisms/PreMain";

// Define the config
const config = {
  useSystemColorMode: true,
  // initialColorMode: "dark",
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
  return (
    <NativeBaseProvider
    // colorModeManager= {colorModeManager}
    >
      <NavigationContainer>
        <PreMain />
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
