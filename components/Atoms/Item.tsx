import React from "react";
import { Box, Heading, HStack, Text, View } from "native-base";
import { Image } from "react-native";
import { styles } from "styled-system";
import { TouchableOpacity } from "react-native-gesture-handler";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { PrimaryStackParamList } from "../Organisms/Main";
import { useNavigation } from "@react-navigation/native";

type homeScreenProp = NativeStackNavigationProp<
  PrimaryStackParamList,
  "Overview"
>;

export default function Item({
  amount,
  percent,
  price,
  change,
  name,
  abbrev,
  imgsrc,
  navigation,
}: {
  amount: number;
  percent?: number;
  price: number;
  change?: number;
  name: string;
  abbrev: string;
  imgsrc: string;
  navigation: any;
}) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("InfoCrypto", {
          price: price,
          change: change,
          name: name,
          abbrev: abbrev,
          imgsrc: imgsrc,
        });
      }}
    >
      <Box
        alignSelf="center"
        margin="2"
        w="100%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          borderColor: "transparent",
          backgroundColor: "gray.700",
        }}
        flexDirection="row"
      >
        <Image
          style={{ width: "10%", resizeMode: "contain", margin: 4 }}
          source={{
            uri: imgsrc,
          }}
        />
        <View flex={2} alignItems="flex-start" justifyContent="center">
          <Heading>
            {amount} {percent ? "(" + percent + "%)" : ""}
          </Heading>
          <Text color="#a1a1aa">
            of {name} ({abbrev})
          </Text>
        </View>
        {change && (
          <View flex={1} alignItems="center" justifyContent="center">
            <Heading>${price.toLocaleString()}</Heading>
            {change > 0 ? (
              <Text color="green.500">{change}%</Text>
            ) : (
              <Text color="red.500">{change}%</Text>
            )}
          </View>
        )}
      </Box>
    </TouchableOpacity>
  );
}
