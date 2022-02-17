import React from "react";
import { StyleSheet, Text, View, Pressable, Image } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function ValidateVote({ route, navigation }) {
  const { candidat } = route.params;

  const Item = ({ item }) => (
    <Pressable
      onPress={() => {
        
        console.log("successful:", candidat)
      }}
    >
      <View style={styles.item}>
        <View style={{ flex: 0.2, justifyContent: "center" }}>
          <Image style={styles.Avatar} source={item.image} />
        </View>
        <View style={{ flex: 0.8, marginLeft: 10 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.party}</Text>
        </View>
      </View>
    </Pressable>
  );
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text}>Vous avez Voté pour :</Text>
        {candidat ? <Item item={candidat} /> : null}
      </View>
      <View style={styles.content}>
        <EvilIcons name="check" size={350} color="green" />
        <Text style={styles.text}>
          Félicitation, Votre vote a été pris en compte.
        </Text>
      </View>
      <View style={styles.footer}>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Accueil")}
        >
          <Text style={styles.text}>Retour vers l'Accueil</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flex: 3,
    justifyContent: "center",
  },
  content: {
    flex: 5,
    alignItems: "center",
    justifyContent: "center",
    marginBottom:20,
  },
  footer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "lightgray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 5,
  },
  title: {
    fontSize: 24,
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "400",
    textTransform: "uppercase",
  },
  Avatar: {
    width: 56,
    height: 56,
  },
  text: {
    textAlign: "center",
    fontWeight:'700',
    fontSize: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width:'40%',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 1,
    elevation: 2,
    backgroundColor: "transparent",
    borderColor: "#00CBE7",
    borderWidth: 1,
  },
});
