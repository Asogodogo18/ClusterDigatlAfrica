import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { FontAwesome, MaterialCommunityIcons, Icon } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

export default function custonDrawer(props) {
  // const progress = useDrawerProgress();

  // const translateX = Animated.interpolate(progress, {
  //   inputRange: [0, 1],
  //   outputRange: [-100, 0],
  // });

  // const Navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#464E5F",
          height: "25%",
          elevation: 2.5,
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/logo.png")}
          resizeMode="contain"
          style={{
            height: 250,
            width: 250,
            marginTop: -2,
          }}
        />
      </View>
      <DrawerContentScrollView options={{ headerShown: true }}>
        <View style={{ flex: 1, backgroundColor: "#fff", paddingTop: 10 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>

      <View style={styles.deconnection}>
        <TouchableOpacity
          style={styles.bouton}
          onPress={() => {
            props.navigation.replace("Authstack", { screen: "Connexion" });
          }}
        >
          <FontAwesome
            name="sign-out"
            size={27}
            color="#fff"
            style={{ right: 15 }}
          />
          <Text style={{ color: "#fff", fontSize: 18 }}>Deconnexion</Text>
        </TouchableOpacity>
      </View>
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
});
