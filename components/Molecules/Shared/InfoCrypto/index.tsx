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
};

const data: item[] = [
  {
    name: "Bitcoin",
    abbrev: "BTC",
    price: 20000,
    change: -20,
    imgsrc: "http://assets.stickpng.com/images/5a521fa72f93c7a8d5137fcf.png",
  },
  {
    name: "Ethereum",
    abbrev: "ETH",
    price: 10,
    change: -2000,
    imgsrc:
      "https://pngset.com/images/ethereum-logo-9-image-ethereum-logo-triangle-rug-transparent-png-2844488.png",
  },
];

export default function InfoCryptoComponent({ route, props }: any) {
  const [index, setIndex] = React.useState(0);
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
              <Image
                style={{ width: "30%", resizeMode: "contain", margin: 4 }}
                source={{
                  uri: route.params.imgsrc,
                }}
              />
              <View flex={2} alignItems="flex-start" justifyContent="center">
                <Heading>
                  {route.params.name} ({route.params.abbrev})
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
                index={index}
                setIndex={setIndex}
                initTest={38604}
              />
            </Box>
            <Box
              marginY="2.5%"
              _light={{ bg: "primary.900" }}
              _dark={{ bg: "coolGray.900" }}
              p="2.5"
              rounded="xl"
            >
              <Heading alignSelf="center">Market Data</Heading>
              <View flexDirection="row">
                <View alignItems="flex-start" flex={1}>
                  <Heading margin={2} fontSize={18}>
                    Market Cap
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    Transactions (24 hr)
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    Active Addresses
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    Total in Circulation / Total Possible
                  </Heading>
                </View>
                <View alignItems="flex-end" flex={1}>
                  <Heading margin={2} fontSize={18}>
                    ${Number(729672461780).toLocaleString()}
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    275,142
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    899,455
                  </Heading>
                  <Heading margin={2} fontSize={18}>
                    {Number(18946182).toLocaleString()} /
                    {Number(21000000).toLocaleString()}
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
