import React, { useState, useLayoutEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Swiper from "react-native-swiper";

import { Feather, FontAwesome5 } from "@expo/vector-icons";

import { Ionicons, AntDesign } from "@expo/vector-icons";
import SegmentedControlTab from "react-native-segmented-control-tab";
import { Apercu, Credits, TableMatiere } from "../../Components/UvmSegmented";

const { height, width } = Dimensions.get("screen");
const footerHeight = 100;

const Cours = ({ navigation, route }) => {
  const [isCert, setIsCert] = useState(false);
  console.log("route", route);

  useLayoutEffect(() => {
    if (route.params !== "undefined") {
      const { isCert } = route.params;
      setIsCert(isCert);
    }
    return () => {
      setIsCert(false);
    };
  }, []);

  const [singleIndex, setsingleIndex] = useState(0);
  const onIndexChanged = (index) => {
    setsingleIndex(index);
  };
  return (
    <ScrollView contentContainerStyle={styles.contain}>
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
        onPress={() => {}}
      >
        <AntDesign name="sharealt" size={30} color="black" />
      </TouchableOpacity>
      <View style={styles.section1}>
        <Image
          resizeMode="cover"
          source={require("../../../assets/banner.png")}
          style={{
            height: height / 2.5,
            width: width - 5,
            alignSelf: "center",
          }}
        />

        <View style={styles.header}>
          <Text style={{ fontSize: 18, fontWeight: "bold", padding: 10 }}>
            Titre du couts
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 10,
              padding: 5,
            }}
          >
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <FontAwesome5
                name="signal"
                size={18}
                color="black"
                style={{ marginTop: 2 }}
              />
              <Text style={{ marginRight: 0, padding: 5 }}>facile</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
              }}
            >
              <Feather
                name="clock"
                size={18}
                color="black"
                style={{ marginTop: 5 }}
              />
              <Text style={{ marginRight: 0, padding: 5 }}>15 heure</Text>
            </View>
          </View>
          <Text style={{ padding: 10, fontWeight: "700" }}>
            Id incididunt culpa cupidatat est labore qui eu. Lorem labore
            nostrud nisi est. Quis elit excepteur anim ad nostrud consectetur
            eiusmod. Occaecat aliqua velit id eiusmod aute veniam. Tempor elit
            tempor ut pariatur aliqua eiusmod amet excepteur nulla ut ea amet
            pariatur.
          </Text>
          <View
            style={{
              alignSelf: "center",
            }}
          >
            <TouchableOpacity
              style={styles.touch}
              onPress={() => {
                navigation.navigate("CoursView");
              }}
            >
              <Text style={styles.text}>Commencé</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.section2}>
        <SegmentedControlTab
          values={["Aperçu", "Table des Matiere", "Crédits"]}
          selectedIndex={singleIndex}
          tabStyle={{ borderColor: "transparent" }}
          tabsContainerStyle={{
            height: 45,
          }}
          activeTabStyle={{
            elevation: 5,
            borderBottomWidth: 5,
            borderBottomColor: "orange",
            backgroundColor: "#f5f5f5",
            // borderRadius: 10,
          }}
          activeTabTextStyle={{
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
          }}
          tabTextStyle={{
            fontWeight: "500",
            fontSize: 16,
            color: "black",
            letterSpacing: -1,
          }}
          onTabPress={onIndexChanged}
        />
        <Swiper
          index={singleIndex}
          onIndexChanged={onIndexChanged}
          loop={false}
          showsPagination={false}
          style={{
            minHeight: 300,

            marginTop: 10,
          }}
        >
          <View style={{ flex: 1 }}>
            <Apercu isCert={isCert} />
          </View>
          <View style={{ flex: 1 }}>
            <TableMatiere />
          </View>
          <View style={{ flex: 1 }}>
            <Credits />
          </View>
        </Swiper>
      </View>
      <View style={styles.section3}>
        <Text style={{ textAlign: "center" }}>Course access libre</Text>
        <View
          style={{
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            style={styles.touch}
            onPress={() => {
              navigation.navigate("CoursView");
            }}
          >
            <Text style={styles.text}>Commencé</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexGrow: 1,
    // maxHeight: height * 2,
  },
  section1: {
    flex: 2,
    backgroundColor: "white",
  },
  section2: {
    height: height - footerHeight - 45,
  },
  section3: {
    height: footerHeight,
  },
  header: {
    flex: 1,
  },
  touch: {
    width: 150,
    backgroundColor: "orange",
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    elevation: 5,
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    alignContent: "center",
    color: "white",
    fontSize: 15,
  },
});
export default Cours;
