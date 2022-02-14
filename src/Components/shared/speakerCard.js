import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const SpeakerCard = () => {
  return (
    <ScrollView contentContainerStyle={styles.contain}>
      <Text style={styles.title}>
        Pas de speaker disponible pour le moment.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contain: {
    padding: 20,
    height: 300,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 0,
    elevation: 5,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  header: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 5,
  },
  content: {
    flex: 3,
    justifyContent: "center",
    marginBottom: 5,
  },
  footer: {
    flex: 2,
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  avatarBox: {
    flex: 2,
    justifyContent: "center",
    maxHeight: 80,
    maxWidth: 80,
    overflow: "hidden",
    borderRadius: 100,
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "gray",
  },
  contact: {
    fontSize: 15,
    fontWeight: "400",
    color: "black",
    opacity: 0.8,
  },
  innerContact: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    opacity: 0.8,
  },
  button: {
    width: 130,
    height: 35,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
    padding: 5,
    // backgroundColor: "#2c9644",
    borderWidth: 2,
    borderColor: "#2c9644",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnText: {
    textTransform: "uppercase",
    fontSize: 15,
    letterSpacing: 1,
    color: "#2c9644",
  },
  date: {
    fontSize: 12.5,
  },
});

export default SpeakerCard;
