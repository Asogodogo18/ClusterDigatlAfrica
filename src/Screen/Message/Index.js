import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Index = () => {
  return (
    <View style={styles.contain}>
      <Text>Messages Screen</Text>
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
