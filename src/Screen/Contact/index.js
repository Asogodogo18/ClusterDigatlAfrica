import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Contact from "../../Components/contact";
const Index = () => {
  return (
    <ScrollView>
      <View style={styles.contain}>
        <ImageBackground
          source={require("../../../assets/imageSlider/slides1.jpeg")}
          style={{ height: 150, width: "100%", position: "relative" }}
        ></ImageBackground>
        <View>
          <View style={styles.email}>
            <View style={{ flexDirection: "row" }}>
              <Entypo
                name="email"
                size={27}
                color="black"
                style={{ marginTop: 15 }}
              />
              <View style={{ flexDirection: "column" }}>
                <View style={styles.TextConteneur}>
                  <Text style={{ fontSize: 18, textAlign: "center" }}>
                    E-mail
                  </Text>
                  <Text style={{ fontSize: 18, textAlign: "center" }}>
                    info@kinguievent.com
                  </Text>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={styles.email}>
              <View style={{ flexDirection: "row" }}>
                <Entypo
                  name="location-pin"
                  size={27}
                  color="black"
                  style={{ marginTop: 15 }}
                />
                <View style={{ flexDirection: "column" }}>
                  <View style={styles.TextConteneur}>
                    <Text style={{ fontSize: 18, textAlign: "center" }}>
                      Sotuba Aci
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: "center" }}>
                      En face du restaurant la parisienne.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={{ marginTop: 20 }}>
            <View style={styles.email}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons
                  name="phone-portrait-outline"
                  size={27}
                  color="black"
                  style={{ marginTop: 15 }}
                />
                <View style={{ flexDirection: "column" }}>
                  <View style={styles.TextConteneur}>
                    <Text style={{ fontSize: 18, textAlign: "center" }}>
                      Téléphone
                    </Text>
                    <Text style={{ fontSize: 18, textAlign: "center" }}>
                      +223 20 23 05 90
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <Contact />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,

    // alignContent: "stretch",

    // alignItems: "center",
  },
  email: {
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 1,
    padding: 10,
    backgroundColor: "#e1e3e6",
    width: "90%",
    marginLeft: 15,
    marginTop: -10,
    elevation: 2.5,
    height: 110,
  },
  TextConteneur: {
    marginLeft: 15,
  },
});

export default Index;
