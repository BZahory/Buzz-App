import React from "react";
import {
  NavigationContainer,
  StackActions,
  useNavigation,
  useNavigationBuilder,
} from "@react-navigation/native";

import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import {
  Box,
  Center,
  Stack,
  View,
  Text,
  useColorMode,
  theme,
} from "native-base";
import { PrimaryStackParamList } from "../../../Organisms/Main";

import SettingsList from "react-native-settings-list";
import ThemeSwitch from "../../../Atoms/ThemeSwitch";

type homeScreenProp = NativeStackNavigationProp<
  PrimaryStackParamList,
  "Settings"
>;

const AppStack = createNativeStackNavigator<PrimaryStackParamList>();

export default function SettingsComponent({ props }: any) {
  const navigation = useNavigation<homeScreenProp>();
  const { colorMode } = useColorMode();

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

  const createNavText = (text: string) => {
    return (
      <Text marginRight={1} color={secondaryColor}>
        {text}
      </Text>
    );
  };

  return (
    <>
      <Box
        safeAreaTop
        _light={{ bg: "primary.900" }}
        _dark={{ bg: "coolGray.900" }}
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
        <View
          style={{
            backgroundColor: bkgColor,
            flex: 1,
          }}
        >
          <SettingsList
            backgroundColor={bkgColor}
            borderColor={bkgColor}
            defaultItemSize={60}
          >
            <SettingsList.Item
              hasNavArrow={false}
              title="Theme"
              titleStyle={{
                marginLeft: 24,
                color: primaryColor,
                fontWeight: "bold",
                fontSize: 25,
              }}
              borderHide={"Top"}
            />
            <SettingsList.Item
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
              navIcon={
                // <View marginRight={1}>
                //   <ThemeSwitch />
                // </View>
                createNavText(colorMode === "light" ? "Light" : "Dark")
              }
            />
            <SettingsList.Item
              hasNavArrow={true}
              title="Account"
              titleStyle={{
                marginLeft: 24,
                color: primaryColor,
                fontWeight: "bold",
                fontSize: 25,
              }}
              borderHide={"Top"}
            />
            <SettingsList.Item
              icon={
                <View
                  alignContent={"center"}
                  marginLeft={1}
                  justifyContent="center"
                >
                  <MaterialIcons
                    color={primaryColor}
                    size={20}
                    name={"security"}
                  />
                </View>
              }
              hasNavArrow={true}
              titleStyle={{ color: primaryColor, fontSize: 20 }}
              title="Account Security"
            />
            <SettingsList.Item
              icon={
                <View
                  alignContent={"center"}
                  marginLeft={1}
                  justifyContent="center"
                >
                  <MaterialIcons
                    color={primaryColor}
                    size={20}
                    name={"swap-horiz"}
                  />
                </View>
              }
              title="Trading History"
              titleStyle={{ color: primaryColor, fontSize: 20 }}
              hasNavArrow={true}
            />
            <SettingsList.Item
              icon={
                <View
                  alignContent={"center"}
                  marginLeft={1}
                  justifyContent="center"
                >
                  <MaterialCommunityIcons
                    color={primaryColor}
                    size={20}
                    name={"bank-transfer"}
                  />
                </View>
              }
              title="Transfer History"
              titleStyle={{ color: primaryColor, fontSize: 20 }}
              hasNavArrow={true}
            />
            <SettingsList.Item
              hasNavArrow={false}
              title="Help and Support"
              titleStyle={{
                marginLeft: 24,
                color: primaryColor,
                fontWeight: "bold",
                fontSize: 25,
              }}
              borderHide={"Top"}
            />
            <SettingsList.Item
              icon={
                <View
                  alignContent={"center"}
                  marginLeft={1}
                  justifyContent="center"
                >
                  <MaterialCommunityIcons
                    color={primaryColor}
                    size={20}
                    name={"message-minus-outline"}
                  />
                </View>
              }
              title="Inquires and Messages"
              navIcon={createNavText(String(0))}
              titleStyle={{ color: primaryColor, fontSize: 20 }}
              hasNavArrow={true}
            />
            <SettingsList.Item
              icon={
                <View
                  alignContent={"center"}
                  marginLeft={1}
                  justifyContent="center"
                >
                  <MaterialCommunityIcons
                    color={primaryColor}
                    size={20}
                    name={"forum-outline"}
                  />
                </View>
              }
              title="Forums"
              titleStyle={{ color: primaryColor, fontSize: 20 }}
              hasNavArrow={true}
            />
            <SettingsList.Item
              icon={
                <View
                  alignContent={"center"}
                  marginLeft={1}
                  justifyContent="center"
                >
                  <MaterialCommunityIcons
                    color={primaryColor}
                    size={20}
                    name={"file-document-outline"}
                  />
                </View>
              }
              title="Legal Documents and Disclosures"
              titleStyle={{ color: primaryColor, fontSize: 20 }}
              hasNavArrow={true}
            />
            <SettingsList.Item
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
                    name={"message-minus-outline"}
                  />
                </View>
              }
              title="Feedback"
              titleStyle={{ color: primaryColor, fontSize: 20 }}
              hasNavArrow={true}
            />
            <SettingsList.Item
              icon={
                <View
                  alignContent={"center"}
                  marginLeft={1}
                  justifyContent="center"
                >
                  <MaterialCommunityIcons
                    color={primaryColor}
                    size={20}
                    name={"message-text-clock-outline"}
                  />
                </View>
              }
              title="Contact Us"
              titleStyle={{ color: primaryColor, fontSize: 20 }}
              hasNavArrow={true}
            />
          </SettingsList>
        </View>
      </Stack>
    </>
  );
}
