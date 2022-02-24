import { Box, Pressable } from "native-base";
import React from "react";
import Animated from "react-native-reanimated";

const renderTabBar = (props) => {
  const inputRange = props.navigationState.routes.map((x, i) => i);
  return (
    <Box flexDirection="row">
      {props.navigationState.routes.map((route, i) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex) =>
            inputIndex === i ? 1 : 0.5
          ),
        });
        const color = index === i ? "#1f2937" : "#a1a1aa";
        const borderColor = index === i ? "cyan.500" : "coolGray.200";

        return (
          <Box
            borderBottomWidth="3"
            borderColor={borderColor}
            flex={1}
            alignItems="center"
            p="3"
            cursor="pointer"
          >
            <Pressable
              onPress={() => {
                console.log(i);
                setIndex(i);
              }}
            >
              <Animated.Text style={{ color }}>{route.title}</Animated.Text>
            </Pressable>
          </Box>
        );
      })}
    </Box>
  );
};

export default renderTabBar;
