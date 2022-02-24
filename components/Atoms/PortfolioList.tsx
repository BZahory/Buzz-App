import {
  Box,
  HStack,
  View,
  VStack,
  Spacer,
  FlatList,
  Stack,
  Heading,
  Center,
  AspectRatio,
  Text,
  Input,
  Icon,
} from "native-base";
import React from "react";
import { Alert, ListRenderItem } from "react-native";
import Donut from "./Donut";
import { MaterialIcons } from "@expo/vector-icons";
import numberWithCommas from "../Atoms/numberWithCommas";
import { TouchableOpacity } from "react-native-gesture-handler";

export type PortfolioBrowseItem = {
  key: string;
  title: string;
  riskLevel: number;
  numberOfInvestors: number;
  creationDate: Date;
  percentChangeOverLastMonth: number;
  verified: boolean;
  bio: string;
  creator: string;
};

const data: PortfolioBrowseItem[] = [
  {
    key: Math.random() + "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sample Portfolio A",
    riskLevel: -1,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 24, 2021"),
    percentChangeOverLastMonth: 1,
    verified: true,
    bio: "This portfolio primarily invests in memecoins.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + Math.random() + "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Sample Portfolio B",
    riskLevel: 3,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 24, 2019"),
    percentChangeOverLastMonth: -1,
    verified: true,
    bio: "This portfolio primarily invests in coins created in the past 3 years.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Sample Portfolio C",
    riskLevel: 2,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("March 12, 2012"),
    percentChangeOverLastMonth: -15,
    verified: true,
    bio: "This portfolio primarily invests on coins valued below $1 USD.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "68694a0f-3da1-431f-bd56-142371e29d72",
    title: "Sample Portfolio D",
    riskLevel: 0,
    numberOfInvestors: 50,
    creationDate: new Date("December 12, 2020"),
    percentChangeOverLastMonth: 10,
    verified: true,
    bio: "This portfolio primarily invests in Bitcoin.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "28694a0f-3da1-471f-bd96-142456e29d72",
    title: "Sample Portfolio E",
    riskLevel: 0,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 31, 2021"),
    percentChangeOverLastMonth: 1,
    verified: true,
    bio: "This portfolio primarily invests in stable coins. ",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sample Portfolio F",
    riskLevel: -1,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 24, 2021"),
    percentChangeOverLastMonth: 1,
    verified: true,
    bio: "This portfolio primarily invests in memecoins.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Sample Portfolio G",
    riskLevel: 3,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 24, 2019"),
    percentChangeOverLastMonth: -1,
    verified: true,
    bio: "This portfolio primarily invests in coins created in the past 3 years.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Sample Portfolio H",
    riskLevel: 0,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("March 12, 2012"),
    percentChangeOverLastMonth: -15,
    verified: true,
    bio: "This portfolio primarily invests on coins valued below $1 USD.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "68694a0f-3da1-431f-bd56-142371e29d72",
    title: "Sample Portfolio I",
    riskLevel: 1,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 12, 2020"),
    percentChangeOverLastMonth: 10,
    verified: true,
    bio: "This portfolio primarily invests in Bitcoin.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "28694a0f-3da1-471f-bd96-142456e29d72",
    title: "Sample Portfolio J",
    riskLevel: 2,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 31, 2021"),
    percentChangeOverLastMonth: 1,
    verified: true,
    bio: "This portfolio primarily invests in stable coins. This portfolio also doubles as a chance to test if ellipses are working",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sample Portfolio K",
    riskLevel: -1,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 24, 2021"),
    percentChangeOverLastMonth: 1,
    verified: true,
    bio: "This portfolio primarily invests in memecoins.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Sample Portfolio L",
    riskLevel: 3,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 24, 2019"),
    percentChangeOverLastMonth: -1,
    verified: true,
    bio: "This portfolio primarily invests in coins created in the past 3 years.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Sample Portfolio M",
    riskLevel: 2,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("March 12, 2012"),
    percentChangeOverLastMonth: -15,
    verified: true,
    bio: "This portfolio primarily invests on coins valued below $1 USD.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "68694a0f-3da1-431f-bd56-142371e29d72",
    title: "Sample Portfolio N",
    riskLevel: 1,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 12, 2020"),
    percentChangeOverLastMonth: 10,
    verified: true,
    bio: "This portfolio primarily invests in Bitcoin.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "28694a0f-3da1-471f-bd96-142456e29d72",
    title: "Sample Portfolio O",
    riskLevel: 0,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 31, 2021"),
    percentChangeOverLastMonth: 1,
    verified: true,
    bio: "This portfolio primarily invests in stable coins. This portfolio also doubles as a chance to test if ellipses are working",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sample Portfolio P",
    riskLevel: -1,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 24, 2021"),
    percentChangeOverLastMonth: 1,
    verified: true,
    bio: "This portfolio primarily invests in memecoins.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Sample Portfolio Q",
    riskLevel: 3,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 24, 2019"),
    percentChangeOverLastMonth: -1,
    verified: true,
    bio: "This portfolio primarily invests in coins created in the past 3 years.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Sample Portfolio R",
    riskLevel: 2,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("March 12, 2012"),
    percentChangeOverLastMonth: -15,
    verified: true,
    bio: "This portfolio primarily invests on coins valued below $1 USD.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "68694a0f-3da1-431f-bd56-142371e29d72",
    title: "Sample Portfolio S",
    riskLevel: 1,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 12, 2020"),
    percentChangeOverLastMonth: 10,
    verified: true,
    bio: "This portfolio primarily invests in Bitcoin.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "28694a0f-3da1-471f-bd96-142456e29d72",
    title: "Sample Portfolio T",
    riskLevel: 0,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 31, 2021"),
    percentChangeOverLastMonth: 1,
    verified: true,
    bio: "This portfolio primarily invests in stable coins. This portfolio also doubles as a chance to test if ellipses are working",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Sample Portfolio U",
    riskLevel: -1,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 24, 2021"),
    percentChangeOverLastMonth: 1,
    verified: true,
    bio: "This portfolio primarily invests in memecoins.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Sample Portfolio V",
    riskLevel: 3,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 24, 2019"),
    percentChangeOverLastMonth: -1,
    verified: true,
    bio: "This portfolio primarily invests in coins created in the past 3 years.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Sample Portfolio W",
    riskLevel: 2,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("March 12, 2012"),
    percentChangeOverLastMonth: -15,
    verified: true,
    bio: "This portfolio primarily invests on coins valued below $1 USD.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "68694a0f-3da1-431f-bd56-142371e29d72",
    title: "Sample Portfolio X",
    riskLevel: 1,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 12, 2020"),
    percentChangeOverLastMonth: 10,
    verified: true,
    bio: "This portfolio primarily invests in Bitcoin.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "28694a0f-3da1-471f-bd96-142456e29d72",
    title: "Sample Portfolio Y",
    riskLevel: 0,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 31, 2021"),
    percentChangeOverLastMonth: 1,
    verified: true,
    bio: "This portfolio primarily invests in stable coins. This portfolio also doubles as a chance to test if ellipses are working.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "28694a0f-3da1-471f-bd96-142456e29d72",
    title: "Sample Portfolio Z",
    riskLevel: 2,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 31, 2021"),
    percentChangeOverLastMonth: 1000,
    verified: true,
    bio: "This portfolio exclusively invests in Shiba Inu coin and Dogecoin.",
    creator: "Sample Creator",
  },
  {
    key: Math.random() + "28694a0f-3da1-471f-bd96-142456e29d72",
    title: "Sample Portfolio Buzz",
    riskLevel: 0,
    numberOfInvestors: Math.floor(Math.random() * 100 + 1),
    creationDate: new Date("December 31, 2021"),
    percentChangeOverLastMonth: 1000000,
    verified: true,
    bio: "This portfolio exclusively invests in Shiba Inu coin and Dogecoin. Owned by a dog.",
    creator: "Sample Creator",
  },
];

const riskText = (text: string, color: string) => {
  return (
    <Text
      fontSize="xs"
      // _light={{
      //   color: "violet.500",
      // }}
      // _dark={{
      //   color: "violet.400",
      // }}
      color={color}
      fontWeight="500"
    >
      {text}
    </Text>
  );
};

const riskLevel = (num: number) => {
  switch (num) {
    case 0:
      return riskText("Little Risk", "green.400");
    case 1:
      return riskText("Moderate Risk", "orange.400");
    case 2:
      return riskText("High Risk", "violet.400");
    case 3:
      return riskText("Very High Risk", "red.400");
    default:
      return riskText("Unknown Risk", "gray.400");
  }
};

const currentDate = new Date();

const timeSince = (date: Date) => {
  if (typeof date !== "object") {
    date = new Date(date);
  }

  var seconds = Math.floor((currentDate.getTime() - date.getTime()) / 1000);
  var intervalType;

  var interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = "year";
  } else {
    interval = Math.floor(seconds / 2592000);
    if (interval >= 1) {
      intervalType = "month";
    } else {
      interval = Math.floor(seconds / 86400);
      if (interval >= 1) {
        intervalType = "day";
      } else {
        interval = Math.floor(seconds / 3600);
        if (interval >= 1) {
          intervalType = "hour";
        } else {
          interval = Math.floor(seconds / 60);
          if (interval >= 1) {
            intervalType = "minute";
          } else {
            interval = seconds;
            intervalType = "second";
          }
        }
      }
    }
  }

  if (interval > 1 || interval === 0) {
    intervalType += "s";
  }

  return interval + " " + intervalType;
};

function SearchBar() {
  return (
    <View opacity={0.9}>
      <Input
        borderColor="transparent"
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          backgroundColor: "gray.700",
        }}
        placeholder="Search Portfolios"
        width="90%"
        borderRadius="10"
        margin="5%"
        py="3"
        px="1"
        fontSize="14"
        InputLeftElement={
          <Icon
            m="2"
            ml="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="search" />}
          />
        }
        InputRightElement={
          <Icon
            onPress={() => {
              Alert.alert("This also still needs a backend lol");
            }}
            m="2"
            mr="3"
            size="6"
            color="gray.400"
            as={<MaterialIcons name="filter-list" />}
          />
        }
      />
    </View>
  );
}

function PortfolioListItem({
  item,
  navigation,
}: {
  item: PortfolioBrowseItem;
  navigation: any;
}) {
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("InfoPortfolio", {
          price: 5,
          change: 5,
          name: "Sample Portfolio D",
          abbrev: "SPD",
          imgsrc: "account-group-outline",
        })
      }
    >
      <Box
        alignSelf="center"
        margin="4"
        maxW="100%"
        minW="80%"
        rounded="lg"
        overflow="hidden"
        borderColor="coolGray.200"
        borderWidth="1"
        _light={{
          backgroundColor: "gray.50",
        }}
        _dark={{
          borderColor: "coolGray.600",
          backgroundColor: "gray.700",
        }}
        _web={{
          shadow: 2,
          borderWidth: 0,
        }}
      >
        <Stack p="4" space={3}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
            }}
          >
            <Stack flex={2}>
              <Heading size="md">{item.title}</Heading>
              {riskLevel(item.riskLevel)}

              <Text
                _light={{ color: "coolGray.600" }}
                _dark={{
                  color: "warmGray.200",
                }}
                fontWeight="400"
              >
                Created {timeSince(item.creationDate)} ago by{" "}
                <Text
                  // _light={{
                  //   color: "light.900",
                  // }}
                  // _dark={{
                  //   color: "dark.900",
                  // }}
                  color="#D97A07"
                >
                  {item.creator}
                </Text>
              </Text>

              <Text
                numberOfLines={3}
                fontWeight="500"
                paddingY={5}
                marginBottom={1}
              >
                {item.bio}
              </Text>
            </Stack>
            <View
              style={{
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
              }}
            >
              <Center>
                <Heading
                  numberOfLines={1}
                  adjustsFontSizeToFit
                  style={{
                    color:
                      item.percentChangeOverLastMonth > 0 ? "green" : "red",
                  }}
                >
                  {numberWithCommas(item.percentChangeOverLastMonth) + "%"}
                </Heading>
                <Text textAlign={"center"}>
                  Gain over
                  {"\n"}last month
                </Text>
                <Heading numberOfLines={1} adjustsFontSizeToFit>
                  {numberWithCommas(item.numberOfInvestors)}
                </Heading>
                <Text textAlign={"center"}>
                  Current
                  {"\n"}Investors
                </Text>
              </Center>
            </View>
          </View>
        </Stack>
      </Box>
    </TouchableOpacity>
  );
}

export default function PortfolioList({ navigation }: { navigation: any }) {
  return (
    <FlatList
      initialNumToRender={5}
      stickyHeaderIndices={[0]}
      ListHeaderComponent={SearchBar}
      data={data}
      renderItem={({ item }: { item: PortfolioBrowseItem }) => (
        <PortfolioListItem item={item} navigation={navigation} />
      )}
    />
  );
}
