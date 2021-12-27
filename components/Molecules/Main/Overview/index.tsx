import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Box, Center, Stack, View, VStack } from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import ThemeSwitch from "../../../Atoms/ThemeSwitch";
import { PrimaryStackParamList } from "../../../Organisms/Main";

type homeScreenProp = NativeStackNavigationProp<
  PrimaryStackParamList,
  "Overview"
>;

export default function OverviewComponent({ props }: any) {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <>
      {/* Off screen view renders a ThemeSwitch so theme can be changed in settings without a visible switch component */}

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
      <Center
        my="auto"
        _dark={{ bg: "coolGray.900" }}
        _light={{ bg: "primary.900" }}
        flex="1"
      >
        <Stack
          flexDirection={{ base: "column", md: "row" }}
          w="100%"
          maxW={{ md: "1016px" }}
          flex={{ base: "1", md: "none" }}
        >
          <Box
            py={{ base: "6", md: "12" }}
            px={{ base: "4", md: "10" }}
            _light={{ bg: "white" }}
            _dark={{ bg: "coolGray.800" }}
            flex="1"
            borderTopRightRadius={{ md: "xl" }}
            borderBottomRightRadius={{ md: "xl" }}
          >
            <VStack justifyContent="space-between" flex="1" space="24"></VStack>
          </Box>
        </Stack>
      </Center>
    </>
  );
}
