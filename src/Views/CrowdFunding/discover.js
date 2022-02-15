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

const discover = ({ navigation }) => {
  return (
    <Animated.View>
      <Touch
        exiting={FadeOutLeft}
        entering={BounceInRight}
        layout={Transition}
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
      </Touch>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  contain: {
    width: 160,
    height: 220,
    backgroundColor: "green",
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
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    opacity: 0.8,
  },
});

export default discover;
