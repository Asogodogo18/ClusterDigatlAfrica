import { ScrollView, View, Text, StyleSheet } from "react-native";
import React from "react";

import Layout from "../../../Utils/Layout";
import CardUvm from "../../../Views/UvmAccueil/cardUvm";

const AccueilUvm = (props) => {
  return (
    <Layout icon={require("../../../../assets/banner_cours.jpg")}>
      <View>
        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
          <CardUvm
            title="programmation"
            icon={require("../../../../assets/icons/programmatio.png")}
          />
          <CardUvm
            title="UX/UI Design"
            icon={require("../../../../assets/icons/ux.png")}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            margin: 10,
          }}
        >
          <CardUvm
            title="Graphic Design"
            icon={require("../../../../assets/icons/graphic.png")}
          />
          <CardUvm
            title="Mathématique"
            icon={require("../../../../assets/icons/mathematique.png")}
          />
        </View>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexGrow: 1,
  },
});
export default AccueilUvm;
