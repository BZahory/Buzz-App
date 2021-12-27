import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import OnboardingComponent from "../../../components/Molecules/PreMain/Onboarding";
import OTP from "../../../components/Molecules/PreMain/OTP";
import SignIn from "../../../components/Molecules/PreMain/SignIn";
import SignUp from "../../../components/Molecules/PreMain/SignUp";
import WelcomeComponent from "../../../components/Molecules/PreMain/Welcome";
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
  return (
    <>
      <AppStack.Navigator screenOptions={{ headerShown: false }}>
        <AppStack.Screen name="Onboarding" component={OnboardingComponent} />
        <AppStack.Screen name="SignIn" component={SignIn} />
        <AppStack.Screen name="SignUp" component={SignUp} />
        <AppStack.Screen name="OTP" component={OTP} />
        <AppStack.Screen name="Welcome" component={WelcomeComponent} />
        <AppStack.Screen name="Main" component={Main} />
      </AppStack.Navigator>
    </>
  );
}
