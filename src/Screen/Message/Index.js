import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import React from "react";
import MaskedView from "@react-native-masked-view/masked-view";

import useChats from "../../hooks/useChats";

const Index = () => {
  const { data, error, isFetching } = useChats();

  if (isFetching) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <ActivityIndicator color="green" animating size="large" />
      </View>
    );
  }
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: "center" }}>
        <Text> "Une erreur est survenue: "{error.message}</Text>
      </View>
    );
  }

  return (
    <View style={styles.contain}>
      <Text>Messages Screen </Text>
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
