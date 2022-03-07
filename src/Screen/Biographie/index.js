import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import getRandomColor from "../../Utils/getRandomColor";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";
import BIOGRAPHIEDATA from "../../Data/biography.json";

const { biography } = BIOGRAPHIEDATA;

const index = ({ navigation }) => {
  const CardMembre = ({ biography }) => {
    return (
      <TouchableOpacity
        key={biography.id}
        onPress={() =>
          navigation.navigate("Biographie", {
            screen: "DetailBiographie",
            params: { item: biography },
          })
        }
        activeOpacity={0.8}
        style={{ alignItems: "center" }}
      >
        <View
          style={[
            styles.card,
            { backgroundColor: getRandomColor(`${biography.name}`) },
          ]}
        >
          <View
            style={{
              flex: 5,
              justifyContent: "space-between",
              paddingHorizontal: 5,
              marginVertical: 15,
            }}
          >
            <SharedElement id={`ìtem.${biography.thumb}.name`}>
              <Text
                style={{
                  textTransform: "uppercase",
                  fontSize: 18,
                  color: "white",
                  fontWeight: "700",
                  letterSpacing: 1,
                  textAlign: "center",
                }}
              >
                {biography.name}
              </Text>
            </SharedElement>

            <SharedElement id={`ìtem.${biography.thumb}.desc`}>
              <Text
                style={{
                  fontSize: 10,
                  color: "white",
                  fontWeight: "400",
                  letterSpacing: 0,
                  textTransform: "uppercase",
                  textAlign: "center",
                  padding: 5,
                }}
              >
                {biography.desc_summary.length > 30
                  ? biography.desc_summary.substring(0, 150).padEnd(153, ".")
                  : biography.desc_summary}
              </Text>
            </SharedElement>

            <View>
              <SharedElement id={`ìtem.${biography.tel}.date`}>
                <Text
                  style={{
                    fontSize: 11,
                    color: "white",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {biography.date}
                </Text>
              </SharedElement>
              <SharedElement id={`ìtem.${biography.tel}.tel`}>
                <Text
                  style={{
                    fontSize: 11,
                    color: "white",
                    fontWeight: "500",
                    textAlign: "center",
                  }}
                >
                  {biography.tel}
                </Text>
              </SharedElement>
            </View>
          </View>
          <View
            style={{
              flex: 7,
              borderRadius: 15,
              overflow: "hidden",
              margin: 10,
              alignSelf: "center",
            }}
          >
            <SharedElement
              id={`ìtem.${biography.tel}.image`}
              style={{ width: "100%", height: "80%" }}
            >
              <Image
                style={styles.icon}
                source={{ uri: `${biography.thumb}` }}
                resizeMode="cover"
              />
            </SharedElement>
          </View>
        </View>
      </TouchableOpacity>
    );
  };
  const renderMember = ({ item }) => <CardMembre biography={item} />;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        data={biography}
        renderItem={renderMember}
        keyExtractor={(item) => item.thumb}
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
    height: 250,
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
