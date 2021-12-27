import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import {
  Button,
  Center,
  Heading,
  HStack,
  Text,
  useColorMode,
  VStack,
} from "native-base";
import React, { FC } from "react";
import BuzzIcon from "../../../../assets/BuzzIcon";
import ThemeSwitch from "../../../Atoms/ThemeSwitch";
import { RootStackParamList } from "../../../Organisms/PreMain";

interface TitleProps {}

type homeScreenProp = NativeStackNavigationProp<RootStackParamList, "Welcome">;

const WelcomeComponent: FC<TitleProps> = ({}) => {
  const navigation = useNavigation<homeScreenProp>();

  return (
    <Center
      _dark={{ bg: "blueGray.900" }}
      _light={{ bg: "blueGray.50" }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <BuzzIcon />
        <Heading size="lg">Welcome to Buzz</Heading>
        <HStack space={2} alignItems="center">
          <Text>Please pick your theme.</Text>
        </HStack>
        <ToggleDarkMode />
      </VStack>

      <VStack space="3" alignItems="center">
        <Button
          mt="5"
          width="72"
          size="16"
          borderRadius="4"
          _text={{
            fontWeight: "medium",
          }}
          _light={{
            bg: "primary.900",
          }}
          _dark={{
            bg: "primary.700",
          }}
          onPress={() => {
            navigation.navigate("SignIn");
          }}
        >
          SIGN IN
        </Button>

        <Button
          mt="5"
          width="72"
          size="16"
          borderRadius="4"
          _text={{
            fontWeight: "medium",
          }}
          _light={{
            bg: "primary.900",
          }}
          _dark={{
            bg: "primary.700",
          }}
          onPress={() => {
            navigation.navigate("SignUp");
          }}
        >
          SIGN UP
        </Button>
      </VStack>
    </Center>
  );
};

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <ThemeSwitch />
      <Text>Light</Text>
    </HStack>
  );
}

export default WelcomeComponent;
