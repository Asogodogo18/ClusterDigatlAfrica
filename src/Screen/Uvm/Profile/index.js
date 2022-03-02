import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from "react-native";
import React from "react";
import Layout from "../../../Utils/Layout";
import { FontAwesome5, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Divider, List } from "react-native-paper";

const BackDrop = () => {
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor: "#0D0106",
        },
      ]}
    />
  );
};
const Square = () => {
  return (
    <Animated.View
      style={{
        width: 500,
        height: 500,
        backgroundColor: "#F75C03",
        borderRadius: 356,
        position: "absolute",
        top: -280,
        left: -200,
      }}
    />
  );
};
const Profile = ({ navigation }) => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 100 }}>
      <BackDrop />
      <Square />
      <Image
        source={require("../../../../assets/profil.jpg")}
        style={styles.img}
        resizeMode="cover"
      />

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          marginTop: 150,
          left: 20,
          marginBottom: 15,
        }}
      >
        <View style={{ flex: 2 }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "white" }}>
            Cheick abba sogodogo
          </Text>
          <Text style={{ fontSize: 13, fontWeight: "300", color: "white" }}>
            abbasogodogo@gmail.com
          </Text>
          <Text style={{ fontSize: 15, fontWeight: "500", color: "white" }}>
            Licence genie logiciel
          </Text>
        </View>
        <View
          style={{
            flex: 1,
          }}
        >
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              height: 55,
              width: 55,
              padding: 15,
              backgroundColor: "orange",
              elevation: 5,
              borderRadius: 35,
            }}
          >
            <FontAwesome5 name="user-edit" size={20} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <Divider
        style={{
          marginBottom: 10,
          width: "50%",
          alignSelf: "center",
          height: 1.5,
          backgroundColor: "orange",
          elevation: 2.5,
        }}
      />
      <View style={{ flex: 1 }}>
        <List.Section>
          <List.Item
            title="Paramètres"
            titleStyle={{ color: "white" }}
            description="Gérer les paramètres de l'application"
            descriptionStyle={{ color: "white", opacity: 0.7 }}
            left={() => (
              <Ionicons name="settings-outline" size={24} color="white" />
            )}
          />
          <List.Item
            title="Examen"
            titleStyle={{ color: "white" }}
            description="Voir vos résultats d'examen"
            descriptionStyle={{ color: "white", opacity: 0.7 }}
            left={() => (
              <List.Icon color="#fff" icon="clipboard-text-play-outline" />
            )}
          />
          <List.Item
            title="Conditions d'utilisation générale"
            titleStyle={{ color: "white" }}
            left={() => (
              <List.Icon color="#fff" icon="clipboard-check-outline" />
            )}
          />
          <List.Item
            title="Politique de protection des données personelles"
            titleStyle={{ color: "white" }}
            left={() => <List.Icon color="#fff" icon="account-key-outline" />}
          />
        </List.Section>
      </View>
      <Divider
        style={{
          marginBottom: 5,
          width: "51%",
          alignSelf: "center",
          height: 1.5,
          backgroundColor: "orange",
          elevation: 2.5,
        }}
      />
      <View
        style={{
          alignSelf: "center",
        }}
      >
        <TouchableOpacity style={styles.touch} onPress={() => {}}>
          <FontAwesome name="sign-out" size={24} color="white" />
          <Text style={styles.text}>Déconnexion</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 100,
    width: 100,
    borderRadius: 70,
    borderWidth: 0.8,
    borderColor: "white",
    position: "relative",
    top: 150,
    left: 50,
  },
  touch: {
    width: 150,
    backgroundColor: "orange",
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: "center",
    elevation: 5,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    textTransform: "uppercase",
    alignContent: "center",
    color: "white",
    fontSize: 15,
  },
});
export default Profile;
