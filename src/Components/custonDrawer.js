import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { FontAwesome, MaterialCommunityIcons, Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function custonDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          height: "25%",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          resizeMode="contain"
          style={{
            height: 250,
            width: 150,
          }}
        />
      </View>
      <DrawerContentScrollView {...props} showsVerticalScrollIndicator={false}>
        <DrawerItem
          label="Accueil"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          label="CDA Virtual Academy"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("UvmScreen")}
        />
        <DrawerItem
          label="E-Vote"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          label="Profile"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          label="Notifications"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          label="Messages"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          label="Favoris"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          label="Groupes"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
          label="Sujets d'actualité"
          labelStyle={styles.drawerLblStyle}
          onPress={() => props.navigation.navigate("Accueil")}
        />
        <DrawerItem
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
    fontSize: 20,
  },
});
