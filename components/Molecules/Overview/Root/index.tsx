import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Center,
  Heading,
  ScrollView,
  Stack,
  View,
  VStack,
} from "native-base";
import React from "react";
import { Dimensions, FlatList } from "react-native";
import GraphAndSlider from "../../../Atoms/GraphAndSlider";
import Item from "../../../Atoms/Item";
import ThemeSwitch from "../../../Atoms/ThemeSwitch";
import VotingCarousel from "../../../Atoms/VotingCarousel";
import { OverviewStackParamList } from "../../../Organisms/Overview";

type homeScreenProp = NativeStackNavigationProp<OverviewStackParamList, "Root">;

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
    change: 1000,
    imgsrc:
      "https://pngset.com/images/ethereum-logo-9-image-ethereum-logo-triangle-rug-transparent-png-2844488.png",
  },
];

export default function OverviewComponent({ props }: any) {
  const [index, setIndex] = React.useState(0);

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
          {/* Was a NativeBase Box */}
          <ScrollView
            py={{ base: "6", md: "12" }}
            px={{ base: "4", md: "10" }}
            _light={{ bg: "white" }}
            _dark={{ bg: "coolGray.800" }}
            flex="1"
            borderTopRightRadius={{ md: "xl" }}
            borderBottomRightRadius={{ md: "xl" }}
          >
            <Box
              marginY="2.5%"
              _light={{ bg: "primary.900" }}
              _dark={{ bg: "coolGray.900" }}
              rounded="xl"
              alignContent="center"
              py="5%"
            >
              <Heading fontSize={36} marginY="2.5%" alignSelf="center">
                Active Votes
              </Heading>
              <VotingCarousel />
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
                initTest={2000}
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
              <Heading fontSize={36}>Your Portfolio</Heading>

              <FlatList
                style={{ width: "100%" }}
                initialNumToRender={5}
                scrollEnabled={false}
                data={data}
                renderItem={({ item }) => (
                  <Item
                    price={item.price}
                    change={item.change}
                    name={item.name}
                    abbrev={item.abbrev}
                    imgsrc={item.imgsrc}
                    navigation={navigation}
                    percent={50}
                    amount={500}
                  />
                )}
              />
            </Box>
          </ScrollView>
        </Stack>
      </Center>
    </>
  );
}
