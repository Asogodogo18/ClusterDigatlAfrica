import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import Webinaires from "../../Views/webinaireViews/webinaire";
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

const Similarity = ({ opacity }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        backgroundColor: "white",
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
  );
};

export default Similarity;
