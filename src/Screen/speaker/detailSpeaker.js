import React, { useRef, useFocusEffect, useCallback } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Share,
} from "react-native";
import {
  Feather,
  FontAwesome5,
  FontAwesome,
  AntDesign,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { SharedElement } from "react-navigation-shared-element";
import getRandomColor from "../../Utils/getRandomColor";
import getRandomGradient from "../../Utils/getRandomGradient";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");
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

const detailSpeaker = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.contain}>
      <View style={{ flex: 1, width, height }}>
        <Image
          source={require("../../../assets/4.jpg")}
          style={[
            StyleSheet.absoluteFillObject,
            { resizeMode: "cover", width: width, height: height },
          ]}
        />
      </View>
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
        <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <View
        style={{
          flex: 3,
          flexDirection: "row",
          marginBottom: 15,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            alignSelf: "center",
            borderRadius: 150,
            borderWidth: 3,
            borderColor: "lightgreen",
            overflow: "hidden",
            marginTop: 0,
            height: 200,
            width: 200,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <SharedElement
            id={`item.${item.img}.Image`}
            style={{
              flex: 1,
              alignSelf: "center",
              borderRadius: 150,

              overflow: "hidden",
              marginTop: 0,
              height: 200,
              width: 200,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={{ uri: `${item.img}` }}
              resizeMode="contain"
              style={styles.img}
            />
          </SharedElement>
        </View>
      </View>

      <Animatable.View
        animation="slideInUp"
        duration={300}
        delay={200}
        style={[
          styles.containerCard,
          {
            flex: 4,
            paddingTop: 15,
            margin: 10,
            backgroundColor: "rgba(255,255,255,0.7)",
          },
        ]}
      >
        <Animatable.View
          animation="slideInUp"
          duration={400}
          delay={500}
          style={[
            styles.containerCard,
            {
              flex: 1,
              paddingTop: 15,
              backgroundColor: "rgba(255,255,255,0.8)",
            },
          ]}
        >
          <Animatable.View
            animation="slideInUp"
            duration={400}
            delay={800}
            style={[styles.containerCard, { flex: 1 }]}
          >
            <Animatable.View
              style={{
                flex: 3,
                padding: 20,
                justifyContent: "space-between",
              }}
            >
              <SharedElement id={`item${item.img}.subtitle1`}>
                <Text style={{ marginLeft: 5 }}>
                  <FontAwesome5 name="map-marked-alt" size={18} color="gray" />{" "}
                  {item.country}
                </Text>
              </SharedElement>
              <SharedElement id={`ìtem.${item.img}.title`}>
                <Text
                  style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                >
                  {item.name} {"  "}
                  <FontAwesome name="check-circle" size={24} color="green" />
                </Text>
              </SharedElement>
              <SharedElement id={`item.${item.img}.subtitle1`}>
                <Text style={{ color: "gray", fontWeight: "400" }}>
                  {item.poste}
                </Text>
              </SharedElement>
            </Animatable.View>
            <View style={{ flex: 1, padding: 20 }}>
              <SharedElement id={`ìtem.${item.img}.subtitle1`}>
                <Text style={{ marginLeft: 2 }}>
                  <Feather name="phone" size={14} color="gray" />
                  {"  "} {item.tel}
                </Text>
              </SharedElement>
              <SharedElement id={`ìtem.${item.img}.subtitle2`}>
                <Text style={{ marginLeft: 2 }}>
                  <AntDesign name="mail" size={14} color="gray" />
                  {"  "} {item.email}
                </Text>
              </SharedElement>
              <View style={styles.boutton}>
                <LinearGradient
                  colors={getRandomGradient(`${item.name}`)}
                  style={{ borderRadius: 60 }}
                >
                  <TouchableOpacity
                    onPress={onShare}
                    style={{
                      alignItems: "center",
                    }}
                  >
                    <Entypo name="share" size={30} color="white" />
                  </TouchableOpacity>
                </LinearGradient>
              </View>
            </View>
            <LinearGradient
              colors={getRandomGradient(`${item.name}`)}
              style={{
                width: "35%",
                height: 40,
                borderTopLeftRadius: 24,
                borderBottomRightRadius: 30,
                position: "relative",
                bottom: 0,
                alignSelf: "flex-end",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontWeight: "500",
                  color: "white",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Speaker
              </Text>
            </LinearGradient>
          </Animatable.View>
        </Animatable.View>
      </Animatable.View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    padding: 10,
    backgroundColor: "black",
  },
  containerCard: {
    backgroundColor: "white",
    borderRadius: 30,
    elevation: 5,
  },
  header: {
    // flexDirection: "row",
    backgroundColor: "#fff",
    marginBottom: 15,
  },
  img: {
    height: 200,
    width: 200,
    overflow: "hidden",
    justifyContent: "center",
  },
  boutton: {
    top: -180,
    right: 35,
    marginLeft: 0,
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 30,
    backgroundColor: "white",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

detailSpeaker.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;

  return [
    { id: `item.${item.img}.title` },
    { id: `item.${item.img}.subtitle1` },
    { id: `item.${item.img}.subtitle2` },
    { id: `item.${item.img}.subtile3` },
    { id: `item.${item.img}.image` },
  ];
};
export default detailSpeaker;
