import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import { AntDesign, MaterialIcons } from "@expo/vector-icons";
const { width } = Dimensions.get("window");

const Event = ({ item, horizontal, navigation }) => (
  <View style={{ padding: 10 }}>
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("Event", {
          screen: "EventDetails",
          params: { item },
        });
      }}
    >
      <View
        style={[styles.item, { flexDirection: horizontal ? "row" : "column" }]}
      >
        <View
          style={{
            flex: 7,
            backgroundColor: "black",
            borderRadius: 0,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            borderRadius: 20,
          }}
        >
          <Image style={styles.Avatar} source={item.imageUrl} />
        </View>
        <View
          style={{
            flex: 3,
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          <View style={{}}>
            <View style={{ marginBottom: 0 }}>
              <Text style={styles.title}>{item.title}</Text>
            </View>

            <View style={{ flexDirection: "row" }}>
              <AntDesign
                name="clockcircleo"
                size={15}
                color="black"
                style={{ marginRight: 5, marginTop: 2 }}
              />
              <Text style={styles.date}>{item.date}</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </View>
);

const events = (props) => {
  const { navigation, data, isNavigation, title } = props;
  const renderEvent = ({ item }) => (
    <Event item={item} navigation={navigation} />
  );

  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={styles.titre}>{title}</Text>
        <TouchableOpacity
          onPress={() => (isNavigation ? navigation.navigate("Event") : null)}
        >
          {isNavigation && (
            <AntDesign
              name="right"
              size={25}
              color="black"
              style={{ marginRight: 5 }}
            />
          )}
        </TouchableOpacity>
      </View>
      <FlatList
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
        data={data}
        horizontal={props.horizontal}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titre: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 0,
    letterSpacing: 0.9,
  },
  item: {
    height: 250,
    padding: 5,
    marginVertical: 0,
    marginHorizontal: 0,
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "white",
    elevation: 10,
    shadowColor: "black",
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 0.5,
    width: width - 20,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
    marginTop: -15,
  },

  Avatar: {
    marginBottom: 0,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    // overflow: "hidden",
  },
});

export default events;
