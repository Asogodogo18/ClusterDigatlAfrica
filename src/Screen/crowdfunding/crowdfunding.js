import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  ActivityIndicator,
  Image,
} from "react-native";
import { Chip } from "react-native-paper";
import Animated, {
  FadeInRight,
  FadeOutLeft,
  BounceInRight,
  Transition,
} from "react-native-reanimated";

import { FiltreCrowdfunding } from "../../Utils/filter";
import Explore from "../../Views/CrowdFunding/explore";
import Discover from "../../Views/CrowdFunding/discover";
import FilteredView from "../../Views/CrowdFunding/FilteredView";
import CROWDFUNDING_DATA from "../../Data/crowdfunding";

const DATA = [
  {
    id: "7",
    name: "Tout",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "1",
    name: "Animaux",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "2",
    name: "Autre",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "3",
    name: "Business",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "4",
    name: "Charité",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "5",
    name: "Communauté",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "6",
    name: "Compétitions",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "7",
    name: "Créatif",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "8",
    name: "Education",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "9",
    name: "Événements",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "10",
    name: "Famille",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "11",
    name: "Foi",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "12",
    name: "Médical",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "13",
    name: "Mémoriaux",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "14",
    name: "Sports",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "15",
    name: "Urgences",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "16",
    name: "Voeux",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
  {
    id: "17",
    name: "Voyage",
    icon: "https://don.clusterdigitalafrica.com/upload/images/categorie/default.png",
  },
];
const Crowdfunding = ({ navigation }) => {
  const [IsActive, setIsActive] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filter, setFilter] = useState("");
  const [filteredData, setfilteredData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setfilteredData(FiltreCrowdfunding(CROWDFUNDING_DATA, filter));
    setLoading(false);
    return () => {
      setfilteredData(null);
    };
  }, [filter]);

  return (
    <ScrollView contentContainerStyle={styles.contain}>
      <ScrollView horizontal contentContainerStyle={styles.chip}>
        {DATA.map((item, index) => {
          return (
            <Chip
              selected={IsActive == index ? true : false}
              style={styles.chipItem}
              avatar={<Image source={{ uri: `${item.icon}` }} />}
              onPress={() => {
                setIsActive(index);
                setFilter(item.name === "Tout" ? "" : item.name);
              }}
            >
              {item.name}
            </Chip>
          );
        })}
      </ScrollView>
      <Animated.View style={{ flex: 9 }}>
        {filter === "" && (
          <Animated.View
            exiting={FadeOutLeft}
            entering={BounceInRight}
            layout={Transition}
          >
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Decouvrir</Text>
              <Discover navigation={navigation} />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Explore</Text>
              <Explore navigation={navigation} />
            </View>
          </Animated.View>
        )}
        {filter !== "" ? (
          loading == true ? (
            <Animated.View
              exiting={FadeOutLeft}
              entering={BounceInRight}
              layout={Transition}
              style={{ flex: 1, justifyContent: "center" }}
            >
              <ActivityIndicator size="large" color="lightgreen" />
            </Animated.View>
          ) : (
            <FilteredView data={filteredData} navigation={navigation} />
          )
        ) : null}
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexGrow: 1,
    backgroundColor: "#fff",
    paddingTop: 15,
  },
  sectionTitle: {
    marginBottom: 10,
    fontSize: 30,
    fontWeight: "bold",
    letterSpacing: 1,
  },
  section: {
    flex: 1,
    padding: 20,
  },
  chip: {
    flexDirection: "row",
    padding: 2,
    flexGrow: 1,
  },
  chipItem: {
    marginHorizontal: 5,
    height: 40,
  },
});
export default Crowdfunding;
