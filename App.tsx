import React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Text,
  Link,
  HStack,
  Center,
  Heading,
  Switch,
  useColorMode,
  NativeBaseProvider,
  extendTheme,
  VStack,
  Code,
} from "native-base";

import WelcomeComponent from "./components/Screens/Pre-Main/Welcome";
import OnboardingComponent from "./components/Screens/Pre-Main/Onboarding";
import SignIn from "./components/Screens/Pre-Main/SignIn";
import SignUp from "./components/Screens/Pre-Main/SignUp";
import OTP from "./components/Screens/Pre-Main/OTP";
import Main from "./components/Screens/Main/Main";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });

export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Welcome: undefined;
  Main: undefined;
  OTP: undefined;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
          <AppStack.Screen name="Onboarding" component={OnboardingComponent} />
          <AppStack.Screen name="SignIn" component={SignIn} />
          <AppStack.Screen name="SignUp" component={SignUp} />
          <AppStack.Screen name="OTP" component={OTP} />
          <AppStack.Screen name="Welcome" component={WelcomeComponent} />
          <AppStack.Screen name="Main" component={Main} />
        </AppStack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
