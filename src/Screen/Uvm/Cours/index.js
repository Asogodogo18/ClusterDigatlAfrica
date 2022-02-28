import { View, Text } from "react-native";
import React from "react";

import Layout from "../../../Utils/Layout";
import CardUvm from "../../../Views/UvmAccueil/cardUvm";

const Cours = ({ navigation }) => {
  return (
    <Layout
      navigation={navigation}
      icon={require("../../../../assets/uvm_banner.jpg")}
    >
      <View>
        <CardUvm
          title="programmation"
          icon={require("../../../../assets/icons/programmatio.png")}
          subtile="195 /Cours"
          heure="20 Heure"
          text="facile"
        />
        <CardUvm
          title="UX/UI Design"
          icon={require("../../../../assets/icons/ux.png")}
          subtile="185 /Cours"
          heure="20 Heure"
          text="Moyenne"
        />
        <CardUvm
          title="programmation"
          icon={require("../../../../assets/icons/programmatio.png")}
          subtile="195 /Cours"
          heure="20 Heure"
          text="facile"
        />
        <CardUvm
          title="UX/UI Design"
          icon={require("../../../../assets/icons/ux.png")}
          subtile="185 /Cours"
          heure="20 Heure"
          text="Moyenne"
        />
      </View>
    </Layout>
  );
};

export default Cours;
