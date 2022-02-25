import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Animated, {
  FadeInRight,
  FadeOutLeft,
  BounceInRight,
  Transition,
} from "react-native-reanimated";
import { SharedElement } from "react-navigation-shared-element";
import Data from "../../Data/master.json";
import Layout from "../../Utils/Layout";
const { height } = Dimensions.get("window");

import { LinearGradient } from "expo-linear-gradient";
import Header from "../../Components/header";

const Index = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={styles.contain}>
      <View style={{ height: 150 }}>
        <Header
          icon={require("../../../assets/icons/logo_uvn.png")}
          title="Details"
          color="orange"
        />
      </View>

      <View style={styles.card}>
        <View
          style={{
            flex: 3,
            borderRadius: 10,
            overflow: "hidden",
            margin: 10,
            alignSelf: "center",
            marginTop: 1,
          }}
        >
          <SharedElement
            id={`ìtem.${item.img}.image`}
            style={{ width: 330, height: 250 }}
          >
            <Image style={styles.icon} source={{ uri: `${item.img}` }} />
          </SharedElement>
        </View>
        <View
          style={{
            marginBottom: 5,
          }}
        >
          <SharedElement id={`ìtem.${item.img}.name`}>
            <Text
              style={{
                textTransform: "uppercase",
                fontSize: 18,
                color: "black",
                fontWeight: "700",
                letterSpacing: 1,
                textAlign: "center",
                marginTop: 10,
              }}
            >
              {item.name}
            </Text>
          </SharedElement>

          <SharedElement id={`item.${item.img}.prix`}>
            <Text
              style={{
                fontSize: 10,
                color: "black",
                fontWeight: "600",
                letterSpacing: 0,
                textTransform: "uppercase",
              }}
            >
              {item.prix}
            </Text>
          </SharedElement>
        </View>

        <LinearGradient
          colors={["orange", "#FFFF"]}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 2.0, y: 0.0 }}
          style={styles.touch}
        >
          <TouchableOpacity>
            <Text style={{ textAlign: "center", color: "white" }}>
              S'inscrire
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  card: {
    // flex: 1,
    width: 350,
    height: 360,
    borderRadius: 20,
    alignSelf: "center",
    marginVertical: 10,
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  touch: {
    height: 30,
    width: "100%",
    backgroundColor: "red",
    borderRadius: 20,
    justifyContent: "center",
    alignSelf: "center",
  },
});
export default Index;
