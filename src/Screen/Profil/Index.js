import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useState } from "react";
import {
  FontAwesome5,
  FontAwesome,
  Ionicons,
  Fontisto,
} from "@expo/vector-icons";
import { Divider, List } from "react-native-paper";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Swiper from "react-native-swiper";

const BackDrop = () => {
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: "white",
        },
      ]}
    />
  );
};
const Square = () => {
  return (
    <Animated.View
      style={{
        width: 500,
        height: 500,
        backgroundColor: "#00b712",
        borderRadius: 356,
        position: "absolute",
        top: -280,
        left: -200,
      }}
    />
  );
};

const Index = ({ navigation }) => {
  const [singleIndex, setsingleIndex] = useState(0);
  const onIndexChanged = (index) => {
    setsingleIndex(index);
  };
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
      <BackDrop />
      <Square />

      <Image
        source={require("../../../assets/profil.jpg")}
        style={styles.img}
        resizeMode="cover"
      />

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 150,
          left: 20,
          marginBottom: 15,
        }}
      >
        <View style={{ flex: 2.5 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "black" }}>
            Cheick abba sogodogo
          </Text>
          <Text style={{ fontSize: 13, fontWeight: "300", color: "black" }}>
            @Asogodogo18
          </Text>
          <View style={{ flex: 0, marginTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <Fontisto name="world-o" size={15} color="black" />
              <Text> Vivre au - Mali</Text>
            </View>
            <View style={{ flexDirection: "row", marginTop: 2 }}>
              <Fontisto name="date" size={15} color="black" />
              <Text> Membre depuis - January, 2021</Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              marginTop: 5,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                marginRight: 10,
              }}
            >
              <Text>
                12 {""} <Text>Postes</Text>
              </Text>
            </View>
            <View
              style={{
                marginRight: 10,
              }}
            >
              <Text>
                120 {""} <Text>Abonements</Text>
              </Text>
            </View>
            <View
              style={{
                marginRight: 10,
              }}
            >
              <Text>
                180 {""} <Text>Abonnées</Text>
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              height: 55,
              width: 55,
              padding: 15,
              backgroundColor: "#00b712",
              elevation: 5,
              borderRadius: 35,
            }}
          >
            <FontAwesome5 name="user-edit" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Divider
        style={{
          marginBottom: 10,
          width: "50%",
          alignSelf: "center",
          height: 1.5,
          backgroundColor: "#00b712",
          elevation: 2.5,
        }}
      />
      <View style={{ width: "100%", alignSelf: "center" }}>
        <SegmentedControlTab
          values={["Postes", "Médias", "Aimé"]}
          selectedIndex={singleIndex}
          tabStyle={{ borderColor: "transparent" }}
          tabsContainerStyle={{
            height: 45,
          }}
          activeTabStyle={{
            elevation: 5,
            borderBottomWidth: 5,
            borderBottomColor: "green",
            backgroundColor: "#f5f5f5",
            borderRadius: 10,
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
          }}
          onTabPress={onIndexChanged}
        />

        <Swiper
          index={singleIndex}
          onIndexChanged={onIndexChanged}
          loop={false}
          showsPagination={false}
          style={{ height: 300, marginTop: 10 }}
        >
          <View style={{ flex: 1 }}>
            <Text>Postes</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Médias</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Aimé</Text>
          </View>
        </Swiper>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: 150,
    borderRadius: 75,
    borderWidth: 0.8,
    borderColor: "white",
    position: "relative",
    top: 130,
    left: 10,
  },
  touch: {
    width: 150,
    backgroundColor: "#00b712",
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    elevation: 5,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    alignContent: "center",
    color: "white",
    fontSize: 15,
  },
});
export default Index;
