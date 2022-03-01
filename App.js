import React, { useState } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import RootNavigation from "./src/Navigation/RootStack";

export default function App() {
  return (
    <NavigationContainer>
      {/* <StatusBar backgroundColor="white" barStyle="dark-content" /> */}
      <RootNavigation />
    </NavigationContainer>
  );
}
