import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const cardPopulaire = () => {
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image
          source={require("../../../design/cluster.jpeg")}
          resizeMode="contain"
          style={styles.img}
        />
      </View>
      <View style={styles.bottom}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            fontWeight: "700",
            marginTop: -10,
          }}
        >
          Titre
        </Text>

        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <Text>icon-1</Text>
          <Text>icon-2</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    // width: 135,
    height: 190,
    backgroundColor: "white",
    borderRadius: 20,
    // paddingVertical: 10,
    elevation: 5,

    padding: 0,
    margin: 5,
    minWidth: 250,
    maxWidth: 300,
  },
  header: { flex: 3 },
  bottom: {
    flex: 2,
  },
  img: {
    height: "80%",
    width: "80%",
    alignSelf: "center",
  },
});

export default cardPopulaire;
