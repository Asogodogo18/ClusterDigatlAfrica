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

const Index = ({ navigation, route }) => {
  const Card = ({ item }) => {
    return (
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
      </View>
    );
  };
  const renderCategorie = ({ item }) => <Card item={item} />;
  return (
    <Layout icon={require("../../../assets/category.png")}>
      <FlatList
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        data={Data["master"]}
        renderItem={renderCategorie}
        keyExtractor={(item) => item.id}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: "white",
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
});
export default Index;
