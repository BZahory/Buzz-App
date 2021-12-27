import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Stack, theme, useColorMode, View } from "native-base";
import React, { useEffect } from "react";
import SettingsList from "react-native-settings-list";
import openLink from "../../../Atoms/openLink";
import { SettingsStackParamList } from "../../../Organisms/Settings";
import * as LocalAuthentication from "expo-local-authentication";

type homeScreenProp = NativeStackNavigationProp<
  SettingsStackParamList,
  "AccountSecurity"
>;

// wherever the useState is located
const [isBiometricSupported, setIsBiometricSupported] = React.useState(false);

// Check if hardware supports biometrics
useEffect(() => {
  (async () => {
    const compatible = await LocalAuthentication.hasHardwareAsync();
    setIsBiometricSupported(compatible);
  })();
});

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
        >
          {/* header */}
          <SettingsList.Item
            hasNavArrow={false}
            title="Sign In"
            titleStyle={{
              marginLeft: 24,
              color: primaryColor,
              fontWeight: "bold",
              fontSize: 25,
            }}
            borderHide={"Top"}
          />
          <SettingsList.Item
            onPress={() => {
              // setColorMode(() => (colorMode === "light" ? "dark" : "light"));
              // Null guard gets TypeScript to stop bitching about possible null
            }}
            icon={
              <View
                alignContent={"center"}
                marginLeft={1}
                justifyContent="center"
              >
                <MaterialIcons
                  color={primaryColor}
                  size={20}
                  name={"vpn-key"}
                />
              </View>
            }
            hasNavArrow={true}
            titleStyle={{ color: primaryColor, fontSize: 20 }}
            title="Change Password"
          />
          {/* <SettingsList.Item
            onPress={() => {
              // setColorMode(() => (colorMode === "light" ? "dark" : "light"));
              // Null guard gets TypeScript to stop bitching about possible null
            }}
            icon={
              <View
                alignContent={"center"}
                marginLeft={1}
                justifyContent="center"
              >
                <MaterialCommunityIcons
                  color={primaryColor}
                  size={20}
                  name={"folder-key-network-outline"}
                />
              </View>
            }
            hasNavArrow={true}
            titleStyle={{ color: primaryColor, fontSize: 20 }}
            title="Two Factor Authentication"
          /> */}
          if(1==1)
          {
            <SettingsList.Item
              onPress={() => {
                // setColorMode(() => (colorMode === "light" ? "dark" : "light"));
                // Null guard gets TypeScript to stop bitching about possible null
              }}
              icon={
                <View
                  alignContent={"center"}
                  marginLeft={1}
                  justifyContent="center"
                >
                  <MaterialIcons color={primaryColor} size={20} name={"face"} />
                </View>
              }
              hasNavArrow={true}
              titleStyle={{ color: primaryColor, fontSize: 20 }}
              title="Face ID"
            />
          }
          <SettingsList.Item
            onPress={() => {
              navigation.navigate("ActiveDevices");
            }}
            icon={
              <View
                alignContent={"center"}
                marginLeft={1}
                justifyContent="center"
              >
                <MaterialIcons
                  color={primaryColor}
                  size={20}
                  name={"devices"}
                />
              </View>
            }
            hasNavArrow={true}
            titleStyle={{ color: primaryColor, fontSize: 20 }}
            title="Active Sign Ins"
          />
          {/* header */}
          <SettingsList.Item
            hasNavArrow={false}
            title="Information"
            titleStyle={{
              marginLeft: 24,
              color: primaryColor,
              fontWeight: "bold",
              fontSize: 25,
            }}
            borderHide={"Top"}
          />
          <SettingsList.Item
            onPress={() => {
              openLink("buzzapp.dev", colorMode);
            }}
            icon={
              <View
                alignContent={"center"}
                marginLeft={1}
                justifyContent="center"
              >
                <MaterialCommunityIcons
                  color={primaryColor}
                  size={20}
                  name={"shield-half-full"}
                />
              </View>
            }
            hasNavArrow={true}
            titleStyle={{ color: primaryColor, fontSize: 20 }}
            title="How You Can Protect Your Account"
          />
          <SettingsList.Item
            onPress={() => openLink("buzzapp.dev", colorMode)}
            icon={
              <View
                alignContent={"center"}
                marginLeft={1}
                justifyContent="center"
              >
                <MaterialCommunityIcons
                  style={{ transform: [{ rotateY: "180deg" }] }}
                  color={primaryColor}
                  size={20}
                  name={"shield-half-full"}
                />
              </View>
            }
            hasNavArrow={true}
            titleStyle={{ color: primaryColor, fontSize: 20 }}
            title="How We Protect Your Account"
          />
        </SettingsList>
      </Stack>
    </>
  );
}
