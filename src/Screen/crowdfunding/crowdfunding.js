import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from "react-native";
import { Chip } from "react-native-paper";

import Explore from "../../Views/CrowdFunding/explore";
import Discover from "../../Views/CrowdFunding/discover";
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
  const [display, setDisplay] = useState(0);

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
                setIsActive(index),
                  display !== 0 ? setDisplay(index) : setDisplay(index);
              }}
            >
              {item.name}
            </Chip>
          );
        })}
      </ScrollView>
      {display == 0 && (
        <View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Decouvrir</Text>
            <Discover navigation={navigation} />
          </View>
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Explore</Text>
            <Explore navigation={navigation} />
          </View>
        </View>
      )}
      {display == 1 && <Text>2</Text>}
      {display == 2 && <Text>3</Text>}
      {display == 3 && <Text>4</Text>}
      {display == 4 && <Text>5</Text>}
      {display == 5 && <Text>6</Text>}
      {display == 6 && <Text>7</Text>}
      {display == 7 && <Text>8</Text>}
      {display == 8 && <Text>9</Text>}
      {display == 9 && <Text>10</Text>}
      {display == 10 && <Text>11</Text>}
      {display == 11 && <Text>12</Text>}
      {display == 12 && <Text>13</Text>}
      {display == 13 && <Text>14</Text>}
      {display == 14 && <Text>15</Text>}
      {display == 15 && <Text>16</Text>}
      {display == 16 && <Text>17</Text>}
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
    justifyContent: "space-evenly",
    padding: 2,
    marginVertical: 5,
  },
  chipItem: {
    marginHorizontal: 5,
  },
});
export default Crowdfunding;
