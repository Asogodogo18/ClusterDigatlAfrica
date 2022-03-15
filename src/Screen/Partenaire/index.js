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
  Platform,
} from "react-native";
import getRandomColor from "../../Utils/getRandomColor";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";
import PARTENAIREUPDATA from "../../Data/PARTNERS.json";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome5 } from "@expo/vector-icons";
const { height, width } = Dimensions.get("screen");

const Index = ({ navigation }) => {
  const CardPartenaire = ({ partenaire }) => {
    return (
      <View style={styles.card}>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            paddingHorizontal: 5,
            marginVertical: 50,
          }}
        >
          <SharedElement
            id={`ìtem.${partenaire.tel}.image`}
            style={{ width: "100%", height: "80%" }}
          >
            <Image
              style={styles.icon}
              source={{ uri: `${partenaire.icon}` }}
              resizeMode="contain"
            />
          </SharedElement>
          <View
            style={{
              backgroundColor: "green",
              opacity: 0.8,
              height: 30,
              width: "90%",
              marginTop: -80,
              borderRadius: 20,
              alignSelf: "center",
            }}
          >
            <SharedElement id={`ìtem.${partenaire.img}.name`}>
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
                {partenaire.name.length > 20
                  ? partenaire.name.substring(0, 20).padEnd(23, ".")
                  : partenaire.name}
              </Text>
            </SharedElement>
          </View>
          <SharedElement id={`ìtem.${partenaire.img}.selection1`}>
            <ScrollView
              nestedScrollEnabled
              contentContainerStyle={{ flexGrow: 1 }}
            >
              <Text
                style={{
                  fontSize: 10,
                  color: "black",
                  fontWeight: "400",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  textAlign: "center",
                  padding: 2,
                  marginBottom: 0,
                  //
                }}
              >
                {partenaire.selection1}
                {/* {partenaire.selection1.length > 20
                  ? partenaire.selection1.substring(0, 20).padEnd(23, ".")
                  : partenaire.selection1} */}
              </Text>
            </ScrollView>
          </SharedElement>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <SharedElement id={`ìtem.${partenaire.img}.publisher`}>
              <Text
                style={{
                  fontSize: 11,
                  color: "black",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {partenaire.publisher}
              </Text>
            </SharedElement>
            <SharedElement id={`ìtem.${partenaire.img}.date`}>
              <Text
                style={{
                  fontSize: 11,
                  color: "black",
                  fontWeight: "500",
                  textAlign: "center",
                }}
              >
                {partenaire.date}
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
            width: width - 100,
            alignSelf: "center",
            elevation: 5,
          }}
        >
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("DetailPartenaire", {
                item: partenaire,
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
  const renderPartenaire = ({ item }) => <CardPartenaire partenaire={item} />;
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        style={{ flex: 1 }}
        showsHorizontalScrollIndicator={false}
        data={PARTENAIREUPDATA["partners"]}
        renderItem={renderPartenaire}
        keyExtractor={(item) => item.img}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  card: {
    flex: 1,
    width: 350,
    // height: 360,
    borderRadius: 25,
    // flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "white",
    alignSelf: "center",
    maxHeight: 450,
    minHeight: 350,
  },
  icon: {
    width: "100%",
    height: "70%",

    alignSelf: "center",
    marginTop: Platform.OS === "ios" ? -35 : -40,
  },
  Btn: {
    height: 30,

    flexDirection: "row",

    borderRadius: 50,
    padding: 2,
  },
});
export default Index;
