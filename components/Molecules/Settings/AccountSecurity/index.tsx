import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Stack, Switch, theme, useColorMode, View } from "native-base";
import React, { useEffect } from "react";
import SettingsList from "react-native-settings-list";
import openLink from "../../../Atoms/openLink";
import { SettingsStackParamList } from "../../../Organisms/Settings";
import * as LocalAuthentication from "expo-local-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";

type homeScreenProp = NativeStackNavigationProp<
  SettingsStackParamList,
  "AccountSecurity"
>;

export default function AccountSecurity() {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

  const navigation = useNavigation<homeScreenProp>();

  let primaryColor: string, secondaryColor: string, bkgColor: string;

  if (colorMode === "light") {
    primaryColor = theme.colors["coolGray"]["800"];
    secondaryColor = theme.colors["primary"]["900"];
    bkgColor = "white";
  } else {
    primaryColor = theme.colors["coolGray"]["50"];
    secondaryColor = theme.colors["violet"]["500"];
    bkgColor = theme.colors["coolGray"]["800"];
  }

  return (
    <>
      <Box
        safeAreaTop
        backgroundColor={colorMode === "dark" ? "coolGray.900" : "primary.900"}
      />
      <Stack
        flexDirection={{ base: "column", md: "row" }}
        w="100%"
        maxW={{ md: "1016px" }}
        flex={{ base: "1", md: "none" }}
        py={{ base: "0", md: "12" }}
        px={{ base: "0", md: "10" }}
        _light={{ bg: "white" }}
        _dark={{ bg: "coolGray.800" }}
        borderTopRightRadius={{ md: "xl" }}
        borderBottomRightRadius={{ md: "xl" }}
      >
        <SettingsList
          backgroundColor={bkgColor}
          borderColor={bkgColor}
          defaultItemSize={60}
        ></SettingsList>
      </Stack>
    </>
  );
}
