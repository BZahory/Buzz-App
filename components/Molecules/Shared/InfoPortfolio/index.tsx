import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  Center,
  Heading,
  ScrollView,
  Stack,
  View,
  VStack,
  Text,
  theme,
  useColorMode,
} from "native-base";
import React, { useState } from "react";
import { Dimensions, FlatList, Image } from "react-native";
import GraphAndSlider from "../../../Atoms/GraphAndSlider";
import Item from "../../../Atoms/Item";
import ThemeSwitch from "../../../Atoms/ThemeSwitch";
import { PrimaryStackParamList } from "../../../Organisms/Main";

type item = {
  price: number;
  change: number;
  name: string;
  abbrev: string;
  imgsrc: string;
  amount: number;
  percent: number;
};

{
  /* TODO: Replace with proper API call(s) */
}

const data: item[] = [
  {
    name: "Bitcoin",
    abbrev: "BTC",
    price: 38425,
    change: 1,
    imgsrc: "http://assets.stickpng.com/images/5a521fa72f93c7a8d5137fcf.png",
    amount: 0.50102,
    percent: 96,
  },
  {
    name: "Ethereum",
    abbrev: "ETH",
    price: 26432,
    change: 0.5,
    imgsrc:
      "https://pngset.com/images/ethereum-logo-9-image-ethereum-logo-triangle-rug-transparent-png-2844488.png",
    amount: 0.3001,
    percent: 4,
  },
];

export default function InfoPortfolioComponent({ navigation, route }) {
  const [index, setIndex] = React.useState(0);
  const thumbTextArray = ["1D", "1W", "1M", "3M", "6M", "1Y", "All"];

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
          {/* Was a NativeBase Box */}
          <ScrollView
            py={{ base: "6", md: "12" }}
            px={{ base: "4", md: "10" }}
            _light={{ bg: "white" }}
            _dark={{ bg: "coolGray.800" }}
            borderTopRightRadius={{ md: "xl" }}
            borderBottomRightRadius={{ md: "xl" }}
          >
            <Box
              height="10%"
              alignSelf="center"
              marginY="2.5%"
              p="2.5"
              margin="2"
              w="100%"
              rounded="xl"
              overflow="hidden"
              // borderColor="coolGray.200"
              // borderWidth="1"
              _light={{ bg: "primary.900" }}
              _dark={{ bg: "coolGray.900" }}
              flexDirection="row"
            >
              {/* <Image
                style={{ width: "30%", resizeMode: "contain", margin: 4 }}
                source={{
                  uri: route.params.imgsrc,
                }}
              /> */}
              <View
                alignContent={"center"}
                margin={1}
                marginRight={5}
                justifyContent="center"
              >
                <MaterialCommunityIcons
                  color={primaryColor}
                  size={32}
                  name={route.params.imgsrc}
                />
              </View>
              <View flex={2} alignItems="flex-start" justifyContent="center">
                <Heading>
                  {route.params.name} (/{route.params.abbrev})
                </Heading>
              </View>
              {/* <Heading flex={1} alignSelf="center" justifyContent="center">
                ${route.params.price.toLocaleString()}
              </Heading> */}
            </Box>
            <Box
              marginY="2.5%"
              _light={{ bg: "primary.900" }}
              _dark={{ bg: "coolGray.900" }}
              p="2.5"
              rounded="xl"
            >
              <GraphAndSlider
                initTest={20000}
                index={index}
                setIndex={setIndex}
              />
            </Box>

            <Box
              marginY="2.5%"
              _light={{ bg: "primary.900" }}
              _dark={{ bg: "coolGray.900" }}
              p="2.5"
              rounded="xl"
              alignItems="center"
            >
              <Heading fontSize={36}>Portfolio Split</Heading>

              <FlatList
                style={{ width: "100%" }}
                initialNumToRender={5}
                scrollEnabled={false}
                data={data}
                renderItem={({ item }) => (
                  <Item
                    amount={item.amount}
                    percent={item.percent}
                    price={item.price}
                    change={item.change}
                    name={item.name}
                    abbrev={item.abbrev}
                    imgsrc={item.imgsrc}
                    navigation={navigation}
                  />
                )}
              />
            </Box>
            <Box
              marginY="2.5%"
              _light={{ bg: "primary.900" }}
              _dark={{ bg: "coolGray.900" }}
              p="2.5"
              rounded="xl"
            >
              <Heading alignSelf="center">Portfolio Data</Heading>
              <View flexDirection="row">
                <View alignItems="flex-start" flex={1}>
                  <Heading margin={2} fontSize={18}>
                    Total invested ({thumbTextArray[index]})
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    Risk Level
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    Total investors
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    Portfolio owner
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    Amount invested by portfolio owner
                  </Heading>
                </View>
                <View alignItems="flex-end" flex={1}>
                  <Heading margin={2} fontSize={18}>
                    ${Number(20000).toLocaleString()}
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    Little
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    50
                  </Heading>
                  <Heading margin={2} color="#D97A07" fontSize={18}>
                    Sample Creator
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    ${Number(1400).toLocaleString()}
                  </Heading>
                </View>
              </View>
            </Box>
            <View height={Dimensions.get("screen").height / 5}></View>
          </ScrollView>
          {
            <Button
              position="absolute"
              alignSelf="center"
              bottom="5%"
              maxHeight="10%"
              size="80%"
              borderRadius="full"
              bgColor="#D97A07"
              opacity={0.9}
            >
              Trade
            </Button>
          }
        </Stack>
      </Center>
    </>
  );
}
