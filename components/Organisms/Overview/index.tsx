import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorMode } from "native-base";
import React from "react";
import InfoCryptoComponent from "../../Molecules/Shared/InfoCrypto";
import OverviewComponent from "../../Molecules/Overview/Root";

export type OverviewStackParamList = {
  Root: undefined;
  InfoCrypto: {
    price: number;
    change: number;
    name: string;
    abbrev: string;
    imgsrc: string;
  };
};

const OverviewStack = createNativeStackNavigator<OverviewStackParamList>();

export default function Overview() {
  return (
    <OverviewStack.Navigator screenOptions={{ headerShown: false }}>
      <OverviewStack.Screen name="Root" component={OverviewComponent} />
      <OverviewStack.Screen name="InfoCrypto" component={InfoCryptoComponent} />
    </OverviewStack.Navigator>
  );
}
