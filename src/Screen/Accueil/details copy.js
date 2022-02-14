import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  Animated,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

import { SharedElement } from "react-navigation-shared-element";
import Membres from "../../Views/Membres";
import Events from "../../Views/eventViews";
import Webinaire from "../../Views/webinaireViews";
import Speaker from "../speaker";
import Biographie from "../Biographie";

const NAVBAR_HEIGHT = 120;
const STATUS_BAR_HEIGHT = Platform.select({ ios: 20, android: 0 });

const { width, height } = Dimensions.get("window");

const Categories = [
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d423",
    title: "Membres",
    image: require("../../../assets/icons/community.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-45862def",
    title: "Webinaire",
    image: require("../../../assets/icons/webinaire.png"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb275k",
    title: "Evenement",
    image: require("../../../assets/icons/event.png"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Speaker",
    image: require("../../../assets/icons/speaker.png"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Biographie",
    price: "6000",
    image: require("../../../assets/icons/biography.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Levee de Fonds",
    image: require("../../../assets/icons/crowdfund.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d25",
    title: "Actu",
    image: require("../../../assets/icons/actu1.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "Sondage",
    image: require("../../../assets/icons/survey3.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29f455",
    title: "Visio",
    image: require("../../../assets/icons/visio.png"),
  },
];

const Details = ({ navigation, route }) => {
  const { item } = route.params;
  const ref = React.useRef();
  const scrollAnim = React.useRef(new Animated.Value(0)).current;
  const offsetAnim = React.useRef(new Animated.Value(0)).current;
  const [clampedScroll, setclampedScroll] = React.useState(
    Animated.diffClamp(
      Animated.add(
        scrollAnim.interpolate({
          inputRange: [0, 1],
          outputRange: [0, 1],
          extrapolateLeft: "clamp",
        }),
        offsetAnim
      ),
      0,
      NAVBAR_HEIGHT - STATUS_BAR_HEIGHT
    )
  );

  const selectedItemIndex = Categories.findIndex((i) => i.id === item.id);
  const mountedAnimated = React.useRef(new Animated.Value(0)).current;
  const activeIndex = React.useRef(
    new Animated.Value(selectedItemIndex)
  ).current;
  const activeIndexAnimation = React.useRef(
    new Animated.Value(selectedItemIndex)
  ).current;

  const animation = (toValue, delay) =>
    Animated.timing(mountedAnimated, {
      toValue,
      duration: 500,
      delay,
      useNativeDriver: true,
    });

  React.useEffect(() => {
    Animated.parallel([
      Animated.timing(activeIndexAnimation, {
        toValue: activeIndex,
        duration: 300,
        useNativeDriver: true,
      }),
      animation(1, 500),
    ]).start();
  });

  const navbarTranslate = clampedScroll.interpolate({
    inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const navbarOpacity = clampedScroll.interpolate({
    inputRange: [0, NAVBAR_HEIGHT - STATUS_BAR_HEIGHT],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });
  const translateY = mountedAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });
  const translateX = activeIndexAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [10, 0, -10],
  });
  const handleScroll = ({ event }) => {
    event([{ nativeEvent: { contentOffset: { y: scrollAnim } } }], {
      useNativeDriver: true,
    });
  };
  return (
    <SafeAreaView style={styles.contain}>
      <SharedElement
        id={`item.${item.id}.Image`}
        style={{ flex: 1, width, height }}
      >
        <Image
          source={require("../../../assets/12.jpg")}
          style={[
            StyleSheet.absoluteFillObject,
            { resizeMode: "cover", width: width, height: height },
          ]}
        />
      </SharedElement>
      <TouchableOpacity
        style={{
          position: "absolute",
          padding: 5,
          top: 0,
          left: 5,
          zIndex: 6,
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={35} color="black" />
      </TouchableOpacity>

      <Animated.ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          paddingLeft: 10,
          paddingTop: 20,
          // alignItems: "center",
          // justifyContent: "center",
          backgroundColor: "white",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 5,
          paddingTop: STATUS_BAR_HEIGHT,
          height: NAVBAR_HEIGHT,
          // marginLeft: width / 2 - 36 / 2 - 5,
          // transform: [{ translateX, translateY: navbarTranslate }],
        }}
      >
        {Categories.map((item, index) => {
          const inputRange = [index - 1, index, index + 1];
          const opacity = activeIndexAnimation.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: "clamp",
          });
          return (
            <LinearGradient
              colors={["#34c747", "#00FFFF"]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 2.0, y: 0.0 }}
              style={{
                borderRadius: Platform.OS === "android" ? 160 : 25,
                height: 70,
                width: 70,
                marginVertical: 8,
                marginHorizontal: 5,
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                key={item.id}
                style={styles.item}
                onPress={() => {
                  activeIndex.setValue(index);
                  navigation.navigate("Details", { item: item });
                }}
              >
                <Animated.View
                  style={[
                    {
                      opacity,
                      height: 50,
                      width: 50,
                    },
                  ]}
                >
                  <SharedElement
                    id={`item.${item.id}.icon`}
                    style={{
                      borderRadius: Platform.OS === "android" ? 160 : 25,
                      height: 50,
                      width: 50,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Image style={styles.Avatar} source={item.image} />
                  </SharedElement>

                  <View
                    style={{
                      height: 20,
                      width: 100,
                      justifyContent: "center",

                      // padding: 10,
                    }}
                  >
                    <Text style={styles.title}>{item.title}</Text>
                  </View>
                </Animated.View>
              </TouchableOpacity>
            </LinearGradient>
          );
        })}
      </Animated.ScrollView>
      <Animated.View
        style={{
          flex: 9,
          opacity: mountedAnimated,
          marginBottom: 15,
          transform: [{ translateY }],
          paddingTop: NAVBAR_HEIGHT - 80,
        }}
      >
        {/* <Text>{item.title}</Text> */}
        {selectedItemIndex == 0 && <Membres navigation={navigation} />}
        {selectedItemIndex == 1 && (
          <Webinaire horizontal={false} navigation={navigation} />
        )}
        {selectedItemIndex == 2 && (
          <Events horizontal={false} navigation={navigation} />
        )}
        {selectedItemIndex == 3 && <Speaker navigation={navigation} />}
        {selectedItemIndex == 4 && <Biographie navigation={navigation} />}
      </Animated.View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    // alignItems: "center",
    paddingTop: StatusBar.height,
  },
  item: {
    // height: "100%",
    // width: "100%",
    alignItems: "center",
    // overflow: "hidden",
  },
  title: {
    fontSize: 14,
    fontWeight: "500",
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "400",
    textTransform: "uppercase",
  },
  Avatar: {
    width: 40,
    height: 40,
    resizeMode: "contain",
    alignSelf: "center",
  },
});

Details.sharedElements = (route, otherRoute, showing) => {
  return Categories.map((item) => `item.${item.id}.icon`);
};
export default Details;
