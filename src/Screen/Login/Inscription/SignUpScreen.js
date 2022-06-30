import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
  Dimensions,
  ScrollView,
  ImageBackground,
  Image,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import { SharedElement } from "react-navigation-shared-element";
import { AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

const SignUpScreen = ({ navigation }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const Navigation = useNavigation();

  return (
    <KeyboardAvoidingView style={styles.container}>
      {/* <SharedElement id="bg" style={[StyleSheet.absoluteFill]}> */}
      <ImageBackground
        source={require("../../../../assets/Auth/bg1.jpg")}
        resizeMode="cover"
        style={[styles.container, StyleSheet.absoluteFill]}
      />

      <StatusBar backgroundColor="lightgreen" barStyle="dark-content" />
      <View
        style={{
          backgroundColor: "green",
          width,
          height,
          position: "absolute",
          top: 0,
          zIndex: 10,
          opacity: 0.2,
        }}
      />
      <View style={styles.header}>
        <Image
          source={require("../../../../assets/logo.png")}
          resizeMode="contain"
          style={styles.headerImg}
        />
      </View>
      <SharedElement
        id="inputbox"
        style={{
          position: "absolute",
          top: 100,
          width: "85%",
          height: 140,
          zIndex: 12,
        }}
      >
        <BlurView tint="light" intensity={45} style={styles.inputBox}>
          <View style={styles.inputRow}>
            <AntDesign name="user" size={24} color="white" />
            <TextInput
              style={styles.input}
              value={firstName}
              placeholder="Nom"
              placeholderTextColor="white"
              onChangeText={setFirstName}
            />
          </View>
          <View style={styles.inputRow}>
            <AntDesign name="user" size={24} color="white" />
            <TextInput
              style={styles.input}
              value={lastName}
              placeholder="Prénom"
              placeholderTextColor="white"
              onChangeText={setLastName}
            />
          </View>
          <View style={styles.inputRow}>
            <AntDesign name="user" size={24} color="white" />
            <TextInput
              style={styles.input}
              value={username}
              placeholder="Nom d'Utilisateur"
              placeholderTextColor="white"
              onChangeText={setUsername}
            />
          </View>
          <View style={styles.inputRow}>
            <AntDesign name="user" size={24} color="white" />
            <TextInput
              style={styles.input}
              value={email}
              keyboardType="email-address"
              placeholder="Email"
              placeholderTextColor="white"
              onChangeText={setEmail}
            />
          </View>
          <View style={styles.inputRow}>
            <AntDesign name="lock1" size={24} color="white" />
            <TextInput
              style={styles.input}
              placeholder="*******"
              placeholderTextColor="white"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
            />
          </View>
          <View style={styles.inputRow}>
            <AntDesign name="lock1" size={24} color="white" />
            <TextInput
              style={styles.input}
              placeholder="Confirmer le mot de passe"
              placeholderTextColor="white"
              value={cPassword}
              secureTextEntry
              onChangeText={setCPassword}
            />
          </View>
          <TouchableOpacity
            onPress={() => console.log("pressed me")}
            style={{
              height: 60,
              width: 60,
              backgroundColor: "white",
              borderRadius: 50,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 190,
              elevation: 5,
              right: -40,
              zIndex: 100,
            }}
          >
            <AntDesign name="arrowright" size={34} color="black" />
          </TouchableOpacity>
        </BlurView>
      </SharedElement>

      <SharedElement
        id="btnPress"
        style={{
          position: "relative",
          top: height - 270,
          width: "40%",
          height: 80,
          zIndex: 12,
        }}
      >
        <BlurView tint="light" intensity={40} style={styles.registerBtn}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ fontSize: 18, color: "white" }}>
              J'ai déjà un Compte
            </Text>
          </TouchableOpacity>
        </BlurView>
      </SharedElement>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

SignUpScreen.sharedElements = (route, otherRoute, showing) => {
  return [{ id: "inputbox" }, { id: "btnPress" }, { id: "bg" }];
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    marginTop: 5,
    height: 80,
    zIndex: 12,
  },
  headerImg: {
    height: 80,
    width: "100%",
  },
  inputBox: {
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    zIndex: 12,
  },
  inputRow: {
    flexDirection: "row",
    margin: 5,
    alignItems: "center",
  },
  input: {
    height: 60,
    padding: 15,
    width: "100%",
    color: "white",
  },
  registerBtn: {
    flex: 1,
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    zIndex: 12,
  },
});
