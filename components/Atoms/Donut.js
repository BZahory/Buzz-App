//https://www.youtube.com/watch?v=x2LtzCxbWI0 used code from here

import * as React from 'react';
import {
  Easing,
  TextInput,
  Animated,
  Text,
  View,
  StyleSheet,
} from 'react-native';
import Svg, { G, Circle, Rect } from 'react-native-svg';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export default function Donut({
  
  radius = 40,
  strokeWidth = 10,
  duration = 500,
  color = "tomato",
  delay = 0,
  textColor,
  max = 100,
  value = 75,
  appendedSymbolVal= "",
  appendedSymbolVal2="",
  appendedSymbolMax= "",
  showMax = false,
}) {
  const animated = React.useRef(new Animated.Value(0)).current;
  const circleRef = React.useRef();
  const inputRef = React.useRef();
  const maxRef = React.useRef();
  const circumference = 2 * Math.PI * radius;
  const halfCircle = radius + strokeWidth;

  const animation = (toValue) => {
    return Animated.timing(animated, {
      delay: 1000,
      toValue,
      duration,
      useNativeDriver: true,
      easing: Easing.out(Easing.ease),
    }).start();
  };

  React.useEffect(() => {
    animation(value);
    animated.addListener((v) => {
      var maxPerc = (100 * v.value / max);
      const strokeDashoffset = circumference - (circumference * maxPerc) / 100;
      if (inputRef?.current) {
        inputRef.current.setNativeProps({
          text: appendedSymbolVal + `${Math.round(v.value).toLocaleString()}` + appendedSymbolVal2,
        });
      }
      if (maxRef?.current) {
        maxRef.current.setNativeProps({
          text: appendedSymbolMax + `${Math.round(max).toLocaleString()}`,
        });
      }
      if (circleRef?.current) {
        circleRef.current.setNativeProps({
          strokeDashoffset,
        });
      }
    }, [max, value]);

    return () => {
      animated.removeAllListeners();
    };
  });

  return (
    <View style={{ width: radius * 2, height: radius * 2 }}>
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}>
        <G
          rotation="-90"
          origin={`${halfCircle}, ${halfCircle}`}>
          <Circle
            ref={circleRef}
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDashoffset={circumference}
            strokeDasharray={circumference}
          />
          <Circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinejoin="round"
            strokeOpacity=".1"
          />
        </G>
      </Svg>
      <View style={[StyleSheet.absoluteFillObject,{justifyContent:"center"}]}>
      <AnimatedTextInput
        ref={inputRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue={appendedSymbolVal + "0" + appendedSymbolVal2}
        style={[
          { fontSize: radius / 2, color: textColor ?? color },
          styles.text,
        ]}
      />
      {
      showMax && <AnimatedTextInput
        ref={maxRef}
        underlineColorAndroid="transparent"
        editable={false}
        defaultValue={appendedSymbolMax + "0"}
        style={[
          { fontSize: radius / 4, color: textColor ?? color },
          styles.text,
        ]}
      />
      }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  text: { fontWeight: '900', textAlign: 'center' },
});