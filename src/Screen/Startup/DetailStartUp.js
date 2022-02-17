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
  ScrollView,
} from "react-native";
import getRandomColor from "../../Utils/getRandomColor";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";

import { Divider } from "react-native-paper";

const { height, width } = Dimensions.get("screen");

const DtailStartUp = ({ navigation, route }) => {
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
      <TouchableOpacity
        style={{
          position: "absolute",
          padding: 12,
          top: 0,
          left: 5,
          zIndex: 5,
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="black" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          padding: 12,
          top: 0,
          right: 5,
          zIndex: 5,
        }}
        onPress={onShare}
      >
        <AntDesign name="sharealt" size={30} color="black" />
      </TouchableOpacity>
      <SharedElement
        id={`ìtem.${item.img}.image`}
        style={{ width: "100%", height: "100%", marginTop: -25 }}
      >
        <Image
          style={styles.icon}
          source={{ uri: `${item.img}` }}
          resizeMode="contain"
        />
      </SharedElement>
      <View
        style={[styles.section, { backgroundColor: "white", paddingTop: 20 }]}
      >
        <SharedElement id={`ìtem.${item.img}.name`} style={{ padding: 10 }}>
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
            {item.name}
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
                letterSpacing: 1,
                textTransform: "uppercase",
                padding: 10,
              }}
            >
              {item.description_total}
            </Text>
          </SharedElement>
        </ScrollView>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <SharedElement id={`ìtem.${item.img}.publicher`}>
            <Text
              style={{
                fontSize: 12,
                color: "black",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              {item.publicher}
            </Text>
          </SharedElement>
          <SharedElement id={`ìtem.${item.img}.date`}>
            <Text
              style={{
                fontSize: 12,
                color: "black",
                fontWeight: "500",
                textAlign: "center",
              }}
            >
              {item.date}
            </Text>
          </SharedElement>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: "#77ed80",
  },
  section1: {
    position: "relative",
    zIndex: 5,

    top: Platform.OS == "ios" ? -180 : -150,
  },
  section: {
    flexGrow: 1,
    width: "95%",
    minHeight: 150,
    maxHeight: height / 2 - 50,
    alignSelf: "center",
    borderRadius: 20,
    elevation: 5,
    position: "absolute",
    top: height / 2,
    overflow: "hidden",
    padding: 5,
  },
  icon: {
    width: "100%",
    height: "60%",
    resizeMode: "contain",
    alignSelf: "center",
  },
});

DtailStartUp.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;

  return [
    { id: `item.${item.img}.name` },
    { id: `item.${item.img}.desc` },
    { id: `item.${item.img}.publicher` },
    { id: `item.${item.img}.description_total` },
    { id: `item.${item.img}.date` },
    { id: `item.${item.img}.image` },
  ];
};
export default DtailStartUp;
