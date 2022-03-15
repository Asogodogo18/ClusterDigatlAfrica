import React from "react";
import { View, Text, Image, StyleSheet, Platform } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";

export default function custonDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "25%",
          justifyContent: "center",
          position: "absolute",
          left: 55,
          top: Platform.OS === "ios" ? -30 : -40,
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
            <Image
              source={require("../../assets/icons/home.png")}
              style={{ height: 30, width: 30 }}
            />
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
            <Image
              source={require("../../assets/icons/student.png")}
              style={{ height: 30, width: 30 }}
            />
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
            <Image
              source={require("../../assets/LOGO VACA.png")}
              style={{ height: 30, width: 30 }}
            />
          )}
          label="E-Vote"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <Image
              source={require("../../assets/icons/profil.png")}
              style={{ height: 30, width: 30 }}
            />
          )}
          label="Profile"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Profiles")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <Image
              source={require("../../assets/icons/notification.png")}
              style={{ height: 30, width: 30 }}
            />
          )}
          label="Notifications"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Notification")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <Image
              source={require("../../assets/icons/message.png")}
              style={{ height: 30, width: 30 }}
            />
          )}
          label="Messages"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Message")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <Image
              source={require("../../assets/icons/favoris.png")}
              style={{ height: 30, width: 30 }}
            />
          )}
          label="Favoris"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Favoris")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <Image
              source={require("../../assets/icons/groupe.png")}
              style={{ height: 30, width: 30 }}
            />
          )}
          label="Groupes"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Groupe")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <Image
              source={require("../../assets/icons/actualite.png")}
              style={{ height: 25, width: 25 }}
            />
          )}
          label="Sujets d'actualité"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Actualite")}
        />
        <DrawerItem
          icon={({ focused, couleur, size }) => (
            <Image
              source={require("../../assets/icons/reglage.png")}
              style={{ height: 30, width: 30 }}
            />
          )}
          label="Réglages"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Reglage")}
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
