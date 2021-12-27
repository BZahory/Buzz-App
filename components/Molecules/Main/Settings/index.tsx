import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Stack, Text, theme, useColorMode, View } from "native-base";
import React, { useEffect } from "react";
import {
  Appearance,
  DeviceEventEmitter,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Animated from "react-native-reanimated";
import SettingsList from "react-native-settings-list";
import BottomSheet from "reanimated-bottom-sheet";
import createNavText from "../../../Atoms/createNavText";
import openLink from "../../../Atoms/openLink";
import { SettingsStackParamList } from "../../../Organisms/Settings";

type settingsScreenProp = NativeStackNavigationProp<
  SettingsStackParamList,
  "Root"
>;

export default function SettingsComponent() {
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  const sheetRef = React.useRef<BottomSheet>(null);
  const navigation = useNavigation<settingsScreenProp>();

  //prevent memory leaks
  useEffect(() => {
    return () => {
      DeviceEventEmitter.removeAllListeners();
      sheetOpened = false;
    };
  }, []);

  const renderInner = () => (
    <View style={styles.panel}>
      <TouchableOpacity
        style={styles.panelButton}
        onPress={() => {
          DeviceEventEmitter.emit("event.colorChangeEvent", "dark");
          null !== sheetRef.current ? sheetRef.current.snapTo(1) : {};
        }}
      >
        <Text style={styles.panelButtonTitle}>Dark</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          DeviceEventEmitter.emit("event.colorChangeEvent", "light");
          null !== sheetRef.current ? sheetRef.current.snapTo(1) : {};
        }}
        style={styles.panelButton}
      >
        <Text style={styles.panelButtonTitle}>Light</Text>
      </TouchableOpacity>
      {/* Maybe implement using a AWS Lambda for various sunset groups */}
      {/* <TouchableOpacity style={styles.panelButton}>
        <Text style={styles.panelButtonTitle}>
          Time-Based (dark after sunset)
        </Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => {
          DeviceEventEmitter.emit(
            "event.colorChangeEvent",
            Appearance.getColorScheme()
          );
          null !== sheetRef.current ? sheetRef.current.snapTo(1) : {};
        }}
        style={styles.panelButton}
      >
        <Text style={styles.panelButtonTitle}>Match System Settings</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHeader = () => <View style={styles.header} />;

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2c2c2f",
    },
    box: {
      width: 200,
      height: 200,
    },
    panelContainer: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    panel: {
      padding: 20,
      backgroundColor: "#2c2c2fAA",
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 5,
      shadowOpacity: 0.4,
    },
    header: {
      width: "100%",
      height: 50,
    },
    panelHeader: {
      alignItems: "center",
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#00000040",
      marginBottom: 10,
    },
    panelTitle: {
      fontSize: 27,
      height: 35,
    },
    panelSubtitle: {
      fontSize: 14,
      color: "gray",
      height: 30,
      marginBottom: 10,
    },
    panelButton: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: "#292929",
      alignItems: "center",
      marginVertical: 10,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: "bold",
      color: "white",
    },
    photo: {
      width: "100%",
      height: 225,
      marginTop: 30,
    },
    map: {
      height: "100%",
      width: "100%",
    },
  });

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

  const fall = new Animated.Value(1);

  let sheetOpened: boolean = false;

  const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity);

  return (
    <>
      {/* Off screen view renders a ThemeSwitch so theme can be changed without a visible switch component */}

      {/* <View
        style={{ position: "absolute", left: Dimensions.get("window").width }}
      >
        <ThemeSwitch />
      </View> */}
      <Box
        safeAreaTop
        backgroundColor={colorMode === "dark" ? "coolGray.900" : "primary.900"}
        // Native base was brocken 🥺 as of writing this code, it kept using the _light color when dark mode was selected during onboarding
        // _light={{ bg: "primary.900" }}
        // _dark={{ bg: "coolGray.900" }}
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
        <AnimatedTouchable
          style={{
            opacity: Animated.add(0.1, Animated.multiply(fall, 0.9)),
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
              onPress={() => {
                // setColorMode(() => (colorMode === "light" ? "dark" : "light"));
                // Null guard gets TypeScript to stop bitching about possible null
                null !== sheetRef.current && !sheetOpened
                  ? sheetRef.current.snapTo(0)
                  : {};
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
            <SettingsList.Item
              hasNavArrow={false}
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
              onPress={() =>
                !sheetOpened ? navigation.navigate("AccountSecurity") : {}
              }
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
              onPress={() =>
                !sheetOpened ? navigation.navigate("History") : {}
              }
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
              title="History"
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
              onPress={() =>
                !sheetOpened ? navigation.navigate("Messages") : {}
              }
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
              title="Messages"
              navIcon={createNavText(String(0), secondaryColor)}
              titleStyle={{ color: primaryColor, fontSize: 20 }}
              hasNavArrow={true}
            />
            <SettingsList.Item
              onPress={() =>
                !sheetOpened ? openLink("buzzapp.dev", colorMode) : {}
              }
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
              onPress={() =>
                !sheetOpened ? navigation.navigate("Feedback") : {}
              }
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
              onPress={() =>
                !sheetOpened ? navigation.navigate("Contact") : {}
              }
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
            <SettingsList.Item
              onPress={() =>
                !sheetOpened ? openLink("buzzapp.dev", colorMode) : {}
              }
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
          </SettingsList>
        </AnimatedTouchable>
        <BottomSheet
          ref={sheetRef}
          snapPoints={["37%", 0]}
          callbackNode={fall}
          initialSnap={1}
          borderRadius={10}
          enabledInnerScrolling={false}
          renderContent={renderInner}
          renderHeader={renderHeader}
          onCloseEnd={() => {
            sheetOpened = false;
          }}
          onOpenStart={() => {
            sheetOpened = true;
          }}
        />
      </Stack>
    </>
  );
}
