import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

import getRandomColor from "../../Utils/getRandomColor";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";
import PRESENTATIONDATA from "../../Data/Presentation.json";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import DetailPresentation from "./detailPresentation";
import Modal from "react-native-modal";
const { height } = Dimensions.get("window");

const { presentation } = PRESENTATIONDATA;

const Index = ({ navigation, route }) => {
  const [isDetailsVisible, setDetailsVisible] = useState(false);
  const [singleIndex, setsingleIndex] = useState(0);
  const onIndexChanged = (index) => {
    setsingleIndex(index);
  };
  const toggleModal = () => {
    setDetailsVisible(!isDetailsVisible);
  };
  const CardPresentation = ({ presentation }) => {
    return (
      <View style={{ alignItems: "center" }}>
        <View
          style={[styles.card, { backgroundColor: getRandomColor(`${"j"}`) }]}
        >
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
              id={`ìtem.${presentation.img}.image`}
              style={{ width: 330, height: 150 }}
            >
              <Image
                style={styles.icon}
                source={{ uri: `${presentation.img}` }}
              />
            </SharedElement>
          </View>
          <View
            style={{
              // flex: 1,
              // justifyContent: "space-between",
              // paddingHorizontal: 5,
              // marginVertical: 5,
              marginBottom: 5,
            }}
          >
            <SharedElement id={`ìtem.${presentation.img}.title`}>
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 18,
                  color: "white",
                  fontWeight: "700",
                  letterSpacing: 1,
                  textAlign: "center",
                  marginTop: -5,
                }}
              >
                {presentation.titre}
              </Text>
            </SharedElement>

            <SharedElement id={`item.${presentation.img}.details`}>
              <Text
                numberOfLines={4}
                style={{
                  fontSize: 10,
                  color: "white",
                  fontWeight: "400",
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  padding: 10,
                }}
              >
                {presentation.details}
              </Text>
            </SharedElement>

            <SharedElement id={`ìtem.${presentation.img}.subtitle`}>
              <Text
                style={{
                  fontSize: 11,
                  color: "white",
                  fontWeight: "500",
                  marginBottom: 10,
                }}
              >
                {presentation.subtitle}
              </Text>
            </SharedElement>

            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <LinearGradient
                colors={["lightgreen", "black"]}
                start={{ x: 0.0, y: 2.0 }}
                end={{ x: 1.0, y: 2.0 }}
                style={[
                  styles.item,
                  {
                    elevation: 5,
                    shadowColor: "black",
                    shadowOffset: {
                      height: 10,
                      width: 10,
                    },
                    shadowOpacity: 0.5,
                    opacity: 0.8,
                  },
                ]}
              >
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate("DetailsPresentation", {
                      item: presentation,
                    });
                  }}
                  activeOpacity={0.8}
                  style={styles.Btn}
                >
                  <FontAwesome5 name="eye" size={24} color="white" />
                  <Text
                    style={{
                      marginLeft: 10,
                      padding: 2,
                      textTransform: "uppercase",
                      color: "white",
                    }}
                  >
                    Lire la suite
                  </Text>
                </TouchableOpacity>
              </LinearGradient>
            </View>
          </View>
        </View>
      </View>
    );
  };
  const renderMember = ({ item }) => <CardPresentation presentation={item} />;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        data={presentation}
        renderItem={renderMember}
        keyExtractor={(item) => item.id}
      />
    </View>
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
    height: 350,
    borderRadius: 20,

    marginVertical: 10,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  Btn: {
    height: 50,
    width: "50%",
    flexDirection: "row",
    // justifyContent: "center",
    // alignContent: "center",

    padding: 10,
  },
  item: {
    // height: 50,
    // width: 50,
    justifyContent: "center",
    alignItems: "center",
    // marginVertical: 8,
    // marginHorizontal: 5,
    // overflow: "hidden",
    borderRadius: Platform.OS === "android" ? 50 : 25,
  },
  modalContainer: {
    height: height / 1.2,
    backgroundColor: "white",
  },
});
export default Index;
