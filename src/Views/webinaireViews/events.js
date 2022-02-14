import React from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Pressable,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";

const Event = ({ item }) => (
  <View style={{ padding: 10 }}>
    <Pressable
      onPress={() => {
        console.log("event pressed");
      }}
    >
      <View style={styles.item}>
        <View
          style={{
            flex: 7,
            backgroundColor: "black",
            borderRadius: 0,
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
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
          <View style={{ right: 0 }}>
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
    </Pressable>
  </View>
);

const events = (props) => {
  const { navigation, data } = props;
  const renderEvent = ({ item }) => <Event item={item} />;
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <Text style={styles.titre}>Webinaire A Venir</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("detailWebinaire")}
        >
          <AntDesign
            name="right"
            size={25}
            color="black"
            style={{ marginRight: 5 }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        horizontal={true}
        renderItem={renderEvent}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titre: {
    marginLeft: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 0,
  },
  item: {
    height: 250,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 5,
    // flexDirection: "column",
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "white",
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
