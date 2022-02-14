import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  SafeAreaView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";

const SplashScreen = ({ navigation }) => {
  const { colors } = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#009387" barStyle="light-content" />
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          duraton="1500"
          source={require("../../../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>
      <Animatable.View
        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
          },
        ]}
        animation="fadeInUpBig"
      >
        <Text
          style={[
            styles.title,
            {
              color: colors.text,
            },
          ]}
        >
          Restez connecté avec tout le monde!
        </Text>
        <Text style={styles.text}>Connectez-vous avec un compte</Text>
        <SafeAreaView style={styles.button}>
          <TouchableOpacity onPress={() => navigation.navigate("Connexion")}>
            <View style={styles.signIn}>
              <Text style={styles.textSign}>Commencer</Text>
              <MaterialIcons name="navigate-next" color="#fff" size={20} />
            </View>
          </TouchableOpacity>
        </SafeAreaView>
      </Animatable.View>
    </SafeAreaView>
  );
};

export default SplashScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.5;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c9644",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  button: {
    alignItems: "flex-end",
    marginTop: 30,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    backgroundColor: "#28a745",
    borderRadius: 20,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: {
      height: 50,
      width: 50,
    },
    shadowOpacity: 0.8,
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
});
