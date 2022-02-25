import React from "react";
import { SafeAreaView, View, Text, StyleSheet, ScrollView } from "react-native";
import Evenements from "../../Views/eventViews";
import Header from "../../Components/header";

const Event = (props) => {
  return (
    <SafeAreaView style={styles.contain}>
      <View style={{ height: 150 }}>
        <Header
          title="Evenements"
          icon={require("../../../assets/icons/event.png")}
          color="#28a745"
        />
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View>
          <Evenements
            navigation={props.navigation}
            title="Evènement à Venir"
            isNavigation={false}
            horizontal={true}
          />
        </View>
        <View>
          <Evenements
            navigation={props.navigation}
            title="Evènement Finis"
            isNavigation={false}
            horizontal={true}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});

export default Event;
