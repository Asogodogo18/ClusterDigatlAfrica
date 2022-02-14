import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  KeyboardAvoidingView,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput, Divider, RadioButton } from "react-native-paper";

export default function Donation(props) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [Email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [sum, setSum] = useState("");
  const [comment, setComment] = useState("");
  const [value, setValue] = React.useState("first");

  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <Text
        style={{
          color: "white",
          fontSize: 32,
          fontWeight: "600",
          letterSpacing: 1,
          textAlign: "center",
          textTransform: "uppercase",
        }}
      >
        DONATION
      </Text>
      <Divider
        style={{
          backgroundColor: "white",
          width: "80%",
          alignSelf: "center",
          height: 2,
        }}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}>
        <View style={{ flex: 1, padding: 20, justifyContent: "center" }}>
          <Text style={styles.sectionHeader}>Informations</Text>
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
          <Text style={styles.sectionHeader}>Moyen de paiement</Text>
          <RadioButton.Group
            onValueChange={(newValue) => setValue(newValue)}
            value={value}
          >
            <View style={styles.radioSection}>
              <RadioButton color="green" uncheckedColor="white" value="first" />
              <Text style={styles.radioText}>OrangeMoney</Text>
            </View>
            <View style={styles.radioSection}>
              <RadioButton
                color="green"
                uncheckedColor="white"
                value="second"
              />
              <Text style={styles.radioText}>PayPal</Text>
            </View>
          </RadioButton.Group>
        </View>
        <View style={{ flex: 1, padding: 10, margin: 5 }}>
          <Text style={styles.sectionHeader}>Montant</Text>
          <TextInput
            keyboardType="phone-pad"
            style={styles.User}
            left={<TextInput.Affix text="CFA" />}
          />

          <TextInput
            placeholder="Ecrire un petit commentaire (Obtionnelle)"
            multiline
            style={[styles.User, { height: 100 }]}
            left={() => (
              <View style={{ padding: 10, justifyContent: "center" }}>
                <Text
                  style={{
                    color: "black",
                    opacity: 0.8,
                    textTransform: "uppercase",
                  }}
                >
                  CFA
                </Text>
              </View>
            )}
          />
          <Divider
            style={{
              backgroundColor: "white",
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
          <TouchableOpacity style={styles.btn}>
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
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    letterSpacing: 1,
    textTransform: "capitalize",
    marginBottom: 5,
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
});
