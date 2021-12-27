import { StackActions, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { RootStackParamList } from "../../../Organisms/PreMain";

type homeScreenProp = NativeStackNavigationProp<
  RootStackParamList,
  "Onboarding"
>;

function Skip({ ...props }) {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <TouchableOpacity
      style={{ marginHorizontal: 10 }}
      {...props}
      onPress={() => navigation.navigate("Main")}
    >
      <Text>dbug redirect</Text>
    </TouchableOpacity>
  );
}

const Next = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text>Next</Text>
  </TouchableOpacity>
);

const Done = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text>Done</Text>
  </TouchableOpacity>
);

const OnboardingComponent = ({ navigation }: { navigation: any }) => (
  <Onboarding
    SkipButtonComponent={Skip}
    NextButtonComponent={Next}
    DoneButtonComponent={Done}
    onDone={() => navigation.dispatch(StackActions.replace("Welcome"))}
    pages={[
      {
        title: "Onboarding 1",
        subtitle: "Done with React Native Onboarding Swiper",
        backgroundColor: "#fff",
        image: (
          <Image source={require("../../../../assets/onboarding-icon-1.png")} />
        ),
      },
      {
        title: "Onboarding",
        subtitle: "Done with React Native Onboarding Swiper",
        backgroundColor: "#fff",
        image: (
          <Image source={require("../../../../assets/onboarding-icon-1.png")} />
        ),
      },
    ]}
  />
);

export default OnboardingComponent;
