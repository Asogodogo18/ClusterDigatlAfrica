import { View, Text } from "react-native";
import React from "react";
import Layout from "../../../Utils/Layout";

const Library = ({ navigation }) => {
  return (
    <Layout
      navigation={navigation}
      icon={require("../../../../design/banner_library.jpg")}
    >
      <Text style={{ justifyContent: "center", alignItems: "center" }}>
        Bibliotheque Uvn
      </Text>
    </Layout>
  );
};

export default Library;
