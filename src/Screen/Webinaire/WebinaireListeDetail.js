import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Animated,
  Share,
} from "react-native";
import { SharedElement } from "react-navigation-shared-element";
import { Divider } from "react-native-paper";

import * as Animatable from "react-native-animatable";
import { AntDesign, Ionicons } from "@expo/vector-icons";

import UserCard from "../../Components/shared/userCard";
import SpeakerCard from "../../Components/shared/speakerCard";
import Similarity from "../../Components/shared/similarity";

const { width, height } = Dimensions.get("screen");
const onShare = async () => {
  try {
    const result = await Share.share({
      message:
        "React Native | A framework for building native apps using React",
    });
    if (result.action === Share.sharedAction) {
      if (result.activityType) {
        // shared with activity type of result.activityType
      } else {
        // shared
      }
    } else if (result.action === Share.dismissedAction) {
      // dismissed
    }
  } catch (error) {
    alert(error.message);
  }
};

const WebinaireListe = ({ navigation, route }) => {
  const { item } = route.params;
  const scrollY = React.useRef(new Animated.Value(0)).current;
  const inputRange = [0, 300, height];
  const opacity = scrollY.interpolate({
    inputRange,
    outputRange: [1, 0, 0],
  });
  return (
    <View style={styles.contain}>
      <TouchableOpacity
        style={{
          position: "absolute",
          padding: 12,
          top: 0,
          left: 5,
          zIndex: 5,
        }}
        onPress={() => navigation.naviagte("Appstack")}
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
        onPress={onShare}
      >
        <AntDesign name="sharealt" size={30} color="white" />
      </TouchableOpacity>

      <SharedElement id={`item.${item.id}.Image`}>
        <Image
          source={require("../../../assets/bg.jpg")}
          style={[
            StyleSheet.absoluteFillObject,
            {
              resizeMode: "cover",
              width: width,
              height: height / 2,
            },
          ]}
        />
      </SharedElement>
      <View style={{ height: 60 }} />
      <Animated.ScrollView
        stickyHeaderHiddenOnScroll={true}
        stickyHeaderIndices={[0]}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: true }
        )}
        scrollEnabled
        contentContainerStyle={{
          alignItems: "center",
          paddingTop: height / 3 - 50,
        }}
      >
        <SharedElement id={`item.${item.id}.UserCard`} style={{ width: "92%" }}>
          <UserCard navigation={navigation} />
        </SharedElement>

        <Animatable.View
          style={{ padding: 20, zIndex: 0, backgroundColor: "white", opacity }}
          animation="fadeInUp"
          duration={800}
          delay={200}
        >
          <Animated.Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 10,
              textAlign: "center",
              opacity,
            }}
          >
            Entrepreneurs à Impact
          </Animated.Text>
          <Divider
            style={{
              backgroundColor: "#2c9644",
              height: 5,
              width: 70,
              alignSelf: "center",
              marginBottom: 10,
              borderBottomLeftRadius: 16,
              borderTopRightRadius: 18,
            }}
          />
          <Animated.Text
            style={{
              fontSize: 15,
              fontWeight: "400",
              marginBottom: 10,
              opacity,
            }}
          >
            Le Conseil présidentiel pour l’Afrique a réuni le #PassAfrica, Meet
            Africa et le Programme « Entrepreneuriat pour tous » afin d’apporter
            des solutions concrètes aux entrepreneurs de la diaspora partout en
            France ! La prochaine étape à Lille se déroulera le 29 janvier
            prochain de 15h à 18h en centre-ville (lieu restant à définir) avec
            tous les acteurs de l’entrepreneuriat de la région ! Retrouvez
            également le Coordonnateur du CPA Wilfrid Lauriano do Rego aux côtés
            d’entrepreneurs lillois, tels que les fondateurs des Tontons Afros,
            Jeannine Fischer la créatrice de Wawa L'asso, ou encore Abderrahim
            Taoufikallah, le fondateur de FeedMi France.
          </Animated.Text>
        </Animatable.View>
        <SpeakerCard />

        <Similarity />
      </Animated.ScrollView>
    </View>
  );
};
WebinaireListe.sharedElements = (route, otherRoute, showing) => {
  const { item } = route.params;

  return [{ id: `item.${item.id}.Image` }, { id: `item.${item.id}.UserCard` }];
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
export default WebinaireListe;
