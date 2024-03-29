import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useColorMode } from "native-base";
import React from "react";
import SettingsComponent from "../../Molecules/Settings/Root";
import AccountSecurity from "../../Molecules/Settings/AccountSecurity";
import Feedback from "../../Molecules/Settings/Feedback";
import LegalDocs from "../../Molecules/Settings/LegalDocs";
import Messages from "../../Molecules/Settings/Messages";
import History from "../../Molecules/Settings/History";
import ActiveDevices from "../../Molecules/Settings/ActiveDevices";

export type SettingsStackParamList = {
  AccountSecurity: undefined;
  History: undefined;
  Messages: undefined;
  Feedback: undefined;
  LegalDocs: undefined;
  ActiveDevices: undefined;
  Root: undefined;
};

const SettingsStack = createNativeStackNavigator<SettingsStackParamList>();

export default function Main() {
  return (
    <SettingsStack.Navigator screenOptions={{ headerShown: false }}>
      <SettingsStack.Screen name="Root" component={SettingsComponent} />
      <SettingsStack.Screen
        name="AccountSecurity"
        component={AccountSecurity}
      />
      <SettingsStack.Screen name="History" component={History} />
      <SettingsStack.Screen name="Messages" component={Messages} />
      <SettingsStack.Screen name="Feedback" component={Feedback} />
      <SettingsStack.Screen name="LegalDocs" component={LegalDocs} />
      <SettingsStack.Screen name="ActiveDevices" component={ActiveDevices} />
    </SettingsStack.Navigator>
  );
}
