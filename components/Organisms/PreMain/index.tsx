import { Image, Text } from "react-native";
import React from "react";
import {
  NavigationContainer,
  StackActions,
  useNavigation,
  useNavigationBuilder,
} from "@react-navigation/native";

import { MaterialIcons } from "@expo/vector-icons";

import Onboarding from "react-native-onboarding-swiper";
import { flex, width, height } from "styled-system";
import { TouchableOpacity } from "react-native";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import {
  Center,
  Tabs,
  useColorMode,
  extendTheme,
  useTheme,
  theme,
} from "native-base";

import WelcomeComponent from "../../../components/Molecules/PreMain/Welcome";
import OnboardingComponent from "../../../components/Molecules/PreMain/Onboarding";
import SignIn from "../../../components/Molecules/PreMain/SignIn";
import SignUp from "../../../components/Molecules/PreMain/SignUp";
import OTP from "../../../components/Molecules/PreMain/OTP";
import Main from "../../../components/Organisms/Main";

export type RootStackParamList = {
  Onboarding: undefined;
  SignIn: undefined;
  SignUp: undefined;
  Welcome: undefined;
  Main: undefined;
  OTP: undefined;
};

const AppStack = createNativeStackNavigator<RootStackParamList>();

export default function PreMain() {
  const { colorMode } = useColorMode();
  const { color } = useTheme();

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }}>
      <AppStack.Screen name="Onboarding" component={OnboardingComponent} />
      <AppStack.Screen name="SignIn" component={SignIn} />
      <AppStack.Screen name="SignUp" component={SignUp} />
      <AppStack.Screen name="OTP" component={OTP} />
      <AppStack.Screen name="Welcome" component={WelcomeComponent} />
      <AppStack.Screen name="Main" component={Main} />
    </AppStack.Navigator>
  );
}
