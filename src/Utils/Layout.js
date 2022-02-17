import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, createRef, Children } from "react";
import Svg, { ClipPath, Defs, G, Path, Image } from "react-native-svg";

import {
  StyleSheet,
  Text,
  View,
  Animated,
  ScrollView,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("screen");

const BackDrop = () => {
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: "white",
        },
      ]}
    />
  );
};

const Square = (props) => {
  return <Animated.View {...props} />;
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "orange",
  },
});

const Layout = ({ children, header }) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Svg width={width} height="400" viewBox={`0 0 320 320`}>
        <Defs>
          <ClipPath id="clip">
            <Path d="M0 96l80 32c80 32 240 96 400 80S800 96 960 96s320 96 400 144l80 48V0H0z" />
          </ClipPath>
        </Defs>
        <Image
          x="0"
          y="0"
          width="100%"
          height="50%"
          preserveAspectRatio="xMidYMid slice"
          href={require("../../assets/uvm_banner.jpg")}
          clipPath="url(#clip)"
        />
      </Svg>

      {/* {children} */}
    </ScrollView>
  );
};

export default Layout;
