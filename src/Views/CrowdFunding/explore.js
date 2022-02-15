import { TouchableOpacity, View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const explore = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.contain}
      onPress={() =>
        navigation.navigate("Crowdfunding", {
          screen: "CrowdfundingDetails",
        })
      }
    >
      <View style={styles.image}>
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            overflow: "hidden",
          }}
          source={require("../../../assets/ImageEvent.jpeg")}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>CDA Cluster</Text>
        <Text style={styles.subtitle}>communauté</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  contain: {
    width: 160,
    height: 220,
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 10,
    elevation: 4,
  },
  image: {
    flex: 3,
    position: "absolute",
    top: 0,
    borderRadius: 15,
    overflow: "hidden",
    height: 140,
    width: "100%",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    flex: 1,
    justifyContent: "space-evenly",
    paddingLeft: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
    opacity: 0.8,
  },
});
export default explore;
