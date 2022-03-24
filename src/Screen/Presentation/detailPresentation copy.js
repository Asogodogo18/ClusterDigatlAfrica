import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Platform,
  Share,
} from "react-native";
import getRandomColor from "../../Utils/getRandomColor";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";
import { ScrollView } from "react-native-gesture-handler";
import { Divider } from "react-native-paper";

import { LinearGradient } from "expo-linear-gradient";

const { height, width } = Dimensions.get("screen");

const DetailPresentation = ({ navigation, route }) => {
  const { item } = route.params;
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "React Native | A framework for building native apps using React",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={styles.contain}>
      <LinearGradient
        key={`${item.id}`}
        colors={["#34c747", "#00FFFF"]}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 2.0, y: 0.0 }}
        style={{
          position: "absolute",
          padding: 12,
          left: 5,
          zIndex: 5,
          bottom: 5,
          borderRadius: 20,
          elevation: 5,
          width: 75,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-outline" size={30} color="white" />
        </TouchableOpacity>
      </LinearGradient>
      <LinearGradient
        key={`${item.id}`}
        colors={["#34c747", "#00FFFF"]}
        start={{ x: 0.0, y: 0.0 }}
        end={{ x: 2.0, y: 0.0 }}
        style={{
          position: "absolute",
          padding: 12,
          right: 5,
          zIndex: 5,
          bottom: 5,
          borderRadius: 20,
          elevation: 5,
          width: 75,
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={onShare}>
          <AntDesign name="sharealt" size={30} color="white" />
        </TouchableOpacity>
      </LinearGradient>

      <Image
        source={{ uri: `${item.img}` }}
        style={{
          height: 200,
          width: "100%",
          borderRadius: 0,
          position: "absolute",
          top: 5,
          left: 2,
        }}
        resizeMode="cover"
      />

      <View
        style={[styles.section, { backgroundColor: "white", paddingTop: 20 }]}
      >
        <SharedElement id={`ìtem.${item.img}.titre`} style={{ padding: 10 }}>
          <Text
            style={{
              textTransform: "uppercase",
              fontSize: 18,
              color: "black",
              fontWeight: "700",
              letterSpacing: 1,
              textAlign: "center",
              marginTop: -5,
            }}
          >
            {item.titre}
          </Text>
        </SharedElement>
        <Divider
          style={{
            backgroundColor: "#77ed80",
            width: "80%",
            alignSelf: "center",
            height: 5,
            opacity: 0.9,
            borderTopRightRadius: 20,
            borderBottomLeftRadius: 20,
          }}
        />
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <SharedElement id={`item.${item.img}.deatils`}>
            <Text
              style={{
                fontSize: 10,
                color: "black",
                fontWeight: "400",
                letterSpacing: 2,
                textTransform: "uppercase",
                padding: 10,
              }}
            >
              {item.details}
            </Text>
          </SharedElement>

          <SharedElement id={`ìtem.${item.img}.subtitle1`}>
            <Text
              style={{
                fontSize: 12,
                color: "black",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              {item.subtitle}
            </Text>
          </SharedElement>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    // backgroundColor: "#77ed80",
  },
  // section1: {
  //   position: "relative",
  //   zIndex: 5,

  //   top: Platform.OS == "ios" ? -180 : -150,
  // },
  section: {
    width: "100%",
    // minHeight: 150,
    // maxHeight: height / 2 - 50,
    alignSelf: "center",
    borderRadius: 0,
    elevation: 5,
    // position: "absolute",
    top: 210,
    overflow: "hidden",
    padding: 10,
    height: height / 2,
  },
});

DetailPresentation.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;

  return [
    { id: `item.${item.img}.title` },
    { id: `item.${item.img}.details` },
    { id: `item.${item.img}.subtitle` },
    { id: `item.${item.img}.subtitle1` },
    { id: `item.${item.img}.image` },
  ];
};
export default DetailPresentation;
