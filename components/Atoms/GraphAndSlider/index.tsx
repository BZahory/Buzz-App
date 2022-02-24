import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Center, Text, Stack, theme, useColorMode, Heading } from "native-base";
import {
  VictoryChart,
  VictoryTheme,
  VictoryLine,
  VictoryAxis,
  VictoryCursorContainer,
  LineSegment,
} from "victory-native";
import Svg, { Line } from "react-native-svg";

import * as Haptics from "expo-haptics";
import MaterialTabs from "react-native-material-tabs";

interface Props {
  index: number;
  setIndex: Dispatch<SetStateAction<number>>;
  initTest: number;
}

const GraphAndSlider: React.FC<Props> = ({ index, setIndex, initTest }) => {
  const thumbTextArray = ["1D", "1W", "1M", "3M", "6M", "1Y", "All"];

  function range(size: number, startAt = 0) {
    return [...Array(size).keys()].map((i) => i + startAt);
  }

  var prev = initTest;

  var coeff = 1000 * 60 * 5;

  const rn = new Date(Date.now());

  const [data, setData] = useState(
    range(288).map((x) => ({
      x: x,
      date: new Date(
        Math.round((rn.getTime() + x * 5 * 60000) / coeff) * coeff
      ),

      y: (prev += Math.floor(
        prev % 10 === 0
          ? 0
          : Math.random() < 0.5
          ? -100 * Math.random()
          : +100 * Math.random()
      )),
    }))
  );

  useEffect(() => {
    setData(
      range(288).map((x) => ({
        x: x,
        date: new Date(
          Math.round((rn.getTime() + x * 5 * 60000) / coeff) * coeff
        ),

        y: (prev += Math.floor(
          Math.random() < 0.5 ? -100 * Math.random() : +100 * Math.random()
        )),
      }))
    );
  }, [index]);

  const findClosestPointSorted = (data, value) => {
    if (value === null) return null;
    const start = data[0].x;
    const range = data[data.length - 1].x - start;
    const index = Math.round(((value - start) / range) * (data.length - 1));

    return data[index];
  };

  const CustomLabelLine = (props) => {
    const closest = findClosestPointSorted(data, props.datum.x);

    return (
      <>
        <Center
          style={{ alignContent: "center", justifyContent: "center" }}
          width="100%"
          marginBottom={150}
        >
          <Heading fontSize={48}>
            {(closest.y < 0 ? "-" : "") +
              "$" +
              Math.abs(closest.y).toLocaleString()}
          </Heading>

          {closest.y - data[0].y < 0 ? (
            <Text fontSize={18} color={"red.500"}>
              {Math.floor(
                (100 * (closest.y - data[0].y)) / Math.abs(data[0].y)
              )}
              %
            </Text>
          ) : (
            <Text fontSize={18} color={"green.500"}>
              {Math.floor(
                (100 * (closest.y - data[0].y)) / Math.abs(data[0].y)
              )}
              %
            </Text>
          )}

          {/* I really have no clue why the "+1" aligns it better (At least on the IPhone 12 pro this code was tested on); a more precise solution may be needed in the future */}
          <Text color="#D97A07" left={props.datum.x - 145 + 1}>
            {closest.date.toLocaleTimeString(navigator.language, {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Text>
        </Center>

        <Line
          x1={props.x - 5}
          x2={props.x - 5}
          y1="25%"
          y2="100%"
          stroke="#D97A07"
          strokeWidth={2}
        ></Line>
      </>
    );
  };

  const { colorMode, toggleColorMode, setColorMode } = useColorMode();

  let primaryColor: string, secondaryColor: string, bkgColor: string;

  if (colorMode === "light") {
    primaryColor = theme.colors["coolGray"]["800"];
    secondaryColor = "black";
    bkgColor = "white";
  } else {
    primaryColor = theme.colors["coolGray"]["50"];
    secondaryColor = "#D97A07";
    bkgColor = theme.colors["coolGray"]["800"];
  }

  const GraphRoute = () => {
    return (
      <Stack space={4} alignItems="center" w="100%" marginTop={25}>
        <VictoryChart
          padding={{ bottom: 0, top: 25, right: 25, left: 25 }}
          domainPadding={{ y: [0, 65] }}
          theme={VictoryTheme.material}
          containerComponent={
            <VictoryCursorContainer
              cursorDimension="y"
              cursorLabel={(datum) => datum}
              cursorComponent={
                <LineSegment style={{ stroke: "transparent" }} />
              }
              cursorLabelComponent={<CustomLabelLine />}
              onTouchStart={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
              }}
              defaultCursorValue={{ x: data[data.length - 1].x, y: 1 }}
            />
          }
        >
          <VictoryAxis
            fixLabelOverlap={true}
            dependentAxis
            crossAxis={false}
            theme={VictoryTheme.material}
            style={{
              axis: { stroke: "transparent" },
              ticks: { stroke: "transparent" },
              grid: { stroke: "transparent" },
              tickLabels: {
                fill:
                  // data[data.length - 1].y - data[0].y > 0
                  //   ? theme.colors["green"]["500"]
                  //   : theme.colors["red"]["500"],
                  "transparent",
              },
            }}
            tickFormat={(t: number) => (t < 0 ? "-" : "") + "$" + Math.abs(t)}
          />
          <VictoryLine
            style={{
              data: {
                stroke:
                  data[data.length - 1].y - data[0].y < 0 ? "red" : "green",
                strokeWidth: 1.5,
              },
              parent: { border: "1px solid #ccc" },
            }}
            data={data}
            interpolation="bundle"
          />
        </VictoryChart>
      </Stack>
    );
  };

  return (
    <>
      <GraphRoute />
      <MaterialTabs
        items={thumbTextArray}
        selectedIndex={index}
        onChange={setIndex}
        barColor="transparent"
        indicatorColor={secondaryColor}
        activeTextColor={secondaryColor}
        inactiveTextColor={"#a1a1aa"}
      />
    </>
  );
};

export default GraphAndSlider;
