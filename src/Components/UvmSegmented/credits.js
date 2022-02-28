import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

export default function Credits() {
  return (
    <View style={styles.contain}>
      <View style={{ backgroundColor: "white", height: 190, elevation: 5 }}>
        <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
          Le Professeur
        </Text>
        <View style={{ padding: 10, flexDirection: "row" }}>
          <Image
            source={require("../../../assets/profil.jpg")}
            resizeMode="cover"
            style={styles.img}
          />
          <Text style={{ fontWeight: "bold", marginTop: 35, left: 10 }}>
            Cheick abba sogodogo
          </Text>
        </View>
      </View>
      <View style={{ height: 190 }}>
        <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
          créé par
        </Text>
        <View style={{ padding: 10, flexDirection: "row" }}>
          <Image
            source={require("../../../assets/cda.png")}
            resizeMode="cover"
            style={styles.img1}
          />
          <Text style={{ fontWeight: "bold", marginTop: 35, left: 10 }}>
            CDA Virtuel Academie
          </Text>
        </View>
        <Text style={{ padding: 10 }}>mis à jour le 28/02/2022</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  contain: {
    flex: 1,
    padding: 10,
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    padding: 10,
  },
  img1: { height: 100, width: 100, borderRadius: 20 },
});
