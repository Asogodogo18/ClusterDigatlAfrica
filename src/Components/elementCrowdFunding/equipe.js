import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import getRandomColor from "../../Utils/getRandomColor";

const equipe = () => {
  return (
    <ScrollView contentContainerStyle={styles.contain}>
      <View style={styles.Card}>
        <View style={{ flex: 1 }}>
          <Image
            resizeMode="cover"
            source={require("../../../assets/profil.jpg")}
            style={styles.img}
          />
        </View>

        <View style={{ flex: 1, marginVertical: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", letterSpacing: 1 }}>
            Titre
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "400", letterSpacing: 1 }}>
            Subtitle
          </Text>
        </View>
      </View>
      <View style={styles.Card}>
        <View style={{ flex: 1 }}>
          <Image
            resizeMode="cover"
            source={require("../../../assets/profil.jpg")}
            style={styles.img}
          />
        </View>

        <View style={{ flex: 1, marginVertical: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", letterSpacing: 1 }}>
            Titre
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "400", letterSpacing: 1 }}>
            Subtitle
          </Text>
        </View>
      </View>
      <View style={styles.Card}>
        <View style={{ flex: 1 }}>
          <Image
            resizeMode="cover"
            source={require("../../../assets/profil.jpg")}
            style={styles.img}
          />
        </View>

        <View style={{ flex: 1, marginVertical: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", letterSpacing: 1 }}>
            Titre
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "400", letterSpacing: 1 }}>
            Subtitle
          </Text>
        </View>
      </View>
      <View style={styles.Card}>
        <View style={{ flex: 1 }}>
          <Image
            resizeMode="cover"
            source={require("../../../assets/profil.jpg")}
            style={styles.img}
          />
        </View>

        <View style={{ flex: 1, marginVertical: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", letterSpacing: 1 }}>
            Titre
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "400", letterSpacing: 1 }}>
            Subtitle
          </Text>
        </View>
      </View>
      <View style={styles.Card}>
        <View style={{ flex: 1 }}>
          <Image
            resizeMode="cover"
            source={require("../../../assets/profil.jpg")}
            style={styles.img}
          />
        </View>

        <View style={{ flex: 1, marginVertical: 25 }}>
          <Text style={{ fontSize: 20, fontWeight: "700", letterSpacing: 1 }}>
            Titre
          </Text>
          <Text style={{ fontSize: 18, fontWeight: "400", letterSpacing: 1 }}>
            Subtitle
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexGrow: 1,
    alignItems: "center",
    paddingBottom: 10,
  },
  Card: {
    height: 150,
    width: 300,
    elevation: 5,
    shadowColor: "black",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: getRandomColor("z"),
    borderRadius: 10,
    marginTop: 5,
    flexDirection: "row",
    padding: 10,
    alignContent: "space-between",
  },
  img: {
    height: 100,
    width: 100,
    borderRadius: 50,
    alignSelf: "center",
    marginVertical: 5,
  },
});
export default equipe;
