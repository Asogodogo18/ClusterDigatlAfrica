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

const Touch = Animated.createAnimatedComponent(TouchableOpacity);

const CardUvm = (props) => {
  return (
    <Animated.View>
      <Touch
        exiting={FadeOutLeft}
        entering={BounceInRight}
        layout={Transition}
        style={styles.contain}
        // onPress={() =>
        //   navigation.navigate("Crowdfunding", {
        //     screen: "CrowdfundingDetails",
        //   })
        // }
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
        </View>
      </Touch>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  contain: {
    width: 160,
    height: 195,
    backgroundColor: "white",
    borderRadius: 30,
    paddingVertical: 10,
    elevation: 4,
  },
  image: {
    flex: 0,
    position: "absolute",
    top: 10,
    borderRadius: 50,
    overflow: "hidden",
    height: 100,
    width: 100,
    alignSelf: "center",
    backgroundColor: "orange",
    padding: 20,
    elevation: 5,
  },
  textContainer: {
    position: "absolute",
    bottom: 30,
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

export default CardUvm;
