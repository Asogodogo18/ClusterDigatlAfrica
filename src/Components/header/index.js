import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const index = (props) => {
  const Navigation = useNavigation();
  return (
    <View style={styles.contain}>
      <TouchableOpacity style={{ flex: 1 }} onPress={() => Navigation.goBack()}>
        <AntDesign name="arrowleft" size={30} color="white" />
      </TouchableOpacity>

      <Image style={styles.Avatar} source={props.icon} />
      <Text
        style={{
          flex: 4,
          textAlign: "center",
          fontSize: 22,
          letterSpacing: 1,
          fontWeight: "500",
          color: "white",
        }}
      >
        {props.title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#28a745",
    elevation: 10.5,
    shadowColor: "black",
  },
  Avatar: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
});
export default index;
