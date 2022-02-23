import React, { useState } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import Animated, {
  FadeInRight,
  FadeOutLeft,
  BounceInRight,
  Transition,
} from "react-native-reanimated";

const Touch = Animated.createAnimatedComponent(TouchableOpacity);

const Data = [
  {
    id: "1",
    name: "DUT",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "2",
    name: "BTS",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "3",
    name: "Bachelor",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "4",
    name: "Licence",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "5",
    name: "Master",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "6",
    name: "MBA",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
];
const CardCategorie = ({ navigation }) => {
  return Data.map((item) => {
    return (
      <Animated.View>
        <Touch
          exiting={FadeOutLeft}
          entering={BounceInRight}
          layout={Transition}
          style={styles.card}
          onPress={() => {
            navigation.navigate("Categorie");
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",

              alignItems: "center",

              padding: 10,
            }}
          >
            <View style={styles.image}>
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  resizeMode: "cover",
                  overflow: "hidden",
                }}
                source={{ uri: `${item.icon}` }}
              />
            </View>
            <Text style={styles.title}>{item.name}</Text>
          </View>
        </Touch>
      </Animated.View>
    );
  });
};

const styles = StyleSheet.create({
  card: {
    // width: 135,
    height: 60,
    backgroundColor: "white",
    borderRadius: 30,
    // paddingVertical: 10,
    elevation: 5,

    padding: 0,
    margin: 5,
    minWidth: 135,
    maxWidth: 200,
  },
  image: {
    top: 0,
    borderRadius: 30,
    overflow: "hidden",
    height: 40,
    width: 40,
    alignSelf: "center",
    backgroundColor: "orange",
    padding: 5,
    elevation: 5,
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "black",
    marginLeft: 5,
    letterSpacing: 1,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "black",
    opacity: 0.8,
  },
});

export default CardCategorie;
