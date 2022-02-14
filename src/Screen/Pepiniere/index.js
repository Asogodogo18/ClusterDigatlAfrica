import React from "react";
import { View, Text, StyleSheet } from "react-native";

const index = () => {
  return (
    <View style={styles.contain}>
      <Text>Pepiniere screen</Text>
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

export default index;
