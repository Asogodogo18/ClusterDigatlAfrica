import React from "react";
import { Animated, Text, FlatList, StyleSheet } from "react-native";
import { CardMembre } from "../../Components/card";
const Categories = [
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d423",
    title: "Gouvernance",
    details:
      "Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt.",
    image: require("../../../assets/imageSlider/slides1.jpeg"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-45862def",
    title: "Bureau Exécutif",
    details:
      "Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt.",
    image: require("../../../assets/imageSlider/slides3.jpeg"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb275k",
    title: "Ambassadeurs",
    details:
      "Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt.",
    image: require("../../../assets/imageSlider/slides8.jpeg"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Membres",
    details:
      "Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt.",
    image: require("../../../assets/imageSlider/slides6.jpeg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Pépinière",
    details:
      "Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt.",
    image: require("../../../assets/imageSlider/slides15.png"),
  },
  {
    id: "58694a0f-3da1-471f-bd96-145571e29d72",
    title: "Commission",
    details:
      "Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt. Sit ut laborum exercitation non ad sunt.",
    image: require("../../../assets/imageSlider/slides9.jpeg"),
  },
];

const index = ({ navigation, handleScroll }) => {
  const renderMember = ({ item }) => (
    <CardMembre item={item} navigation={navigation} />
  );
  return (
    <Animated.FlatList
      style={{ flex: 1 }}
      // onScroll={onScroll}
      showsHorizontalScrollIndicator={false}
      data={Categories}
      renderItem={renderMember}
      keyExtractor={(item) => item.id}
    />
  );
};
const styles = StyleSheet.create({});
export default index;
