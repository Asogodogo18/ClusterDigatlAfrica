import { Animated, View, Text, Dimensions } from "react-native";
import React from "react";
import Svg, { Circle } from "react-native-svg";
import { interpolate, multiply } from "react-native-reanimated";

const { width } = Dimensions.get("window");
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const CircularProgress = ({ size, progress }) => {
  const strokeWidth = 20;
  const radius = (size - strokeWidth) / 2;
  const Circumference = radius * 2 * Math.PI;
  const strokeDashOffset = multiply(delta, radius);
  const delta = interpolate(progress, {
    inputRange: [0, 1],
    outputRange: [0, Math.PI * 2],
  });
  return (
    <Svg width={size} height={size}>
      <Circle
        stroke="#2162cc"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        {...{ strokeWidth }}
      />
      <AnimatedCircle
        stroke="#2162cc"
        fill="none"
        cx={size / 2}
        cy={size / 2}
        r={radius}
        strokeDasharray={`${Circumference} ${Circumference}`}
        {...{ strokeWidth, strokeDashOffset }}
      />
    </Svg>
  );
};

export default CircularProgress;
