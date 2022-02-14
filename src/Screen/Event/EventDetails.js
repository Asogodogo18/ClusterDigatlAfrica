import React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  Image,
  Dimensions,
  Animated,
} from "react-native";
import TouchableScale from "react-native-touchable-scale";
import { SharedElement } from "react-navigation-shared-element";
import { Ionicons, AntDesign } from "@expo/vector-icons";

import UserCard from "../../Components/shared/userCard";

const { width, height } = Dimensions.get("screen");
const EVENTS = [
  {
    id: "1235",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    data: {
      key: "1",
      title: "Sit laboris mollit in cupidatat eu quis proident.",
      description:
        "Eiusmod laboris aliqua in quis aute reprehenderit. Lorem adipisicing aliquip amet ipsum. Anim deserunt eiusmod laboris mollit. Adipisicing cillum eiusmod esse aute. Esse duis consequat nostrud quis excepteur culpa consequat....",
    },
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageWebinaire1.jpg"),
  },
  {
    id: "12356",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    data: {
      key: "12",
      title: "Sit laboris mollit in cupidatat eu quis proident.",
      description:
        "Eiusmod laboris aliqua in quis aute reprehenderit. Lorem adipisicing aliquip amet ipsum. Anim deserunt eiusmod laboris mollit. Adipisicing cillum eiusmod esse aute. Esse duis consequat nostrud quis excepteur culpa consequat....",
    },
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageWebinaire2.jpeg"),
  },
  {
    id: "127735",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    data: {
      key: "123",
      title: "Sit laboris mollit in cupidatat eu quis proident.",
      description:
        "Eiusmod laboris aliqua in quis aute reprehenderit. Lorem adipisicing aliquip amet ipsum. Anim deserunt eiusmod laboris mollit. Adipisicing cillum eiusmod esse aute. Esse duis consequat nostrud quis excepteur culpa consequat....",
    },
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageWebinaire1.jpg"),
  },
  {
    id: "1232256",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    data: {
      key: "1234",
      title: "Sit laboris mollit in cupidatat eu quis proident.",
      description:
        "Eiusmod laboris aliqua in quis aute reprehenderit. Lorem adipisicing aliquip amet ipsum. Anim deserunt eiusmod laboris mollit. Adipisicing cillum eiusmod esse aute. Esse duis consequat nostrud quis excepteur culpa consequat....",
    },
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageWebinaire2.jpeg"),
  },
];

const EventItemDetail = ({ data, scrollX, index }) => {
  const inputRange = [
    (index - 0.5) * width,
    index * width,
    (index + 0.5) * width,
  ];
  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });
  const translateY = scrollX.interpolate({
    inputRange,
    outputRange: [40, 0, 40],
  });
  return (
    <Animated.View
      key={`detail.${data.key}`}
      style={{
        padding: 20,
        maxHeight: 250,
        zIndex: 1,
        position: "absolute",
        opacity,
        transform: [{ translateY }],
        top: 70,
        left: 20,
      }}
    >
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.description}>{data.description}</Text>
    </Animated.View>
  );
};

const EventDetail = ({ navigation, route }) => {
  const { item } = route.params;
  const scrollX = React.useRef(new Animated.Value(0)).current;

  return (
    <View style={styles.contain}>
      <StatusBar hidden />

      <TouchableOpacity
        style={{
          position: "absolute",
          padding: 12,
          top: 0,
          left: 5,
          zIndex: 5,
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          position: "absolute",
          padding: 12,
          top: 0,
          right: 5,
          zIndex: 5,
        }}
        onPress={() => {}}
      >
        <AntDesign name="sharealt" size={30} color="white" />
      </TouchableOpacity>

      <Animated.FlatList
        data={EVENTS}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        renderItem={({ item, index }) => {
          return (
            <View style={{ flex: 1, width, height }}>
              <SharedElement
                id={`item.${item.id}.Image`}
                style={{ flex: 1, width, height }}
              >
                <Image
                  source={require("../../../assets/imageSlider/slides6.jpeg")}
                  style={[
                    StyleSheet.absoluteFillObject,
                    { resizeMode: "cover", width: width, height: height },
                  ]}
                />
              </SharedElement>
              <EventItemDetail
                data={item.data}
                scrollX={scrollX}
                index={index}
              />
              <View
                style={{
                  position: "absolute",
                  bottom: 120,
                  alignSelf: "center",
                  maxHeight: 200,
                  width: "90%",
                }}
              >
                <TouchableScale
                  activeScale={0.8}
                  tension={20}
                  friction={7}
                  useNativeDriver
                  onPress={() => {
                    navigation.navigate("EventListeDetail", { item });
                  }}
                >
                  <SharedElement id={`item.${item.id}.UserCard`}>
                    <UserCard navigation={navigation} />
                  </SharedElement>
                </TouchableScale>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "700",
    letterSpacing: 1,
  },
  description: {
    color: "white",
    marginTop: 10,
  },
});

export default EventDetail;
