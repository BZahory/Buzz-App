import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Stack, theme, useColorMode, View } from "native-base";
import React from "react";
import HistoryScrollList from "../../../Atoms/HistoryScrollList";
import { SettingsStackParamList } from "../../../Organisms/Settings";

type homeScreenProp = NativeStackNavigationProp<
  SettingsStackParamList,
  "History"
>;

export default function History() {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

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
        <View flex={1}>{HistoryScrollList(primaryColor, bkgColor)}</View>
      </Stack>
    </>
  );
}
