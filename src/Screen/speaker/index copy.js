import React, { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  FlatList,
  Animated,
  Dimensions,
} from "react-native";
// import Animated from "react-native-reanimated";
import { SharedElement } from "react-navigation-shared-element";

const { width } = Dimensions.get("window");
const Categories = [
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d423",
    title: "Communauté",
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

const index = ({ navigation, route }) => {
  const { item } = route.params;
  const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);
  const [activeIndex, setActiveIndex] = useState(
    new Animated.Value(selectedItemIndex)
  );
  const [activeIndexAnimation, setActiveIndexAnimation] = useState(
    new Animated.Value(selectedItemIndex)
  );

  const mountedAnimated = React.useRef(new Animated.Value(0)).current;
  React.useEffect(() => {
    setSelectedItemIndex(Categories.findIndex((i) => i.id === item.id));
  }, []);
  React.useEffect(() => {
    setSelectedItemIndex(Categories.findIndex((i) => i.id === item.id));

    setActiveIndex(new Animated.Value(selectedItemIndex));
    setActiveIndexAnimation(new Animated.Value(selectedItemIndex));
  }, [selectedItemIndex]);

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

  const translateY = mountedAnimated.interpolate({
    inputRange: [0, 1],
    outputRange: [50, 0],
  });
  const translateX = activeIndexAnimation.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [10, 0, -10],
  });

  return (
    <View style={styles.contain}>
      <Animated.ScrollView
        horizontal
        style={{
          height: 80,
          flexDirection: "row",
          flexWrap: "nowrap",
          // marginLeft: width / 2 - 36 / 2 - 5,
          transform: [{ translateX }],
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
            <Pressable
              key={item.id}
              onPress={() => {
                setSelectedItemIndex(
                  Categories.findIndex((i) => i.id === item.id)
                );
                navigation.navigate("Details", { item: item });
              }}
            >
              <Animated.View style={[styles.item, { opacity }]}>
                <View style={{ flex: 7 }}>
                  <SharedElement id={`item.${item.id}.icon`}>
                    <Image style={styles.Avatar} source={item.image} />
                  </SharedElement>
                </View>
                <View
                  style={{
                    flex: 3,
                    justifyContent: "center",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Text style={styles.title}>{item.title}</Text>
                </View>
              </Animated.View>
            </Pressable>
          );
        })}
      </Animated.ScrollView>
      <Animated.View
        style={{
          flex: 10,
          opacity: mountedAnimated,
          transform: [{ translateY }],
        }}
      >
        <Text>{item.title}</Text>
      </Animated.View>
    </View>
  );
};
const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  item: {
    height: "100%",
    padding: 0,
    marginVertical: 8,
    marginHorizontal: 5,
    elevation: 20,
    shadowColor: "black",
    shadowOffset: {
      height: 10,
      width: 10,
    },
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
    marginBottom: 10,
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

index.sharedElements = (route, otherRoute, showing) => {
  return Categories.map((item) => `item.${item.id}.icon`);
};
export default index;
