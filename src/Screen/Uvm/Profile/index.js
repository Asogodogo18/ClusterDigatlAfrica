import { View, Text } from "react-native";
import React from "react";
import Layout from "../../../Utils/Layout";

const Profile = ({ navigation }) => {
  return (
    <Layout
      navigation={navigation}
      icon={require("../../../../design/banner_profil.jpg")}
    >
      <Text
        style={{
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        Profile Uvn
      </Text>
    </Layout>
  );
};

export default Profile;
