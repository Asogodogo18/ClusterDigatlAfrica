import React from "react";
import { View, Text, StyleSheet } from "react-native";
import EventsListing from "./events";

const EVENTS = [
  {
    id: "1235",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageEvent.jpeg"),
  },
  {
    id: "12356",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageEvent.jpeg"),
  },
  {
    id: "18235",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageEvent.jpeg"),
  },
  {
    id: "122356",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageEvent.jpeg"),
  },
];

const popular = ({ navigation }) => {
  return (
    <View style={styles.contain}>
      <EventsListing data={EVENTS} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
  },
});
export default popular;
