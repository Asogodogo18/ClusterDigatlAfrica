import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  Pressable,
  Image,
  Platform,
  ScrollView,
} from "react-native";
import Animated from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";

import ImageSlider from "../../Components/imageSlider";
import Data from "../../Utils/data";
import Segmented from "../../Views/segmentViews";
import Evenement from "../../Views/eventViews";

import Webinaire from "../../Views/webinaireViews";
import { SharedElement } from "react-navigation-shared-element";
import HeaderHome from "../../Components/headerHome/headerHome";
import Newsfeed from "../../Views/NewsFeed/newsfeed";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const IS_IPHONE_X = SCREEN_HEIGHT === 812 || SCREEN_HEIGHT === 896;
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? (IS_IPHONE_X ? 44 : 20) : 0;
const HEADER_HEIGHT = Platform.OS === "ios" ? (IS_IPHONE_X ? 90 : 100) : 250;
const NAV_BAR_HEIGHT = HEADER_HEIGHT - STATUS_BAR_HEIGHT;

const { width } = Dimensions.get("window");

// const Navigation = useNavigation();
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
    id: "58694a0f-3da1-471f-bd96-14571rrdfde29d423",
    title: "Presentation",
    image: require("../../../assets/icons/12.png"),
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

    image: require("../../../assets/icons/biography.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Levee de Fonds",
    image: require("../../../assets/icons/crowdfund.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d25",
    title: "Start-up",
    image: require("../../../assets/icons/startup.png"),
  },
  {
    id: "56gh74lm-3da1-471f-bd96-145571e29d75",
    title: "Partenaires",
    image: require("../../../assets/icons/partners.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d75",
    title: "CDA Academy",
    image: require("../../../assets/icons/logo_uvn.png"),
  },
];

const Index = (props) => {
  const { navigation } = props;
  const y = new Animated.Value(0);

  return (
    <SafeAreaView style={{}}>
      <StatusBar
        auto
        // barStyle="dark"
        // animated={true}
        // backgroundColor="#2c9644"
        hidden
      />
      <View
        style={{
          position: "absolute",
          zIndex: 5,
          top: Platform.OS == "ios" ? 30 : 0,
          left: 0,
          right: 0,
          width: width,
        }}
      >
        <HeaderHome />
      </View>

      {/* <TouchableOpacity
        style={styles.navContainer}
        onPress={() => navigation.openDrawer()}
      >
        <Ionicons name="ios-menu" size={40} color="white" />
      </TouchableOpacity> */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        stickyHeaderHiddenOnScroll={true}
        nestedScrollEnabled
        stickyHeaderIndices={[1]}
        contentContainerStyle={{
          marginTop: Platform.OS == "ios" ? 45 : 60,
          flexGrow: 1,
          paddingBottom: 60,
        }}
      >
        <ImageSlider data={Data} style={{ flexGrow: 1, height: 250 }} />
        <View style={{ elevation: 8, backgroundColor: "" }}>
          <ScrollView
            horizontal
            contentContainerStyle={{
              height: 70,
              flexDirection: "row",
              backgroundColor: "white",
            }}
            showsHorizontalScrollIndicator={false}
          >
            {Categories.map((item) => (
              <LinearGradient
                key={`${item.id}`}
                colors={["#34c747", "#00FFFF"]}
                start={{ x: 0.0, y: 0.0 }}
                end={{ x: 2.0, y: 0.0 }}
                style={[
                  styles.item,
                  {
                    elevation: 5,
                    shadowColor: "black",
                    shadowOffset: {
                      height: 10,
                      width: 10,
                    },
                    shadowOpacity: 0.5,
                  },
                ]}
              >
                <TouchableOpacity
                  key={item.id}
                  activeOpacity={0.8}
                  style={styles.item}
                  onPress={() => {
                    // navigation.setOptions({ title: `${item.title}` });
                    navigation.navigate("Details", { item: item });
                  }}
                >
                  <View
                    style={{
                      height: "100%",
                      width: "100%",
                      justifyContent: "center",
                      // backgroundColor: "white",
                      padding: 10,
                    }}
                  >
                    <SharedElement id={`item.${item.id}.icon`} style={{}}>
                      <Image style={styles.Avatar} source={item.image} />
                    </SharedElement>
                  </View>
                  {/* <View
                    style={{
                      height: "30%",
                      padding: 10,
                    }}
                  >
                    <Text style={styles.title}>{item.title}</Text>
                  </View> */}
                </TouchableOpacity>
              </LinearGradient>
            ))}
          </ScrollView>
        </View>
        <View
          style={{
            position: "relative",
            top: Platform.OS === "ios" ? 20 : 10,
            alignSelf: "center",
            width: 40,
            height: 5,
            backgroundColor: "green",
            borderRadius: 15,
            marginBottom: 10,
          }}
        />
        <View
          style={{
            paddingTop: 30,
            borderTopLeftRadius: 36,
            borderTopRightRadius: 36,
          }}
        >
          <Segmented navigation={navigation} />
          <Evenement
            navigation={navigation}
            title="Evenement A Venir"
            isNavigation={true}
            horizontal={true}
          />
          <Webinaire
            navigation={navigation}
            title="Webinaire A Venir"
            isNavigation={true}
            horizontal={true}
          />
        </View>
        {/* ici on appelle le component pour le rendu de la partie fil d'actualite */}
        <Newsfeed />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainer: {
    flexGrow: 1,
  },
  navContainer: {
    position: "absolute",
    top: 10,
    left: 10,
  },
  // statusBar: {
  //   height: STATUS_BAR_HEIGHT,
  //   backgroundColor: "#28a745",
  // },

  titleStyle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
  item: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    marginHorizontal: 5,
    // overflow: "hidden",
    borderRadius: Platform.OS === "android" ? 160 : 25,
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
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default Index;
