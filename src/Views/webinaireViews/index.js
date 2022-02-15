import React from "react";
import { View, Text } from "react-native";
import Webinaires from "./webinaire";

const EVENTS = [
  {
    id: "1235",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageWebinaire1.jpg"),
  },
  {
    id: "12356",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageWebinaire2.jpeg"),
  },
  {
    id: "127735",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageWebinaire1.jpg"),
  },
  {
    id: "1232256",
    title: "FuturCom Planet",
    subtitle: "Competition FIFA 21",
    date: "26/11/2021-27/11/2021",
    imageUrl: require("../../../assets/ImageWebinaire2.jpeg"),
  },
];

const Index = (props) => {
  return <Webinaires data={EVENTS} {...props} />;
};

export default Index;
