import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import getRandomColor from "../../Utils/getRandomColor";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";

const DURATION = 500;
const CardMembre = ({ item, navigation }) => {
  return (
    <View style={{ backgroundColor: "transparent" }}>
      <TouchableOpacity
        onPress={() => navigation.navigate("Membres", { item: item })}
        activeOpacity={0.8}
        style={{ alignItems: "center" }}
      >
        <View
          style={[
            styles.card,
            { backgroundColor: getRandomColor(`${item.title}`) },
          ]}
        >
          <View
            style={{
              flex: 3,
              borderRadius: 25,
              overflow: "hidden",
              margin: 10,
              alignSelf: "center",
            }}
          >
            <SharedElement
              id={`ìtem.${item.id}.image`}
              style={{ width: "100%", height: "80%" }}
            >
              <Image style={styles.icon} source={item.image} />
            </SharedElement>
          </View>
          <View
            style={{
              flex: 6,
              justifyContent: "space-between",
              paddingHorizontal: 5,
              marginVertical: 15,
            }}
          >
            <View>
              <SharedElement id={`ìtem.${item.id}.title`}>
                <Text
                  style={{
                    textTransform: "uppercase",
                    fontSize: 18,
                    color: "white",
                    fontWeight: "700",
                    letterSpacing: 1,
                  }}
                >
                  {item.title}
                </Text>
              </SharedElement>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 10,
                  color: "white",
                  fontWeight: "400",
                  letterSpacing: 1.2,
                  textTransform: "uppercase",
                }}
              >
                {item.details}
              </Text>
            </View>
            <View>
              <SharedElement id={`ìtem.${item.id}.subtitle`}>
                <Text
                  style={{ fontSize: 11, color: "white", fontWeight: "500" }}
                >
                  {" "}
                  Membres en qualité: Gouvernance{" "}
                </Text>
              </SharedElement>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    width: 350,
    height: 160,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,

    // elevation: 5,
    // shadowColor: "black",
    // shadowOffset: {
    //   height: 5,
    //   width: 5,
    // },
    // shadowOpacity: 0.5,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default CardMembre;
