import { MaterialIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { theme, useColorMode } from "native-base";
import React from "react";
import Browse from "../../Organisms/Browse";
import Overview from "../../Organisms/Overview";
import Settings from "../../Organisms/Settings";
import TransferComponent from "../../Molecules/Main/Transfer";

export type PrimaryStackParamList = {
  Overview: undefined;
  Browse: undefined;
  Transfer: undefined;
  Settings: undefined;
};

const TabsStack = createMaterialBottomTabNavigator<PrimaryStackParamList>();

export default function Main() {
  const { colorMode } = useColorMode();

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
              size={focused ? 20 : 22}
            />
          );
        },
      })}
    >
      <TabsStack.Screen name="Overview" component={Overview} />
      <TabsStack.Screen name="Browse" component={Browse} />
      <TabsStack.Screen name="Transfer" component={TransferComponent} />
      <TabsStack.Screen name="Settings" component={Settings} />
    </TabsStack.Navigator>
  );
}
