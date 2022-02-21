import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  SafeAreaView,
} from "react-native";
import {
  Feather,
  FontAwesome5,
  FontAwesome,
  AntDesign,
  Entypo,
  Ionicons,
} from "@expo/vector-icons";
import { SharedElement } from "react-navigation-shared-element";
import getRandomColor from "../../Utils/getRandomColor";
import getRandomGradient from "../../Utils/getRandomGradient";
import { LinearGradient } from "expo-linear-gradient";

const { width, height } = Dimensions.get("window");

const detailBiographie = ({ navigation, route }) => {
  const { item } = route.params;

  return (
    <SafeAreaView style={styles.contain}>
      {/* <ScrollView></ScrollView> */}
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
          }}
        >
          <Image
            source={{ uri: `${item.thumb}` }}
            resizeMode="cover"
            style={styles.img}
          />
        </View>
      </View>
      <View
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
        <View
          style={[
            styles.containerCard,
            {
              flex: 1,
              paddingTop: 15,
              backgroundColor: "rgba(255,255,255,0.8)",
            },
          ]}
        >
          <View style={[styles.containerCard, { flex: 1 }]}>
            <View
              style={{
                flex: 3,
                padding: 20,
                justifyContent: "space-between",
              }}
            >
              <SharedElement id={`ìtem.${item.thumb}.name`}>
                <Text
                  style={{ color: "black", fontSize: 20, fontWeight: "bold" }}
                >
                  {item.name} {"  "}
                  <FontAwesome name="check-circle" size={24} color="green" />
                </Text>
              </SharedElement>
              <ScrollView
                style={{ flexGrow: 1, marginTop: 10, marginBottom: -50 }}
              >
                <SharedElement id={`item.${item.thumb}.description`}>
                  <Text style={{ color: "gray", fontWeight: "400" }}>
                    {item.description}
                  </Text>
                </SharedElement>
              </ScrollView>
            </View>
            <View style={{ flex: 1, padding: 10 }}>
              <SharedElement
                id={`ìtem.${item.thumb}.date`}
                style={{ marginTop: 25 }}
              >
                <Text style={{ marginLeft: 5 }}>
                  <FontAwesome5 name="map-marked-alt" size={18} color="gray" />{" "}
                  {item.date}
                </Text>
              </SharedElement>
              <SharedElement
                id={`item.${item.thumb}.tel`}
                style={{ marginTop: 5 }}
              >
                <Text style={{ marginLeft: 2 }}>
                  <Feather name="phone" size={14} color="gray" />
                  {"  "} {item.tel}
                </Text>
              </SharedElement>
              {/* <SharedElement id={`item.${item.thumb}.desc_summary`}>
                <Text style={{ marginLeft: 2 }}>
                  <AntDesign name="mail" size={14} color="gray" />
                  {"  "} {item.desc_summary}
                </Text>
              </SharedElement> */}
              <View style={styles.boutton}>
                <LinearGradient
                  colors={getRandomGradient(`${item.name}`)}
                  style={{ borderRadius: 60 }}
                >
                  <TouchableOpacity
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
                Biographie
              </Text>
            </LinearGradient>
          </View>
        </View>
      </View>
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
    height: "100%",
    width: "100%",
    overflow: "hidden",
    justifyContent: "center",
  },
  boutton: {
    top: -210,
    right: 35,
    marginLeft: 0,
    position: "absolute",
    width: 45,
    height: 45,
    borderRadius: 30,
    backgroundColor: "white",
    elevation: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});

detailBiographie.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;

  return [
    { id: `item.${item.thumb}.name` },
    { id: `item.${item.thumb}.desc_summary` },
    { id: `item.${item.thumb}.date` },
    { id: `item.${item.thumb}.description` },
    { id: `item.${item.thumb}.image` },
  ];
};
export default detailBiographie;
