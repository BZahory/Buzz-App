import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Center,
  Stack,
  VStack,
  Text,
  theme,
  useColorMode,
  NativeBaseProvider,
  HStack,
  Stagger,
  useDisclose,
  Pressable,
  extendTheme,
  useTheme,
  ScrollView,
  View,
} from "native-base";
import React from "react";
import HistoryScrollList from "../../../Atoms/HistoryScrollList";
import { PrimaryStackParamList } from "../../../Organisms/Main";
import { LinearGradient } from "expo-linear-gradient";
import { Alert, Dimensions, TouchableWithoutFeedback } from "react-native";
import ThemeSwitch from "../../../Atoms/ThemeSwitch";
import Donut from "../../../Atoms/Donut";
import SettingsList from "react-native-settings-list";
import { theme as appTheme } from "../../../../App";

type homeScreenProp = NativeStackNavigationProp<
  PrimaryStackParamList,
  "Transfer"
>;

export default function TransferComponent({ props }: any) {
  const navigation = useNavigation<homeScreenProp>();
  const { colorMode, toggleColorMode, setColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclose();

  let primaryColor: string, secondaryColor: string, bkgColor: string;

  if (colorMode === "light") {
    primaryColor = theme.colors["coolGray"]["800"];
    secondaryColor = theme.colors["primary"]["900"];
    bkgColor = "white";
  } else {
    primaryColor = theme.colors["coolGray"]["50"];
    secondaryColor = "#D97A07";
    bkgColor = theme.colors["coolGray"]["800"];
  }

  return (
    <>
      <View
        style={{ position: "absolute", left: Dimensions.get("window").width }}
      >
        <ThemeSwitch />
      </View>
      <Box
        safeAreaTop
        _light={{ bg: "primary.900" }}
        _dark={{ bg: "coolGray.900" }}
      />
      <ScrollView
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
        <VStack marginTop="5%" marginBottom="2.5%" alignItems="center">
          <Text
            _light={{ color: "coolGray.800" }}
            _dark={{ color: "coolGray.400" }}
            padding={15}
            style={{ fontSize: 20 }}
          >
            Money Invested
          </Text>
          <Donut
            showMax={true}
            appendedSymbolMax={"/"}
            appendedSymbolVal={"$"}
            value={7500}
            radius={100}
            strokeWidth={5}
            duration={500}
            color={secondaryColor}
            textColor={primaryColor}
            max={15000}
          />
        </VStack>

        <VStack marginY="2.5%" px="3">
          <Center>
            <HStack marginY="2.5%" space={"10%"}>
              {[
                {
                  name: "Transfer In",
                  action: Alert.alert,
                },
                {
                  name: "Transfer Out",
                  action: Alert.alert,
                },
              ].map((item, index) => (
                <TouchableWithoutFeedback
                  onPress={() =>
                    item.action("This screen hasn't been created yet")
                  }
                >
                  <Box
                    key={index}
                    bg={{
                      linearGradient: {
                        colors: ["#D97A07", "#F2A30F"],
                        start: [0, 0],
                        end: [0, 1],
                      },
                    }}
                    p="5"
                    w={"35%"}
                    rounded="xl"
                    _text={{
                      fontSize: "md",
                      fontWeight: "medium",
                      color: "warmGray.50",
                      textAlign: "center",
                    }}
                  >
                    {item.name}
                  </Box>
                </TouchableWithoutFeedback>
              ))}
            </HStack>
          </Center>

          <Box
            marginY="2.5%"
            _light={{ bg: "primary.900" }}
            _dark={{ bg: "coolGray.900" }}
            p="5"
            rounded="xl"
          >
            <HStack alignItems="center">
              <Donut
                showMax={false}
                value={16}
                radius={35}
                strokeWidth={5}
                duration={500}
                color={
                  colorMode === "dark" ? theme.colors["violet"]["500"] : "white"
                }
                textColor={primaryColor}
                max={30}
              />
              <Text
                marginLeft={3}
                style={{
                  flex: 1,
                  fontSize: 20,
                  color: primaryColor,
                  fontWeight: "600",
                  flexWrap: "wrap",
                }}
              >
                Days until autopayment of $100 is processed
              </Text>
            </HStack>
          </Box>
          <Box
            maxHeight={"100%"}
            marginY="2.5%"
            _light={{ bg: "primary.900" }}
            _dark={{ bg: "coolGray.900" }}
            p="5"
            rounded="xl"
          >
            {HistoryScrollList(primaryColor, bkgColor, isOpen)}
          </Box>
        </VStack>
      </ScrollView>
    </>
  );
}
