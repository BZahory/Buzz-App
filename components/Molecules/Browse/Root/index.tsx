import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Center,
  FlatList,
  NativeBaseProvider,
  ScrollView,
  Stack,
  View,
  VStack,
  Text,
} from "native-base";
import React from "react";
import { Dimensions } from "react-native";
import PortfolioList from "../../../Atoms/PortfolioList";
import PortfolioListItem, {
  PortfolioBrowseItem,
} from "../../../Atoms/PortfolioList";
import ThemeSwitch from "../../../Atoms/ThemeSwitch";
import { PrimaryStackParamList } from "../../../Organisms/Main";

type homeScreenProp = NativeStackNavigationProp<
  PrimaryStackParamList,
  "Browse"
>;

export default function BrowseComponent({ props }: any) {
  const navigation = useNavigation<homeScreenProp>();
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
      <View
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
        <PortfolioList navigation={navigation} />
      </View>
    </>
  );
}
