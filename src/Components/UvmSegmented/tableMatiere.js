import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Data = [
  {
    id: "1",
    title: "Ex consectetur et mollit et. Exercitation",
    chapitre: [
      {
        id: "1",
        titre: "Ex consectetur et mollit et. Exercitation do culpa aliquip . ",
      },
      {
        id: "2",
        titre: "Ex consectetur et mollit et. Exercitation do culpa aliquip . ",
      },
      {
        id: "3",
        titre: "Ex consectetur et mollit et. Exercitation do culpa aliquip . ",
      },
    ],
  },
  {
    id: "2",
    title: "Ex consectetur et mollit et. Exercitation",
    chapitre: [
      {
        id: "1",
        titre: "Ex consectetur et mollit et. Exercitation do culpa aliquip . ",
      },
      {
        id: "2",
        titre: "Ex consectetur et mollit et. Exercitation do culpa aliquip . ",
      },
      {
        id: "3",
        titre: "Ex consectetur et mollit et. Exercitation do culpa aliquip . ",
      },
    ],
  },
  {
    id: "3",
    title: "Ex consectetur et mollit et. Exercitation",
    chapitre: [
      {
        id: "1",
        titre: "Ex consectetur et mollit et. Exercitation do culpa aliquip . ",
      },
      {
        id: "2",
        titre: "Ex consectetur et mollit et. Exercitation do culpa aliquip . ",
      },
      {
        id: "3",
        titre: "Ex consectetur et mollit et. Exercitation do culpa aliquip . ",
      },
    ],
  },
];

export default function TableMatiere() {
  const Navigation = useNavigation();
  const renderItem = ({ item }) => {
    const { chapitre } = item;
    return (
      <View style={{ padding: 10, marginVertical: 5 }}>
        <View style={styles.header}>
          <Text style={{ textTransform: "uppercase", fontSize: 13 }}>
            Partie {item.id}
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{item.title}</Text>
        </View>
        <View style={styles.container}>
          {chapitre.map((en) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  Navigation.navigate("CoursView");
                }}
                style={{
                  alignItems: "center",
                  height: 70,
                  padding: 10,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <FontAwesome5 name="check-circle" size={25} color="orange" />
                <Text style={{ padding: 5 }}> {en.titre}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    );
  };
  return (
    <FlatList
      nestedScrollEnabled
      data={Data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  header: {},
  container: {
    backgroundColor: "white",
  },
});
