import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import {
  FontAwesome,
  MaterialCommunityIcons,
  Icon,
  FontAwesome5,
} from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function custonDrawer(props) {
  console.log("--------------------------------------------");
  console.log("state :", props.state);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "25%",
          justifyContent: "center",
          position: "absolute",
          left: 55,
          top: -40,
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          resizeMode="contain"
          style={{
            height: 150,
            width: 250,
          }}
        />
      </View>

      <DrawerContentScrollView
        {...props}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 75, flexGrow: 1 }}
      >
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <FontAwesome5 name="home" size={20} color="black" />
          )}
          label="Accueil"
          focused={
            props.state.index ===
            props.state.routes.findIndex((e) => e.name === "Accueil")
          }
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <FontAwesome5 name="map-marked-alt" size={20} color="black" />
          )}
          label="CDA Virtual Academy"
          focused={
            props.state.index ===
            props.state.routes.findIndex(
              (e) => e.name === "CDA Virtual Academy"
            )
          }
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("UvmScreen")}
        />

        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <FontAwesome5 name="map-marked-alt" size={20} color="black" />
          )}
          label="E-Vote"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <FontAwesome5 name="map-marked-alt" size={20} color="black" />
          )}
          label="Profile"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <FontAwesome5 name="map-marked-alt" size={20} color="black" />
          )}
          label="Notifications"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <FontAwesome5 name="map-marked-alt" size={20} color="black" />
          )}
          label="Messages"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <FontAwesome5 name="map-marked-alt" size={20} color="black" />
          )}
          label="Favoris"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <FontAwesome5 name="map-marked-alt" size={20} color="black" />
          )}
          label="Groupes"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <FontAwesome5 name="map-marked-alt" size={20} color="black" />
          )}
          label="Sujets d'actualité"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <FontAwesome5 name="map-marked-alt" size={20} color="black" />
          )}
          label="Réglages"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
      </DrawerContentScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  deconnection: {
    marginBottom: 0,
  },
  bouton: {
    height: 35,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  drawerLblStyle: {
    fontWeight: "500",
    fontSize: 18,
    marginLeft: -10,
  },
});
