import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Picker,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import * as Animatable from "react-native-animatable";

import { Feather, Ionicons } from "@expo/vector-icons";
import { Divider, TextInput } from "react-native-paper";
import Header from "../../Components/header";

const { height, width } = Dimensions.get("screen");

const Index = () => {
  const [currentLoader, setCurrentLoader] = useState(null);
  const [selectedValue, setSelectedValue] = useState("selection votre Genre");
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
      <Animatable.View animation="slideInLeft" style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.detailsHeader}
            onPress={() => setCurrentLoader(null)}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text style={styles.headerTitle}>Nom d'utilisateur</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput
            mode="outlined"
            label="Nom d'utilisateur"
            style={styles.input}
            outlineColor="lightgray"
          />
          <TextInput
            mode="outlined"
            label="Prénom"
            style={styles.input}
            outlineColor="lightgray"
          />
          <TextInput
            mode="outlined"
            label="Nom de Famille"
            style={styles.input}
            outlineColor="lightgray"
          />
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
              Sauvegarde les Modification
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  }

  if (currentLoader == "email") {
    return (
      <Animatable.View animation="slideInLeft" style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.detailsHeader}
            onPress={() => setCurrentLoader(null)}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text style={styles.headerTitle}>E-mail utilisateur</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput
            mode="outlined"
            label="Adresse électronique"
            style={styles.input}
            outlineColor="lightgray"
          />
          <Text style={{ padding: 5, margin: 5 }}>
            Veuillez noter qu'après avoir modifié l'adresse e-mail, l'adresse
            e-mail que vous utilisez lors de l'autorisation sera remplacée par
            une nouvelle
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
              Sauvegarde les Modification
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  }
  if (currentLoader == "website") {
    return (
      <Animatable.View animation="slideInLeft" style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.detailsHeader}
            onPress={() => setCurrentLoader(null)}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text style={styles.headerTitle}>URL du site utilisateur</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput
            mode="outlined"
            label="URL du site utilisateur"
            style={styles.input}
            outlineColor="lightgray"
          />
          <Text style={{ padding: 5, margin: 5 }}>
            Veuillez noter que cette URL apparaîtra sur votre page de profil. Si
            vous souhaitez la masquer, laissez ce champ vide.
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
              Sauvegarde les Modification
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  }
  if (currentLoader == "about") {
    return (
      <Animatable.View animation="slideInLeft" style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.detailsHeader}
            onPress={() => setCurrentLoader(null)}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text style={styles.headerTitle}>Au propos de vous</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput
            mode="outlined"
            label="Au propos de vous (0)"
            style={styles.input}
            outlineColor="lightgray"
          />
          <Text style={{ padding: 5, margin: 5 }}>
            Veuillez entrer une brève description de vous-même avec un maximum
            de 140 caractères
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
              Sauvegarde les Modification
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  }
  if (currentLoader == "genre") {
    return (
      <Animatable.View animation="slideInLeft" style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.detailsHeader}
            onPress={() => setCurrentLoader(null)}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text style={styles.headerTitle}>Sexe de l'utilisateur</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Picker
            selectedValue={selectedValue}
            style={styles.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(selectedValue)
            }
            mode="dialog"
          >
            <Picker.Item label="Homme" value="Homme" />
            <Picker.Item label="Femme" value="Femme" />
          </Picker>
          <Text style={{ padding: 5, margin: 5 }}>
            Veuillez choisir votre sexe, cela est nécessaire pour une
            identification plus complète de votre profil. (Le sexe par défaut de
            l'utilisateur est Masculin)
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
              Sauvegarde les Modification
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  }
  if (currentLoader == "password") {
    return (
      <Animatable.View animation="slideInLeft" style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.detailsHeader}
            onPress={() => setCurrentLoader(null)}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text style={styles.headerTitle}>Mot de passe du profil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput
            mode="outlined"
            label="Mot de passe actuel"
            style={styles.input}
            outlineColor="lightgray"
          />
          <TextInput
            mode="outlined"
            label="Mot de passe actuel"
            style={styles.input}
            outlineColor="lightgray"
          />
          <TextInput
            mode="outlined"
            label="Confirmer le nouveau mot de passe"
            style={styles.input}
            outlineColor="lightgray"
          />
          <Text style={{ padding: 5, margin: 5 }}>
            Avant de modifier votre mot de passe actuel, veuillez suivre ces
            conseils: indiquez la longueur minimale (6 caractères). Utilisez des
            lettres majuscules et minuscules. Utilisez des chiffres et des
            caractères spéciaux (&% $)
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
              Sauvegarde les Modification
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  }
  if (currentLoader == "language") {
    return (
      <Animatable.View animation="slideInLeft" style={styles.containerView}>
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="white" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
  if (currentLoader == "country") {
    return (
      <Animatable.View animation="slideInLeft" style={styles.containerView}>
        <TouchableOpacity
          style={styles.detailsHeader}
          onPress={() => setCurrentLoader(null)}
        >
          <Ionicons name="chevron-back" size={40} color="white" />
        </TouchableOpacity>
      </Animatable.View>
    );
  }
  if (currentLoader == "verify") {
    return (
      <Animatable.View animation="slideInLeft" style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.detailsHeader}
            onPress={() => setCurrentLoader(null)}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text style={styles.headerTitle}>Vérifier mon compte</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput
            mode="outlined"
            label="Nom complet"
            style={styles.input}
            outlineColor="lightgray"
          />
          <TextInput
            mode="outlined"
            label="Message au réviseur"
            style={styles.input}
            outlineColor="lightgray"
          />
          <TextInput
            mode="outlined"
            label="Nom de Famille"
            style={styles.input}
            outlineColor="lightgray"
          />
          <TextInput
            mode="outlined"
            label="Message Video"
            style={styles.input}
            outlineColor="lightgray"
          />
          <Text style={{ padding: 5, margin: 5 }}>
            Veuillez noter que ce matériel ne sera ni publié ni partagé avec des
            tiers. Nous demandons ces informations uniquement pour vérifier
            l'authenticité de votre identité afin de vérifier davantage votre
            compte! Pour ce faire, nous avons besoin de vous pour enregistrer
            une vidéo de plus de plus d'une minute, en tenant votre passeport /
            ID dans votre main droite pour une vision claire de votre visage et
            des données de votre document, en plus de donner votre nom complet
            et aussi le surnom d'utilisateur que vous utilisez sur notre site
            Web
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
              Envoyer la Demande
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  }
  if (currentLoader == "confidentiality") {
    return (
      <Animatable.View animation="slideInLeft" style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.detailsHeader}
            onPress={() => setCurrentLoader(null)}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text style={styles.headerTitle}>confidentialité du compte</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text>Qui peut voir mon profil?</Text>
          <View
            style={{
              borderWidth: 0.5,
              margin: 5,
              borderRadius: 20,
              elevation: 5,
              backgroundColor: "white",
            }}
          >
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(selectedValue)
              }
              mode="dialog"
            >
              <Picker.Item
                label="Tous mes Personnes"
                value="Tous mes Personnes"
              />
              <Picker.Item label="Mes Followers" value="Mes Followers" />
              <Picker.Item label="Person" value="person" />
            </Picker>
          </View>
          <Text>Qui peut m'envoyer un message?</Text>
          <View
            style={{
              borderWidth: 0.5,
              margin: 5,
              borderRadius: 20,
              elevation: 5,
              backgroundColor: "white",
            }}
          >
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(selectedValue)
              }
              mode="dialog"
            >
              <Picker.Item
                label="tout les personnes"
                value="Tout les Personnes"
              />
              <Picker.Item
                label="Les gens que je suis"
                value="Les gens que je suis"
              />
            </Picker>
          </View>
          <Text>Afficher votre profil dans les moteurs de recherche?</Text>
          <View
            style={{
              borderWidth: 0.5,
              margin: 5,
              borderRadius: 20,
              elevation: 5,
              backgroundColor: "white",
            }}
          >
            <Picker
              selectedValue={selectedValue}
              style={styles.picker}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedValue(selectedValue)
              }
              mode="dialog"
            >
              <Picker.Item label="Oui" value="Oui" />
              <Picker.Item label="Non" value="Non" />
            </Picker>
          </View>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
              Sauvegarde les Modification
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    );
  }
  if (currentLoader == "delete") {
    return (
      <Animatable.View animation="slideInLeft" style={styles.containerView}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.detailsHeader}
            onPress={() => setCurrentLoader(null)}
          >
            <Ionicons name="chevron-back" size={40} color="white" />
            <Text style={styles.headerTitle}>Supprimer le compte</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <TextInput
            mode="outlined"
            label="Entrer le mot de passe"
            style={styles.input}
            outlineColor="lightgray"
          />

          <Text style={{ padding: 5, margin: 5 }}>
            Veuillez noter qu'après la suppression de votre compte, toutes vos
            publications, abonnements, toutes vos données et toutes vos actions
            seront également supprimés, et cette action ne sera pas annulée
          </Text>
        </View>
        <View style={styles.button}>
          <TouchableOpacity>
            <Text style={{ textAlign: "center", fontSize: 16, color: "black" }}>
              Suppresion du Compte
            </Text>
          </TouchableOpacity>
        </View>
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
    padding: 10,
    justifyContent: "space-between",
    elevation: 5,
    flexDirection: "row",
    alignContent: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 1,
    color: "white",
  },
  content: {
    padding: 10,
    marginVertical: 100,
  },
  input: {
    margin: 5,
  },
  button: {
    backgroundColor: "lightgray",
    height: 50,
    width: "70%",
    elevation: 5,
    justifyContent: "center",
    alignSelf: "center",
    padding: 10,
    borderRadius: 20,
  },
  picker: {
    height: 80,
    width: width - 20,
    padding: 10,
  },
  header: {
    padding: 5,
    elevation: 5,
    // borderWidth: 0.2,
    backgroundColor: "lightgray",
    height: 60,
    borderRadius: 20,
    // borderColor: "white",
    maxWidth: width - 10,
  },
  containerView: {
    backgroundColor: "#b0f3f1",
    flex: 1,
    padding: 5,
  },
});
export default Index;
