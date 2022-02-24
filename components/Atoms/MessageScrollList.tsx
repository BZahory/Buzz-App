import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Box,
  Button,
  HStack,
  Pressable,
  ScrollView,
  Spacer,
  Text,
  useColorMode,
  useContrastText,
} from "native-base";
import React, { useState } from "react";
import SettingsList from "react-native-settings-list";
import { SettingsStackParamList } from "../Organisms/Settings";
import openLink from "./openLink";

export type Message = {
  key: string;
  category: "Tax Form" | "Inquiry" | "Transfer";
  date: Date;
  title: string;
  message: string;
  docLink: string | undefined;
};

//replace with DB API calls via axios
//assumes JSON are fed in reverse order of date (use time-based DB)
const messages: { [key: string]: Message } = {
  a: {
    key: "womp",
    category: "Tax Form",
    date: new Date("December 11, 2021"),
    title: "Your 1099-k is ready",
    message: "We are required to issue this form to all high volume traders.",
    docLink: "bundle-assets://Form 1099-K.pdf",
  },
  b: {
    key: "womped",
    category: "Transfer",
    date: new Date("June 11, 2021"),
    title: "Withdrawal complete",
    message:
      "The funds should appear in your bank account within 5 business days.",
    docLink: undefined,
  },
  c: {
    key: "womping",
    category: "Inquiry",
    date: new Date("December 11, 2020"),
    title: "More information is required for your support ticket",
    message: "",
    docLink: "buzzapp.dev",
  },
  d: {
    key: "wompn't",
    category: "Transfer",
    date: new Date("January 24, 2020"),
    title: "Withdrawal complete",
    message:
      "Your transfer of $100 has been completed, and should arrive in your ",
    docLink: undefined,
  },
  e: {
    key: "wompn'tj",
    category: "Transfer",
    date: new Date("January 24, 2020"),
    title: "Withdrawal completed",
    message:
      "Your transfer of $100 has been completed, and is now available for use.",
    docLink: undefined,
  },
};

export default function MessageScrollList() {
  type settingsScreenProp = NativeStackNavigationProp<
    SettingsStackParamList,
    "Messages"
  >;

  //true values are to be shown
  const [filter, setFilter] = useState({
    "Tax Form": true as boolean,
    Inquiry: true as boolean,
    Transfer: true as boolean,
  });

  const { colorMode } = useColorMode();

  const navigation = useNavigation<settingsScreenProp>();

  return (
    <>
      <Button.Group
        margin={2.5}
        mx={{
          base: "auto",
          md: 0,
        }}
        size="lg"
      >
        <Button
          _dark={{
            bg: filter["Tax Form"] ? "primary.900" : "primary.700",
          }}
          _light={{
            bg: filter["Tax Form"] ? "primary.700" : "primary.500",
          }}
          onPress={() =>
            setFilter((prevState) => ({
              "Tax Form": !prevState["Tax Form"],
              Inquiry: prevState["Inquiry"],
              Transfer: prevState["Transfer"],
            }))
          }
        >
          Tax Forms
        </Button>
        <Button
          _dark={{
            bg: filter["Inquiry"] ? "primary.900" : "primary.700",
          }}
          _light={{
            bg: filter["Inquiry"] ? "primary.700" : "primary.500",
          }}
          onPress={() =>
            setFilter((prevState) => ({
              "Tax Form": prevState["Tax Form"],
              Inquiry: !prevState["Inquiry"],
              Transfer: prevState["Transfer"],
            }))
          }
        >
          Inquiries
        </Button>
        <Button
          _dark={{
            bg: filter["Transfer"] ? "primary.900" : "primary.700",
          }}
          _light={{
            bg: filter["Transfer"] ? "primary.700" : "primary.500",
          }}
          onPress={() =>
            setFilter((prevState) => ({
              "Tax Form": prevState["Tax Form"],
              Inquiry: prevState["Inquiry"],
              Transfer: !prevState["Transfer"],
            }))
          }
        >
          Transfers
        </Button>
      </Button.Group>
      {Object.keys(messages).map((key) => {
        if (filter[messages[key].category]) {
          return (
            <Pressable
              onPress={() => {
                messages[key].docLink != undefined
                  ? openLink(messages[key].docLink!, colorMode)
                  : {};
              }}
              w={"90%"}
              alignSelf={"center"}
              margin={2.5}
              key={messages[key].key}
            >
              {({ isHovered, isFocused, isPressed }) => {
                return (
                  <Box
                    _light={{
                      bg:
                        isPressed && messages[key].docLink != null
                          ? "primary.500"
                          : "primary.700",
                    }}
                    _dark={{
                      bg:
                        isPressed && messages[key].docLink != null
                          ? "primary.700"
                          : "primary.900",
                    }}
                    p="5"
                    rounded="8"
                    style={{
                      transform: [
                        {
                          scale:
                            isPressed && messages[key].docLink != null
                              ? 0.96
                              : 1,
                        },
                      ],
                    }}
                  >
                    <HStack alignItems="flex-start">
                      <Text fontSize={12} color="cyan.50" fontWeight="medium">
                        {messages[key].category}
                      </Text>
                      <Spacer />
                      <Text fontSize={10} color="cyan.100">
                        {messages[key].date.toLocaleDateString(undefined, {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </Text>
                    </HStack>
                    <Text
                      color="cyan.50"
                      mt="3"
                      fontWeight="medium"
                      fontSize={20}
                    >
                      {messages[key].title}
                    </Text>
                    <Text mt="2" fontSize={14} color="cyan.100">
                      {messages[key].message}
                    </Text>
                  </Box>
                );
              }}
            </Pressable>
          );
        }
      })}
    </>
  );
}
