import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { theme, View, Text } from "native-base";
import React, { useState } from "react";
import SettingsList from "react-native-settings-list";
import BottomSheet from "reanimated-bottom-sheet";
import { SettingsStackParamList } from "../Organisms/Settings";
import createNavText from "./createNavText";
import { StyleSheet } from "react-native";
import { marginBottom } from "styled-system";

export type Portfolio = {
  key: string;
  desc: string;
  date: Date;
  netChange: number;
  category: string;
};

//replace with DB API calls via axios
//assumes JSON are fed in reverse order of date (use time-based DB)
let portfolios: Portfolio[] = [
  {
    key: "wompn't",
    desc: "Direct Deposit Sent",
    date: new Date("December 24, 2021"),
    netChange: -100,
    category: "transfer",
  },
  {
    key: "wompn't",
    desc: "Direct Deposit Sent",
    date: new Date("February 24, 2021"),
    netChange: -100,
    category: "transfer",
  },
  {
    key: "womping",
    desc: "Direct Deposit Received",
    date: new Date("February 13, 2021"),
    netChange: 100,
    category: "transfer",
  },
  {
    key: "womped",
    desc: "Sold 100 shares of womp",
    date: new Date("February 30, 2020"),
    netChange: 100,
    category: "order",
  },
  {
    key: "womp",
    desc: "Bought 100 shares of womp",
    date: new Date("January 25, 2020"),
    netChange: -100,
    category: "order",
  },
];

const renderHeader = () => <View />;

export default function HistoryScrollList(
  primaryColor: string,
  bkgColor: string,
  onlyThisMonth: boolean
) {
  const sheetRef = React.useRef<BottomSheet>(null);

  let curMonth = -1;
  let curYear = -1;

  type settingsScreenProp = NativeStackNavigationProp<
    SettingsStackParamList,
    "History"
  >;

  const navigation = useNavigation<settingsScreenProp>();
  const [state, setState] = useState({ selectedKey: "a" });

  const todaysDate = new Date();

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#2c2c2f",
    },
    box: {
      width: 200,
      height: 200,
    },
    panelContainer: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
    panel: {
      height: 800,
      padding: 20,
      backgroundColor: "#2c2c2fAA",
      paddingTop: 20,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      shadowColor: "#000000",
      shadowOffset: { width: 0, height: 0 },
      shadowRadius: 5,
      shadowOpacity: 0.4,
    },
    header: {
      width: "100%",
      height: 50,
    },
    panelHeader: {
      alignItems: "center",
    },
    panelHandle: {
      width: 40,
      height: 8,
      borderRadius: 4,
      backgroundColor: "#00000040",
      marginBottom: 10,
    },
    panelTitle: {
      marginTop: 20,
      fontSize: 25,
      color: "white",
      fontWeight: "bold",
      alignItems: "center",
      padding: 20,
    },
    panelSubtitle: {
      fontSize: 20,
      color: primaryColor,
    },
    panelButton: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: "#292929",
      alignItems: "center",
      marginVertical: 10,
    },
    panelButtonTitle: {
      fontSize: 17,
      fontWeight: "bold",
      color: "white",
    },
    photo: {
      width: "100%",
      height: 225,
      marginTop: 30,
    },
    map: {
      height: "100%",
      width: "100%",
    },
  });

  // const renderInner = () => {
  //   return (
  //     <View style={styles.panel}>
  //       <Text style={[styles.panelSubtitle, { marginBottom: 10 }]}>
  //         {portfolios[state.selectedKey].date.toLocaleString("default", {
  //           month: "long",
  //           day: "numeric",
  //           year: "numeric",
  //         }) +
  //           " " +
  //           portfolios[state.selectedKey].date.toLocaleTimeString("en-US")}{" "}
  //       </Text>
  //       <Text style={styles.panelTitle}>
  //         {portfolios[state.selectedKey].desc}{" "}
  //       </Text>
  //     </View>
  //   );
  // };

  return (
    <>
      <SettingsList
        backgroundColor={"transparent"}
        borderColor={"transparent"}
        defaultItemSize={60}
      >
        {portfolios.map((item: Portfolio) => {
          if (
            onlyThisMonth &&
            (todaysDate.getMonth() != item.date.getMonth() ||
              todaysDate.getFullYear() != item.date.getFullYear())
          ) {
          } else if (
            item.date.getFullYear() != curYear ||
            item.date.getMonth() != curMonth
          ) {
            curYear = item.date.getFullYear();
            curMonth = item.date.getMonth();
            return [
              <SettingsList.Item
                key={curMonth + "" + curYear}
                hasNavArrow={false}
                title={
                  item.date.toLocaleString("default", {
                    month: "long",
                  }) +
                  " " +
                  curYear
                }
                titleStyle={{
                  marginLeft: 1,
                  color: primaryColor,
                  fontWeight: "bold",
                  fontSize: 25,
                }}
                borderHide={"Top"}
              />,
              <SettingsList.Item
                key={item.key}
                onPress={() => {
                  // setState(({ selectedKey }) => ({ selectedKey: key }));
                  null !== sheetRef.current ? sheetRef.current.snapTo(0) : {};
                }}
                icon={
                  <View
                    alignContent={"center"}
                    marginLeft={1}
                    justifyContent="center"
                  ></View>
                }
                navIcon={createNavText(
                  "$" + Math.abs(item.netChange),
                  item.netChange > 0
                    ? theme.colors["green"]["700"]
                    : theme.colors["red"]["700"]
                )}
                hasNavArrow={true}
                titleStyle={{
                  color: primaryColor,
                  fontSize: 20,
                }}
                title={item.desc}
              />,
            ];
          } else {
            console.log("womp2");
            return (
              <SettingsList.Item
                key={item.key}
                onPress={() => {
                  // setState(({ selectedKey }) => ({ selectedKey: key }));
                  null !== sheetRef.current ? sheetRef.current.snapTo(0) : {};
                }}
                icon={
                  <View
                    alignContent={"center"}
                    marginLeft={1}
                    justifyContent="center"
                  ></View>
                }
                navIcon={createNavText(
                  "$" + Math.abs(item.netChange),
                  item.netChange > 0
                    ? theme.colors["green"]["700"]
                    : theme.colors["red"]["700"]
                )}
                hasNavArrow={true}
                titleStyle={{
                  color: primaryColor,
                  fontSize: 20,
                }}
                title={item.desc}
              />
            );
          }
        })}
      </SettingsList>

      {/* <BottomSheet
        ref={sheetRef}
        snapPoints={["20%", "0%"]}
        initialSnap={1}
        borderRadius={10}
        enabledInnerScrolling={false}
        renderContent={renderInner}
        renderHeader={renderHeader}
      /> */}
    </>
  );
}
