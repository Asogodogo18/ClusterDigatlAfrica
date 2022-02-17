import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");
const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),
    1
  );
  const rotate = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: ["45deg", "-35deg", "35deg"],
  });
  const translateX = YOLO.interpolate({
    inputRange: [0, 0.5, 1],
    outputRange: [0, -height + 100, 0],
  });
  return (
    <Animated.View
      style={{
        width: width * 2.3,
        height: width * 2.3,
        backgroundColor: "#00CBE7",
        borderRadius: 500,
        position: "absolute",
        top: -height * 0.75,
        left: -height * 0.315,
        transform: [
          {
            rotate,
          },
        ],
      }}
    />
  );
};

export default function Home(props) {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <Square scrollX={scrollX} />
      <View style={{ flex: 3, justifyContent: "center" }}>
        <Text style={{ fontSize: 34, fontWeight: "800", textAlign: "center" }}>
          Prêt A Voter ?
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontWeight: "400",
            textAlign: "center",
            marginTop: 10,
          }}
        >
          Faites parler votre droit constitutionnel
        </Text>
      </View>
      <View style={{ flex: 7, justifyContent: "center" }}>
        <Pressable
          style={styles.button}
          onPress={() => props.navigation.navigate("Urne")}
        >
          <MaterialCommunityIcons name="bank" size={24} color="black" />
          <Text style={styles.text}>Voter Maintenant!</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
      flexDirection:'row',
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 1,
    elevation: 0,
    backgroundColor: "transparent",
    borderColor: "#00CBE7",
    borderWidth: 1,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "300",
    letterSpacing: 0.25,
    color: "black",
    marginLeft:5
  },
});
