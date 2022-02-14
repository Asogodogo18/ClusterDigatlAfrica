import React, { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  Platform,
  Animated,
} from "react-native";
import getRandomColor from "../../Utils/getRandomColor";
import { SharedElement } from "react-navigation-shared-element";
import * as Animatable from "react-native-animatable";
import { Divider } from "react-native-paper";

const DURATION = 300;
const { height, width } = Dimensions.get("window");
const DATA = [
  {
    id: 1,
    name: "Amadou",
    lastName: "Diawara",
    photo: require("../../../assets/gouvernance/1Amadou-Diawara.jpg"),
  },
  {
    id: 2,
    name: "Boukary",
    lastName: "Diarra",
    photo: require("../../../assets/gouvernance/1Amadou-Diawara.jpg"),
  },
  {
    id: 3,
    name: "Zankai",
    lastName: "Samake",
    photo: require("../../../assets/gouvernance/1Amadou-Diawara.jpg"),
  },
  {
    id: 4,
    name: "Khalifa",
    lastName: "Coulibaly",
    photo: require("../../../assets/gouvernance/1Amadou-Diawara.jpg"),
  },
  {
    id: 5,
    name: "CHAKA",
    lastName: "Diarra",
    photo: require("../../../assets/gouvernance/1Amadou-Diawara.jpg"),
  },
  {
    id: 6,
    name: "Madou",
    lastName: "Sangare",
    photo: require("../../../assets/gouvernance/1Amadou-Diawara.jpg"),
  },
  {
    id: 7,
    name: "Kerfa",
    lastName: "Diarra",
    photo: require("../../../assets/gouvernance/1Amadou-Diawara.jpg"),
  },
  {
    id: 8,
    name: "Modibo",
    lastName: "Keita",
    photo: require("../../../assets/gouvernance/1Amadou-Diawara.jpg"),
  },
];

const IsAndroid = Platform.OS === "android";
const ITEM_WIDTH = width * 0.7;
const ITEM_HEIGHT = ITEM_WIDTH * 1.2;

const index = ({ navigation, route }) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  const [display, setDisplay] = useState(0);
  const { item } = route.params;

  return (
    <SafeAreaView>
      <View style={styles.contain}>
        <Ionicons
          style={{
            position: "absolute",
            padding: 12,
            top: 0,
            left: 5,
            zIndex: 2,
          }}
          name="arrow-back-circle-outline"
          size={48}
          color="black"
          onPress={() => navigation.goBack()}
        />

        <View
          style={[
            StyleSheet.absoluteFillObject,
            {
              backgroundColor: getRandomColor(`${item.title}`),
              height: height * 0.35,
              borderRadius: 0,
            },
          ]}
        >
          <SharedElement id={`ìtem.${item.id}.title`}>
            <Animatable.Text
              animation="slideInDown"
              delay={DURATION}
              iterationCount={3}
              direction="alternate"
              style={{
                position: "absolute",
                top: height * 0.3 - 60,
                left: 10,
                textTransform: "uppercase",
                fontSize: 18,
                color: "black",
                fontWeight: "700",
                letterSpacing: 1,
              }}
            >
              {item.title}
            </Animatable.Text>
          </SharedElement>
          <SharedElement id={`ìtem.${item.id}.subtitle`}>
            <Text
              style={{
                position: "absolute",
                top: height * 0.3 - 20,
                alignSelf: "center",
                fontSize: 14,
                color: "black",
                opacity: 0.7,
                fontWeight: "500",
              }}
            >
              Membres en qualité: Gouvernance
            </Text>
          </SharedElement>
          <Animatable.View
            animation="slideInDown"
            delay={DURATION}
            iterationCount={3}
            direction="alternate"
            style={{
              position: "absolute",
              top: 40,
              right: 15,
              borderRadius: 25,
              overflow: "hidden",
              width: width * 0.5 - 30,
              height: height * 0.3 - 70,
              alignItems: "center",
              justifyContent: "center",
              elevation: 5,
              shadowColor: "black",
              shadowOpacity: 0.8,
              shadowOffset: { height: 5, width: 5 },
            }}
          >
            <SharedElement id={`ìtem.${item.id}.image`} style={styles.icon}>
              <Image style={styles.icon} source={item.image} />
            </SharedElement>
          </Animatable.View>
        </View>
        <View style={styles.bg}>
          <View
            style={{
              height: 30,
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              paddingHorizontal: 20,
            }}
          >
            <View>
              <Text style={{ color: "#000" }}>Affichage :</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  display !== 0 ? setDisplay(0) : null;
                }}
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: 5,
                }}
              >
                <Ionicons name="list" size={24} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  display !== 1 ? setDisplay(1) : null;
                }}
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: 5,
                }}
              >
                <Ionicons name="grid-outline" size={18} color="black" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  display !== 2 ? setDisplay(2) : null;
                }}
                style={{
                  flexDirection: "column",
                  alignItems: "center",
                  marginRight: 5,
                }}
              >
                <Ionicons name="albums-outline" size={24} color="black" />
              </TouchableOpacity>
            </View>
          </View>
          {display === 0 && (
            <ScrollView
              contentContainerStyle={{ flexGrow: 1, paddingHorizontal: 10 }}
            >
              {DATA.map((item, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      navigation.navigate("MembreDetails", { membre: item });
                    }}
                    key={item.id}
                    style={{
                      // backgroundColor: getRandomColor(`${item.name}`),
                      height: 250,
                      marginVertical: 10,
                    }}
                  >
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          elevation: 15,
                          shadowColor: "black",
                          shadowOffset: { height: 10, with: 10 },
                        }}
                      >
                        <Image
                          source={item.photo}
                          style={{
                            height: "99%",
                            width: 200,
                            borderRadius: 30,
                            right: 10,
                          }}
                          resizeMode="cover"
                        />
                      </View>
                      <View>
                        <Text
                          style={{
                            color: "black",
                            fontSize: 20,
                            fontWeight: "700",
                            letterSpacing: 1,
                          }}
                        >
                          {item.name}
                        </Text>
                        <Divider
                          style={{
                            height: 4,
                            width: 25,
                            backgroundColor: "black",
                            opacity: 0.4,
                          }}
                        />
                        <Text
                          style={{
                            color: "black",
                            fontWeight: "400",
                            letterSpacing: 1,
                          }}
                        >
                          {item.lastName}
                        </Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          )}
          {display === 1 && (
            <ScrollView
              contentContainerStyle={{
                flexGrow: 1,
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "space-around",
              }}
            >
              {DATA.map((item, index) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                      navigation.navigate("MembreDetails", { membre: item });
                    }}
                    key={item.id}
                    style={{
                      height: 150,
                      width: "40%",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <View>
                      <Image
                        source={item.photo}
                        style={{
                          height: "100%",
                          width: 150,
                          borderRadius: 20,
                          // right: 10,
                        }}
                        resizeMode="cover"
                      />
                    </View>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          )}
          {display === 2 && (
            <View style={{ flex: 1, justifyContent: "center" }}>
              <Animated.FlatList
                data={DATA}
                horizontal
                pagingEnabled
                decelerationRate={0}
                snapToInterval={width} //your element width
                snapToAlignment={"center"}
                onScroll={Animated.event(
                  [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                  { useNativeDriver: true }
                )}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(member) => member.id}
                renderItem={({ item, index }) => {
                  const inputRange = [
                    (index - 1) * width,
                    index * width,
                    (index + 1) * width,
                  ];
                  const translateX = scrollX.interpolate({
                    inputRange,
                    outputRange: [-width * 0.7, 0, width * 0.7],
                  });
                  return (
                    <View
                      style={{
                        width,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <View
                        style={{
                          borderRadius: 18,
                          shadowColor: "black",
                          shadowRadius: 30,
                          shadowOpacity: 0.5,
                          shadowOffset: {
                            height: 5,
                            width: 5,
                          },
                          elevation: 5,
                          padding: 12,
                          backgroundColor: "white",
                        }}
                      >
                        <TouchableOpacity
                          activeOpacity={0.8}
                          onPress={() => {
                            navigation.navigate("MembreDetails", {
                              membre: item,
                            });
                          }}
                          style={{
                            height: ITEM_HEIGHT,
                            width: ITEM_WIDTH,
                            overflow: "hidden",
                            alignItems: "center",
                            borderRadius: 14,
                          }}
                        >
                          <Animated.Image
                            style={{
                              height: ITEM_HEIGHT,
                              width: ITEM_WIDTH * 1.4,
                              resizeMode: "contain",
                              transform: [{ translateX }],
                            }}
                            source={item.photo}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  );
                }}
              />
            </View>
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  bg: {
    position: "absolute",
    backgroundColor: "white",
    width,
    height: IsAndroid ? height - height * 0.36 : height - height * 0.37,
    transform: [{ translateY: height * 0.35 - 20 }],
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 10,
    marginBottom: IsAndroid ? 5 : 10,
    paddingTop: 20,
    flexGrow: 1,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});
index.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;

  return [
    { id: `item.${item.id}.title` },
    { id: `item.${item.id}.subtitle` },
    { id: `item.${item.id}.image` },
  ];
};
export default index;
