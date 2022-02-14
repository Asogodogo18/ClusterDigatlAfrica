import React from "react";
import { View, Text } from "react-native";
import Events from "./events";

const EVENTS = [
  {
    id: "1235",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageEvent1.jpeg"),
  },
  {
    id: "12356",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageEvent2.jpeg"),
  },
  {
    id: "12635",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageEvent1.jpeg"),
  },
  {
    id: "123456",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageEvent2.jpeg"),
  },
];

const index = (props) => {
  const { title, isNavigation } = props;
  return (
    <View style={{ marginTop: 10 }}>
      <Events
        data={EVENTS}
        navigation={props.navigation}
        title={title}
        isNavigation={isNavigation}
        // horizontal={props.horizontal}
        {...props}
      />
    </View>
  );
};

export default index;
