import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

import { Feather, Ionicons } from "@expo/vector-icons";
import { Divider } from "react-native-paper";
import Header from "../../Components/header";

const Index = () => {
  const [currentLoader, setCurrentLoader] = useState(null);
  const AnimatedScroll = Animatable.createAnimatableComponent(ScrollView);
  const handlePress = (loader) => {
    setCurrentLoader(loader);
  };

  if (!currentLoader) {
    return (
      <AnimatedScroll
        animation="slideInLeft"
        stickyHeaderHiddenOnScroll={true}
        nestedScrollEnabled
        stickyHeaderIndices={[0]}
        contentContainerStyle={styles.contain}
      >
        <View style={{ height: 100 }}>
          <Header
            title="Paramètres de profil"
            icon={require("../../../assets/cda.png")}
            color="lightgray"
            height={60}
            width={60}
          />
        </View>
        <View style={styles.section1}>
          <Text style={styles.titleSection}>Paramètres généraux du profil</Text>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handlePress("username")}
          >
            <Text>Non D'utilisateur</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text>Cheick abba Sogodogo - @Asogodogo18</Text>
              <Feather name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "gray",
              width: "100%",
              alignSelf: "center",
              height: 0.5,
            }}
          />
          <TouchableOpacity
            style={styles.item}
            onPress={() => handlePress("email")}
          >
            <Text>Adresse électronique</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text>abbasogodogo@gmail.com</Text>
              <Feather name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "gray",
              width: "100%",
              alignSelf: "center",
              height: 0.5,
            }}
          />
          <TouchableOpacity
            style={styles.item}
            onPress={() => handlePress("website")}
          >
            <Text>Adresse URL du site Web</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text>Vous n'avez pas encore déterminé l'URL....</Text>
              <Feather name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "gray",
              width: "100%",
              alignSelf: "center",
              height: 0.5,
            }}
          />
          <TouchableOpacity
            style={styles.item}
            onPress={() => handlePress("about")}
          >
            <Text>Au propos de vous</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text>
                Le champ contenant des informations vous concernant...
              </Text>
              <Feather name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "gray",
              width: "100%",
              alignSelf: "center",
              height: 0.5,
            }}
          />
          <TouchableOpacity
            style={styles.item}
            onPress={() => handlePress("genre")}
          >
            <Text>Votre Sexe</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text>Masculin</Text>
              <Feather name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.section2}>
          <Text style={styles.titleSection}>Mot de passe de l'utilisateur</Text>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handlePress("password")}
          >
            <Text>Mot de passe </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text>???????????</Text>
              <Feather name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "gray",
              width: "100%",
              alignSelf: "center",
              height: 0.5,
            }}
          />
        </View>
        <View style={styles.section3}>
          <Text style={styles.titleSection}>Langue et pays</Text>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handlePress("language")}
          >
            <Text>Langue D'affichage</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text>Français</Text>
              <Feather name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "gray",
              width: "100%",
              alignSelf: "center",
              height: 0.5,
            }}
          />
          <TouchableOpacity style={styles.item}>
            <Text>Le pays dans lequel vous habitez</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text>Anglais</Text>
              <Feather name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "gray",
              width: "100%",
              alignSelf: "center",
              height: 0.5,
            }}
          />
        </View>
        <View style={styles.section4}>
          <Text style={styles.titleSection}>Vérification de compte</Text>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handlePress("verify")}
          >
            <Text>Vérifier mon compte</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text>Cliquez pour soumettre une demande...</Text>
              <Feather name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "gray",
              width: "100%",
              alignSelf: "center",
              height: 0.5,
            }}
          />
        </View>
        <View style={styles.section5}>
          <Text style={styles.titleSection}>
            Paramètres de confidentialité du compte
          </Text>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handlePress("confidentiality")}
          >
            <Text>Confidentialité du compte</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text>Cliquez pour définir la confidentialité....</Text>
              <Feather name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "gray",
              width: "100%",
              alignSelf: "center",
              height: 0.5,
            }}
          />
        </View>
        <View style={styles.section6}>
          <Text style={styles.titleSection}>Supprimer le profil</Text>
          <TouchableOpacity
            style={styles.item}
            onPress={() => handlePress("delete")}
          >
            <Text>Supprimer le profil</Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 5,
              }}
            >
              <Text>Cliquez pour confirmer la suppression ....</Text>
              <Feather name="settings" size={24} color="black" />
            </View>
          </TouchableOpacity>
          <Divider
            style={{
              backgroundColor: "gray",
              width: "100%",
              alignSelf: "center",
              height: 0.5,
            }}
          />
        </View>
      </AnimatedScroll>
    );
  }

  if (currentLoader == "username") {
    return (
      <Animatable.View animation="slideInLeft">
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="black" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }

  if (currentLoader == "email") {
    return (
      <Animatable.View animation="slideInLeft">
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="black" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
  if (currentLoader == "website") {
    return (
      <Animatable.View animation="slideInLeft">
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="black" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
  if (currentLoader == "about") {
    return (
      <Animatable.View animation="slideInLeft">
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="black" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
  if (currentLoader == "genre") {
    return (
      <Animatable.View animation="slideInLeft">
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="black" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
  if (currentLoader == "password") {
    return (
      <Animatable.View animation="slideInLeft">
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="black" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
  if (currentLoader == "language") {
    return (
      <Animatable.View animation="slideInLeft">
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="black" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
  if (currentLoader == "country") {
    return (
      <Animatable.View animation="slideInLeft">
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="black" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
  if (currentLoader == "verify") {
    return (
      <Animatable.View animation="slideInLeft">
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="black" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
  if (currentLoader == "confidentiality") {
    return (
      <Animatable.View animation="slideInLeft">
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="black" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
  if (currentLoader == "delete") {
    return (
      <Animatable.View animation="slideInLeft">
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="black" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
};

const styles = StyleSheet.create({
  contain: {
    flexGrow: 1,
    backgroundColor: "#b0f3f1",
  },
  titleSection: {
    backgroundColor: "transparent",
    fontSize: 18,
    fontWeight: "700",
    padding: 5,
  },
  section1: {
    margin: 5,
  },
  section2: { margin: 5 },
  section3: { margin: 5 },
  section4: { margin: 5 },
  section5: { margin: 5 },
  section6: { margin: 5 },
  item: {
    backgroundColor: "white",
    marginVertical: 8,
    paddingHorizontal: 8,
    height: 80,
    justifyContent: "center",
  },
  detailsHeader: {
    height: 80,
    padding: 15,
    justifyContent: "center",
    elevation: 5,
  },
});
export default Index;
