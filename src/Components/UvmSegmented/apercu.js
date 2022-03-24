import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import React from "react";
import { Divider } from "react-native-paper";
const Data = [
  {
    id: "1",
    title: "INFORMATIONS PERSONNELLES",
    contenu: [
      {
        id: "1",
        nom: "Nom & Prénom",
        email: "email",
        tel: "Numero de telephone",
        pays: "pays",
        adress: "adresse",
      },
    ],
  },
  {
    id: "2",
    title: "Documents",
    contenu: [
      {
        id: "1",
        nom: "Certificat de Naissance",
        email: "Pièce d’identité",
        tel: "Dernier diplôme",
      },
    ],
  },
  {
    id: "3",
    title: "FORMATION",
    contenu: [
      {
        id: "1",
        nom: "Motivation",
        email: "Sélection de la classe",
      },
    ],
  },
];

export default function Apercu({ isCert }) {
  const renderItem = ({ item }) => {
    const { contenu } = item;
    return (
      <View>
        <View style={styles.header}>
          <Text style={{ fontWeight: "bold", fontSize: 15 }}>{item.title}</Text>
        </View>
        <View style={styles.container}>
          {contenu.map((en) => {
            return (
              <View>
                <Text>{en.nom}</Text>
                <Text>{en.email}</Text>
                <Text>{en.tel}</Text>
                <Text>{en.pays}</Text>
                <Text>{en.adress}</Text>
              </View>
            );
          })}
        </View>
      </View>
    );
  };
  return (
    <ScrollView nestedScrollEnabled contentContainerStyle={styles.contain}>
      <View style={styles.section1}>
        <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>
          Qu'apprendrez vous avec ce cours
        </Text>
        <Divider
          style={{
            marginBottom: 10,
            width: "50%",
            alignSelf: "center",
            height: 1,
            backgroundColor: "black",
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../../assets/idea.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ padding: 2 }}>
            Reprehenderit dolore consectetur consequat in deserunt ut elit id
            mollit labore incididunt nisi deserunt. Sint reprehenderit
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../../assets/idea.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ padding: 2 }}>
            Reprehenderit dolore consectetur consequat in deserunt ut elit id
            mollit labore incididunt nisi deserunt. Sint reprehenderit
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../../assets/idea.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ padding: 2 }}>
            Reprehenderit dolore consectetur consequat in deserunt ut elit id
            mollit labore incididunt nisi deserunt. Sint reprehenderit
          </Text>
        </View>

        <Image
          source={require("../../../assets/uvm.png")}
          style={{ height: 250, width: 250, alignSelf: "center" }}
        />
        <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>
          INFORMATIONS À FOURNIR
        </Text>
        <Divider
          style={{
            marginBottom: 10,
            width: "50%",
            alignSelf: "center",
            height: 1,
            backgroundColor: "black",
          }}
        />
      </View>
      <View style={[styles.section2, { display: isCert ? "none" : "flex" }]}>
        <FlatList
          nestedScrollEnabled
          data={Data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>

      <View style={styles.section3}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contain: {
    flexGrow: 1,
    backgroundColor: "white",
    padding: 10,
  },
  section1: { flex: 1 },
  section2: { flex: 1 },
  section3: { flex: 1 },
  container: {
    flex: 1,
    padding: 5,
  },
});
