import React from "react";
import { View, Text, Image, ImageBackground } from "react-native";

import Swiper from "react-native-swiper";
// import Data from "../Utils/data";

export default function imageSlider(props) {
  const { y } = props;
  return (
    <View {...props}>
      <Swiper activeDotColor="white" autoplay={true} autoplayTimeout={3}>
        {props.data.map((item, key) => {
          return (
            <ImageBackground
              key={`${item.title}`}
              source={item.image}
              style={{ width: "100%", height: 250 }}
              resizeMode="cover"
            >
              <View
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  top: 100,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 20,
                    padding: 10,
                  }}
                >
                  {item.description}
                </Text>
              </View>
            </ImageBackground>
          );
        })}
      </Swiper>
    </View>
  );
}
