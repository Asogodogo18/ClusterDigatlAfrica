import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import Header from "../../Components/header";

import { TextInput, Divider, RadioButton } from "react-native-paper";
const { width, height } = Dimensions.get("screen");

export default function Index({ navigation }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [Email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sum, setSum] = useState("");
  const [comment, setComment] = useState("");
  const [value, setValue] = React.useState("first");
  const [quantity, setQuantity] = useState(0);

  function addTicket() {
    setQuantity(quantity + 1);
  }
  function removeTicket() {
    quantity == 0 ? null : setQuantity(quantity - 1);
  }
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <StatusBar hidden />
      <View>
        <LinearGradient
          colors={["lightgreen", "green"]}
          start={{ x: 1.0, y: 1.0 }}
          end={{ x: 0.0, y: 1.0 }}
          style={{
            height: 40,

            width: "100%",

            elevation: 5,
          }}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <TouchableOpacity
              style={{
                position: "absolute",
                padding: 5,
                top: 0,
                left: 5,
                zIndex: 5,
              }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="arrow-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontSize: 25,
                fontWeight: "600",
                letterSpacing: -1,
                textAlign: "center",
                // textTransform: "uppercase",
                padding: 0,
              }}
            >
              Evenement
              {/* {props.titre} */}
            </Text>
          </View>
        </LinearGradient>
      </View>
      <Image
        source={require("../../../assets/ImageWebinaire1.jpg")}
        style={styles.img}
      />

      <Divider
        style={{
          backgroundColor: "#77ed80",
          width: "80%",
          alignSelf: "center",
          height: 5,
          opacity: 0.9,
          borderTopRightRadius: 20,
          borderBottomLeftRadius: 20,
          margin: 10,
        }}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 0 }}>
        <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
          <Text
            style={{
              color: "black",
              fontSize: 32,
              fontWeight: "600",
              letterSpacing: 1,
              textAlign: "center",
              textTransform: "uppercase",
              marginTop: -20,
              marginBottom: 0,
            }}
          >
            Inscription
          </Text>
          <TextInput
            mode="outlined"
            label="Nom"
            activeOutineColor="green"
            outlineColor="lightgreen"
            style={styles.User}
            onChangeText={(text) => setName(text)}
          />
          <TextInput
            mode="outlined"
            label="Prénom"
            activeOutineColor="green"
            outlineColor="lightgreen"
            placeholder="Prénom"
            style={styles.User}
            onChangeText={(text) => setSurname(text)}
          />
          <TextInput
            mode="outlined"
            label="Email"
            activeOutineColor="green"
            outlineColor="lightgreen"
            keyboardType="email-address"
            style={styles.User}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            mode="outlined"
            label="Pays"
            activeOutineColor="green"
            outlineColor="lightgreen"
            style={styles.User}
            onChangeText={(text) => setCountry(text)}
          />
          <TextInput
            mode="outlined"
            label="Téléphone"
            keyboardType="phone-pad"
            activeOutineColor="green"
            outlineColor="lightgreen"
            style={styles.User}
            onChangeText={(text) => setPhoneNumber(text)}
          />
        </View>
        <View style={{ flex: 1, padding: 10 }}>
          <Text style={styles.sectionHeader}>Ticket</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <TouchableOpacity style={styles.touche} onPress={removeTicket}>
              <Text>-</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 18, fontWeight: "700" }}>{quantity}</Text>

            <TouchableOpacity style={styles.touche} onPress={addTicket}>
              <Text style={{ justifyContent: "center" }}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, padding: 10, margin: 5 }}>
          <Divider
            style={{
              backgroundColor: "lightgreen",
              width: "80%",
              alignSelf: "center",
              height: 2,
            }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              throw new Error("Ceci est un test de generer des erreurs");
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Valider
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
const styles = StyleSheet.create({
  User: {
    backgroundColor: "white",

    width: "100%",
    height: 40,
    borderRadius: 10,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 0,
  },
  sectionHeader: {
    color: "black",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "capitalize",
    marginBottom: 5,
    textAlign: "center",
  },
  radioText: {
    fontWeight: "400",
    fontSize: 15,
    color: "white",
    letterSpacing: 1,
  },
  radioSection: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    backgroundColor: "green",
    height: 40,
    width: 150,
    borderRadius: 20,
    justifyContent: "center",
  },
  img: {
    height: height / 3.5,
    width: "100%",
    resizeMode: "cover",
    flexGrow: 1,
    alignSelf: "center",
  },
  touche: {
    height: 50,
    width: 50,
    backgroundColor: "lightgreen",
    elevation: 5,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
});
