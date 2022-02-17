import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import getRandomColor from "../../Utils/getRandomColor";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";
import STARTUPDATA from "../../Data/startUP.json";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
const { height, width } = Dimensions.get("screen");

const { startup } = STARTUPDATA;

const Index = ({ navigation }) => {
  const CardMembre = ({ startup }) => {
    return (
      <View style={styles.card}>
        <View
          style={{
            flex: 5,
            justifyContent: "space-between",
            paddingHorizontal: 5,
            marginVertical: 15,
          }}
        >
          <SharedElement
            id={`ìtem.${startup.tel}.image`}
            style={{ width: "100%", height: "80%" }}
          >
            <Image
              style={styles.icon}
              source={{ uri: `${startup.img}` }}
              resizeMode="cover"
            />
          </SharedElement>
          <View
            style={{
              backgroundColor: "green",
              opacity: 0.8,
              height: 30,
              width: "80%",
              marginTop: -70,
              borderRadius: 20,
              alignSelf: "center",
            }}
          >
            <SharedElement id={`ìtem.${startup.img}.name`}>
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 18,
                  color: "black",
                  fontWeight: "700",
                  letterSpacing: 1,
                  textAlign: "center",
                }}
              >
                {startup.name}
              </Text>
            </SharedElement>
          </View>
          <SharedElement id={`ìtem.${startup.img}.desc`}>
            <Text
              style={{
                fontSize: 10,
                color: "black",
                fontWeight: "400",
                letterSpacing: 0,
                textTransform: "uppercase",
                textAlign: "center",
                padding: 5,
                marginBottom: 0,
              }}
            >
              {startup.desc}
            </Text>
          </SharedElement>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <SharedElement id={`ìtem.${startup.img}.publicher`}>
              <Text
                style={{
                  fontSize: 11,
                  color: "black",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {startup.publicher}
              </Text>
            </SharedElement>
            <SharedElement id={`ìtem.${startup.img}.date`}>
              <Text
                style={{
                  fontSize: 11,
                  color: "black",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {startup.date}
              </Text>
            </SharedElement>
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
            backgroundColor: "green",
            borderRadius: 25,
            width: width - 50,
            alignSelf: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetailStartUp", {
                item: startup,
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
        </View>
      </View>
    );
  };
  const renderStartUp = ({ item }) => <CardMembre startup={item} />;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        data={startup}
        renderItem={renderStartUp}
        keyExtractor={(item) => item.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    backgroundColor: "black",
  },
  card: {
    flex: 1,
    width: 350,
    height: 350,
    borderRadius: 25,
    // flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "white",
    alignSelf: "center",
  },
  icon: {
    width: "70%",
    height: "70%",
    resizeMode: "contain",
    alignSelf: "center",
  },
  Btn: {
    height: 30,

    flexDirection: "row",

    borderRadius: 50,
    padding: 2,
  },
});
export default Index;
