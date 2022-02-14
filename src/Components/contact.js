import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function contact() {
  const Navigation = useNavigation();
  return (
    <View>
      <View style={styles.ViewLogo}></View>
      <View style={styles.contain}></View>
      <TouchableOpacity
        onPress={() => {
          Navigation.navigate("");
        }}
        style={styles.touch1}
      >
        <View>
          <Text style={styles.text}>Envoyer</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 0,
    alignItems: "center",
    marginTop: 5,
    // flexDirection: "column",
  },
  ViewLogo: {
    backgroundColor: "#464E5F",
    height: 50,
    marginTop: 5,
  },

  touch1: {
    width: Dimensions.get("screen").width - 100,
    backgroundColor: "#8950FC",
    height: 50,
    borderRadius: 10,
    marginBottom: 10,
    //   paddingLeft: 30,
    //   paddingRight: 10,
    elevation: 2,
    marginTop: 10,
    marginLeft: 50,
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
    paddingTop: 10,
    //marginLeft: 30,
    //   left: 10,
    textAlign: "center",
  },
  textHeader: {
    textAlign: "center",
    fontSize: 30,
    color: "black",
    marginBottom: 10,
  },
});
