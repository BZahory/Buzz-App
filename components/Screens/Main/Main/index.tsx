import { Image, Text } from "react-native";
import React from "react";
import {
  NavigationContainer,
  StackActions,
  useNavigation,
  useNavigationBuilder,
} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";

import Onboarding from "react-native-onboarding-swiper";
import { flex, width, height } from "styled-system";
import { TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../../App";
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

import BrowseComponent from "../../../Organisms/Browse";
import TransferComponent from "../../../Organisms/Transfer";
import SettingsComponent from "../../../Organisms/Settings";
import OverviewComponent from "../../../Organisms/Overview";

type homeScreenProp = NativeStackNavigationProp<
  PrimaryStackParamList,
  "Overview"
>;

export type PrimaryStackParamList = {
  Overview: undefined;
  Browse: undefined;
  Transfer: undefined;
  Settings: undefined;
};

const TabsStack = createMaterialBottomTabNavigator<PrimaryStackParamList>();

export default function Main() {
  const navigation = useNavigation<homeScreenProp>();
  const { colorMode } = useColorMode();
  const { color } = useTheme();

  return (
    <TabsStack.Navigator
      barStyle={{
        backgroundColor:
          colorMode === "light"
            ? theme.colors["blueGray"]["50"]
            : theme.colors["blueGray"]["900"],
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color }) => {
          let iconName: any;

          if (route.name === "Overview") {
            iconName = "donut-large";
          } else if (route.name === "Browse") {
            iconName = "search";
          } else if (route.name === "Transfer") {
            iconName = "attach-money";
          } else if (route.name === "Settings") {
            iconName = "settings";
          }

          return (
            <MaterialIcons
              name={iconName}
              color={color}
              size={focused ? 24 : 28}
            />
          );
        },
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <TabsStack.Screen name="Overview" component={OverviewComponent} />
      <TabsStack.Screen name="Browse" component={BrowseComponent} />
      <TabsStack.Screen name="Transfer" component={TransferComponent} />
      <TabsStack.Screen name="Settings" component={SettingsComponent} />
    </TabsStack.Navigator>
  );
}
