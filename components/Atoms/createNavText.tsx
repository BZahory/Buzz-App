import { Text } from "native-base";
import React from "react";
import { DeviceEventEmitter, NativeModule } from "react-native";

// export const eventEmitter = new NativeEventEmitter();

export default function createNavText(text: string, color: string) {
  return (
    <Text marginRight={1} color={color}>
      {text}
    </Text>
  );
}
