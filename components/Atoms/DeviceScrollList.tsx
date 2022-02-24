import { MaterialIcons } from "@expo/vector-icons";
import { View, Text } from "native-base";
import React from "react";
import SettingsList from "react-native-settings-list";
import createNavText from "./createNavText";

export type Device = {
  key: string;
  type: "Phone" | "Computer";
  lastSignIn: Date;
  deviceName: string;
  location: string;
};

//replace with DB API calls via axios
//assumes JSON are fed in reverse order of date (use time-based DB)
const devices: { [key: string]: Device } = {
  a: {
    key: "womp",
    type: "Phone",
    lastSignIn: new Date("December 11, 2021"),
    deviceName: "iPhone 12 Pro",
    location: "Los Angeles, California",
  },
  b: {
    key: "womped",
    type: "Computer",
    lastSignIn: new Date("June 11, 2021"),
    deviceName: "Chrome Web Browser",
    location: "San Jose, California",
  },
  c: {
    key: "womping",
    type: "Computer",
    lastSignIn: new Date("December 11, 2020"),
    deviceName: "Safari Web Browser",
    location: "Washington, D.C.",
  },
  d: {
    key: "wompn't",
    type: "Phone",
    lastSignIn: new Date("January 24, 2020"),
    deviceName: "Google Pixel",
    location: "Miami, Florida",
  },
};
export default function DeviceScrollList(
  primaryColor: string,
  bkgColor: string
) {
  return (
    <SettingsList
      backgroundColor={bkgColor}
      borderColor={bkgColor}
      defaultItemSize={60}
    >
      {Object.keys(devices).map((key) => {
        return (
          <SettingsList.Item
            key={devices[key].key}
            icon={
              <View
                alignContent={"center"}
                marginLeft={1}
                justifyContent="center"
              >
                <MaterialIcons
                  color={primaryColor}
                  size={20}
                  name={
                    devices[key].type == "Phone"
                      ? "phone-android"
                      : devices[key].type == "Computer"
                      ? "laptop"
                      : "devices-other"
                  }
                />
              </View>
            }
            // navIcon={
            //   <Text marginRight={1}>
            //     {devices[key].lastSignIn.toLocaleString("default", {
            //       month: "long",
            //       day: "numeric",
            //       year: "numeric",
            //     })}
            //   </Text>
            // }
            hasNavArrow={false}
            titleStyle={{ color: primaryColor, fontSize: 20 }}
            title={devices[key].deviceName}
            navIcon={createNavText(devices[key].location, primaryColor)}
            subtitle={
              <Text marginLeft={1}>
                {devices[key].lastSignIn.toLocaleString("default", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              </Text>
            }
          />
        );
      })}
    </SettingsList>
  );
}
