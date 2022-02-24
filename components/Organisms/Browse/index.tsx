import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorMode } from "native-base";
import React from "react";
import InfoPortfolioComponent from "../../Molecules/Shared/InfoPortfolio";
import BrowseComponent from "../../Molecules/Browse/Root";
import InfoCryptoComponent from "../../Molecules/Shared/InfoCrypto";

export type BrowseStackParamList = {
  Root: undefined;
  InfoPortfolio: {
    price: number;
    change: number;
    name: string;
    abbrev: string;
    imgsrc: string;
  };
  InfoCrypto: {
    price: number;
    change: number;
    name: string;
    abbrev: string;
    imgsrc: string;
  };
};

const BrowseStack = createNativeStackNavigator<BrowseStackParamList>();

export default function Browse() {
  return (
    <BrowseStack.Navigator screenOptions={{ headerShown: false }}>
      <BrowseStack.Screen name="Root" component={BrowseComponent} />
      <BrowseStack.Screen
        name="InfoPortfolio"
        component={InfoPortfolioComponent}
      />
      <BrowseStack.Screen name="InfoCrypto" component={InfoCryptoComponent} />
    </BrowseStack.Navigator>
  );
}
