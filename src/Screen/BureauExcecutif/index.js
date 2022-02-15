import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Index = () => {
  return (
    <View style={styles.contain}>
      <Text>Bureau Excecutif screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Index;
