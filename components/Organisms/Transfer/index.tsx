import { Image, Text } from "react-native";
import React from "react";
import {
  NavigationContainer,
  StackActions,
  useNavigation,
  useNavigationBuilder,
} from "@react-navigation/native";

import Onboarding from "react-native-onboarding-swiper";
import { flex, width, height } from "styled-system";
import { TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../../App";
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from "@react-navigation/native-stack";
import { Box, Center, Stack, VStack } from "native-base";
import { PrimaryStackParamList } from "../../Screens/Main/Main";

type homeScreenProp = NativeStackNavigationProp<
  PrimaryStackParamList,
  "Transfer"
>;

const AppStack = createNativeStackNavigator<PrimaryStackParamList>();

export default function TransferComponent({ props }: any) {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <>
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
