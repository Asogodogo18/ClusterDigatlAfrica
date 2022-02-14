import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import getRandomColor from "../../Utils/getRandomColor";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";
import SPEAKERDATA from "../../Data/speaker.json";

const { speaker } = SPEAKERDATA;

const index = ({ navigation }) => {
  const CardMembre = ({ speaker }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Speaker", {
            screen: "SpeakerDetail",
            params: { item: speaker },
          })
        }
        activeOpacity={0.8}
        style={{ alignItems: "center" }}
      >
        <View
          style={[
            styles.card,
            { backgroundColor: getRandomColor(`${speaker.name}`) },
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
              id={`ìtem.${speaker.img}.image`}
              style={{ width: "100%", height: "80%" }}
            >
              <Image style={styles.icon} source={{ uri: `${speaker.img}` }} />
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
              <SharedElement id={`ìtem.${speaker.img}.title`}>
                <Text
                  style={{
                    textTransform: "uppercase",
                    fontSize: 18,
                    color: "white",
                    fontWeight: "700",
                    letterSpacing: 1,
                  }}
                >
                  {speaker.name}
                </Text>
              </SharedElement>
            </View>
            <View>
              <SharedElement id={`item.${speaker.img}.subtitle1`}>
                <Text
                  style={{
                    fontSize: 10,
                    color: "white",
                    fontWeight: "400",
                    letterSpacing: 1.2,
                    textTransform: "uppercase",
                  }}
                >
                  {speaker.poste}
                </Text>
              </SharedElement>
            </View>
            <View>
              <SharedElement id={`ìtem.${speaker.img}.subtitle2`}>
                <Text
                  style={{ fontSize: 11, color: "white", fontWeight: "500" }}
                >
                  {speaker.email}
                </Text>
              </SharedElement>
              <SharedElement id={`ìtem.${speaker.img}.subtitle1`}>
                <Text
                  style={{ fontSize: 11, color: "white", fontWeight: "500" }}
                >
                  {speaker.tel}
                </Text>
              </SharedElement>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderMember = ({ item }) => <CardMembre speaker={item} />;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        data={speaker}
        renderItem={renderMember}
        keyExtractor={(item) => item.img}
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
    flex: 1,
    width: 350,
    height: 160,
    borderRadius: 25,
    flexDirection: "row",
    marginVertical: 10,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
export default index;
