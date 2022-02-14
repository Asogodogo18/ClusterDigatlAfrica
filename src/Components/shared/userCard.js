import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { AntDesign, FontAwesome, Entypo } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { LinearGradient } from "expo-linear-gradient";
import Inscription from "../../Screen/Inscription";
const { height, width } = Dimensions.get("screen");

const userCard = ({ navigation }) => {
  const [isInscription, setInscription] = useState(false);
  const [isOption, setisOption] = useState(false);
  const InscriptionModal = () => {
    setInscription(!isInscription);
  };
  return (
    <View style={styles.contain}>
      <View style={styles.header}>
        <View style={styles.avatarBox}>
          <Image
            style={styles.avatar}
            source={require("../../../assets/profil.jpg")}
          />
        </View>
        <View style={{ flex: 4, justifyContent: "center", marginLeft: 20 }}>
          <Text style={styles.title}>UVM</Text>
          <Text style={styles.subtitle}>organisateur</Text>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.contact}>
          {" "}
          Email:{" "}
          <Text style={styles.innerContact}>
            info@clusterdigitalafrica.com
          </Text>{" "}
        </Text>
        <Text style={styles.contact}>
          {" "}
          Téléphone : <Text style={styles.innerContact}>83692395</Text>{" "}
        </Text>
      </View>
      <View style={styles.footer}>
        <View
          style={{
            height: 30,
            width: 80,
            padding: 5,
            backgroundColor: "#E1E9FF",
          }}
        >
          <Text style={styles.date}>29-01-2022</Text>
        </View>
        <View style={{ elevation: 5 }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              navigation.navigate("Inscription", {
                // item: presentation,
              });
            }}
          >
            <Text style={styles.btnText}>S'inscrire</Text>
            <AntDesign name="login" size={20} color="#2c9644" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 30,
            width: 70,
            padding: 5,
            backgroundColor: "#FFE2E5",
          }}
        >
          <Text style={styles.date}>13:00:00</Text>
        </View>
      </View>
      <Modal
        style={styles.modalContainer}
        onBackdropPress={InscriptionModal}
        onBackButtonPress={InscriptionModal}
        isVisible={isInscription}
        // onSwipeComplete={toggleModal3}
        // swipeDirection={["up", "down"]}
      >
        <Inscription titre="Webimaire" navigation={navigation} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    display: "flex",
    padding: 20,
    height: 220,
    width: "100%",
    backgroundColor: "#FFF",
    borderRadius: 0,
    elevation: 5,
    borderRadius: 5,
  },
  header: {
    flex: 4,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginBottom: 5,
  },
  content: {
    flex: 3,
    justifyContent: "center",
    marginBottom: 5,
  },
  footer: {
    flex: 2,
    flexDirection: "row",
    // justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 0,
  },
  avatarBox: {
    flex: 2,
    justifyContent: "center",
    maxHeight: 80,
    maxWidth: 80,
    overflow: "hidden",
    borderRadius: 100,
  },
  avatar: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    overflow: "hidden",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "400",
    color: "gray",
  },
  contact: {
    fontSize: 15,
    fontWeight: "400",
    color: "black",
    opacity: 0.8,
  },
  innerContact: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    opacity: 0.8,
  },
  button: {
    width: 130,
    height: 35,
    alignSelf: "center",
    alignItems: "center",
    borderRadius: 8,
    marginHorizontal: 5,
    padding: 5,
    // backgroundColor: "#2c9644",
    borderWidth: 2,
    borderColor: "#2c9644",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  btnText: {
    textTransform: "uppercase",
    fontSize: 15,
    letterSpacing: 1,
    color: "#2c9644",
  },
  date: {
    fontSize: 12.5,
  },
  modalContainer: {
    height: height / 1.2,
    width: width,
    backgroundColor: "white",
    alignSelf: "center",
  },
});

export default userCard;
