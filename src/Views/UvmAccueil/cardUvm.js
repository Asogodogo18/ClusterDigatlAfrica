import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import Animated, {
  FadeInRight,
  FadeOutLeft,
  BounceInRight,
  Transition,
} from "react-native-reanimated";
import { Feather, FontAwesome5 } from "@expo/vector-icons";

const Touch = Animated.createAnimatedComponent(TouchableOpacity);

const CardUvm = (props) => {
  return (
    <Animated.View>
      <Touch
        exiting={FadeOutLeft}
        entering={BounceInRight}
        layout={Transition}
        style={styles.contain}
      >
        <View style={styles.image}>
          <Image
            style={{
              width: "100%",
              height: "100%",
              resizeMode: "cover",
              overflow: "hidden",
            }}
            source={props.icon}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subtitle}>{props.subtile}</Text>
          <View style={{ flexDirection: "row", flex: 1 }}>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-around",
              }}
            >
              <FontAwesome5
                name="signal"
                size={20}
                color="black"
                style={{ marginTop: 2 }}
              />
              <Text style={{ marginRight: 25, padding: 2 }}>Facile</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                flex: 1,
                justifyContent: "space-around",
              }}
            >
              <Feather
                name="clock"
                size={24}
                color="black"
                style={{ marginTop: 2 }}
              />
              <Text style={{ marginRight: 25, padding: 2 }}>20 Heure</Text>
            </View>
          </View>
        </View>
      </Touch>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  contain: {
    width: "90%",
    height: 95,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 10,
    elevation: 4,
    flexDirection: "row",
    margin: 10,
    marginTop: 10,
    alignSelf: "center",
  },
  image: {
    flex: 1,
    position: "absolute",
    top: 20,
    left: 10,
    borderRadius: 50,
    overflow: "hidden",
    height: 50,
    width: 50,
    alignSelf: "center",
    backgroundColor: "orange",
    padding: 5,
    elevation: 5,
  },
  textContainer: {
    bottom: 0,
    flex: 1,
    justifyContent: "space-evenly",
    paddingLeft: 80,
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

export default CardUvm;
