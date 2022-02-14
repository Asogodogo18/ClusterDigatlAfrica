import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Avatar } from "react-native-paper";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import getRandomGradient from "../../Utils/getRandomColor";

export default function headerHome({}) {
  const Navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={["#34c747", "#00FFFF"]}
        start={{ x: 0.0, y: 1.0 }}
        end={{ x: 2.0, y: 2.0 }}
        style={{
          height: 60,

          width: "100%",

          elevation: 5,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../../assets/logo.png")}
            style={styles.image}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    marginTop: 5,
    height: 55,
    width: 175,
  },
});
