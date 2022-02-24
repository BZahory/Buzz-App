import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Hidden,
  NativeBaseProvider,
  Stack,
  theme,
  useColorMode,
  View,
  VStack,
  Text,
  useColorModeValue,
  HStack,
  Link,
  Button,
  IconButton,
  Icon,
  TextArea,
  FormControl,
  KeyboardAvoidingView,
  ScrollView,
} from "native-base";
import React, { useRef, useState } from "react";
import { Alert, Dimensions, Keyboard, Linking } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import SettingsList from "react-native-settings-list";
import Entypo from "react-native-vector-icons/Entypo";
import createNavText from "../../../Atoms/createNavText";
import { SettingsStackParamList } from "../../../Organisms/Settings";
import FloatingLabelInput from "../../PreMain/SignIn/components/FloatingLabelInput";
import { useSwipe } from "../../../Atoms/useSwipe";
import Animated, { Easing, EasingNode } from "react-native-reanimated";

type homeScreenProp = NativeStackNavigationProp<
  SettingsStackParamList,
  "Feedback"
>;

export default function Feedback() {
  const accNum = String("00000");
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  const navigation = useNavigation<homeScreenProp>();
  const [formData, setData] = useState("");
  const { onTouchStart, onTouchEnd } = useSwipe(onSwipeUp, onSwipeDown, 6);
  const translation = useRef(new Animated.Value(0)).current;

  function onSwipeDown() {
    Keyboard.dismiss();
  }
  function onSwipeUp() {
    Keyboard.dismiss();
    Animated.timing(translation, {
      easing: EasingNode.cubic,
      toValue: -1 * Dimensions.get("window").height,
      duration: 300,
    }).start(() => {
      try {
        Linking.openURL(
          "mailto:bzahory@gmail.com?subject=" +
            "0.1.0 Feedback" +
            "&body=" +
            formData
        );
        setData("");
        navigation.navigate("Root");
      } catch (error) {
        Alert.alert(error.message);
      }
    });
    //start()'s parameter is a callback function
  }

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

  const AnimatedFormControl = Animated.createAnimatedComponent(FormControl);

  return (
    <>
      <Box
        safeAreaTop
        backgroundColor={colorMode === "dark" ? "coolGray.900" : "primary.900"}
      />
      <ScrollView
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        style={{
          flex: 1,
          flexGrow: 1,
          height: "100%",
          width: Dimensions.get("window").width,
        }}
        _light={{ bg: "white" }}
        _dark={{ bg: "coolGray.800" }}
        contentContainerStyle={{ flex: 1 }}
      >
        <Animated.View
          style={{
            height: Dimensions.get("window").height / 1.5,
            margin: 0,
            padding: 0,
            transform: [{ translateY: translation }],
            top: Dimensions.get("window").height / 4,
            position: "absolute",
            width: "100%",
            borderTopRightRadius: 40,
            borderTopLeftRadius: 40,
            backgroundColor:
              colorMode === "dark"
                ? theme.colors["coolGray"]["900"]
                : theme.colors["primary"]["900"],
            alignItems: "center",
          }}
        >
          <FormControl.Label
            margin={5}
            _text={{ fontSize: 25, fontWeight: "bold", color: primaryColor }}
          >
            Feedback
          </FormControl.Label>
          <TextArea
            autoFocus
            defaultValue={formData}
            onChangeText={(value) => setData(value)}
            h={40}
            placeholder="Swipe up to submit."
            w={{
              base: "90%",
              md: "25%",
            }}
            _dark={{
              borderColor: "coolGray.700",
            }}
            _light={{
              borderColor: "coolGray.300",
            }}
          />
        </Animated.View>
        {/* Opening Link Tag navigateTo:"OTP" (react/Router) */}
      </ScrollView>
    </>
  );
}
