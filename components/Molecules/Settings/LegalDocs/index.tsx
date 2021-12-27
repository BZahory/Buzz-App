import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  NativeBaseProvider,
  Stack,
  theme,
  useColorMode,
  View,
} from "native-base";
import React from "react";
import SettingsList from "react-native-settings-list";
import createNavText from "../../../Atoms/createNavText";
import { SettingsStackParamList } from "../../../Organisms/Settings";

type homeScreenProp = NativeStackNavigationProp<
  SettingsStackParamList,
  "LegalDocs"
>;

export default function LegalDocs() {
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
        >
          <SettingsList.Item
            onPress={() => {}}
            icon={
              <View
                alignContent={"center"}
                marginLeft={1}
                justifyContent="center"
              >
                <MaterialCommunityIcons
                  color={primaryColor}
                  size={20}
                  name={"theme-light-dark"}
                />
              </View>
            }
            hasNavArrow={true}
            titleStyle={{ color: primaryColor, fontSize: 20 }}
            title="Mode"
            navIcon={createNavText(
              colorMode === "light" ? "Light" : "Dark",
              secondaryColor
            )}
          />
        </SettingsList>
      </Stack>
    </>
  );
}
