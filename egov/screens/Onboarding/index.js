import { StatusBar } from "expo-status-bar";
import React, { useState, useContext, createRef } from "react";
import { ScaledSheet } from "react-native-size-matters";

import {
  StyleSheet,
  Text,
  View,
  Animated,
  FlatList,
  Button,
  Image,
  Dimensions,
} from "react-native";
const { width, height } = Dimensions.get("screen");
const bgs = ["#A5BBFF","#B98EFF", "#00CBE7","#10FCE5" ];
const DATA = [
  {
    key: "1",
    title: "Bienvenue dans NINA SCANNER",
    description: "Afin de comprendre le processus de vérification, veuilez suivre les instructions qui s'affichent à l'écran en glissant vers la gauche.",
    image: require("../../assets/onboarding2.png"),
  },
  {
    key: "2",
    title: "Démarrage",
    description: "Pour Démarrer, connecter vous à votre compte vérificateur à travers le portail de connexion dans l'application.",
    image: require("../../assets/onboarding2.png"),
  },
  {
    key: "3",
    title: "Ensuite, ",
    description: "Réperer la zone où est imprimée le QR code sur la carte NINA. ",
    image: require("../../assets/cartenina.png"),
  },
  {
    key: "4",
    title: "Et finalement",
    description: "Aligner la caméra de votre appareil avec le Qr code. L'application procède automatiquement à l'analyse de la carte et vous retourne la validité de la carte ainsi que les informations relatives au titulaire.",
    image: require("../../assets/onboard.png"),
  },
];

const Indicator = ({ scrollX }) => {
  return (
    <View style={{ position: "absolute", bottom: 50, flexDirection: "row" }}>
      {DATA.map((_, i) => {
        const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
        const scale = scrollX.interpolate({
          inputRange,
          outputRange: [0.8, 1.4, 0.8],
          extrapolate: "clamp",
        });
        const opacity = scrollX.interpolate({
          inputRange,
          outputRange: [0.6, 0.9, 0.6],
          extrapolate: "clamp",
        });
        return (
          <Animated.View
            key={`indicator-${i}`}
            style={{
              height: 8,
              width: 10,
              borderRadius: 3,
              backgroundColor: "#333",
              opacity,
              margin: 5,
              transform: [
                {
                  scale,
                },
              ],
            }}
          ></Animated.View>
        );
      })}
    </View>
  );
};
const BackDrop = ({ scrollX }) => {
  const backgroundColor = scrollX.interpolate({
    inputRange: bgs.map((_, i) => i * width),
    outputRange: bgs.map((bg) => bg),
  });
  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFillObject,
        {
          backgroundColor,
        },
      ]}
    />
  );
};

const Square = ({ scrollX }) => {
  const YOLO = Animated.modulo(
    Animated.divide(Animated.modulo(scrollX, width), new Animated.Value(width)),  
    1
  );
  const rotate= YOLO.interpolate({
    inputRange: [0, 0.5, 1 ],
    outputRange: ['35deg', '-35deg', '35deg']
  });
  const translateX  = YOLO.interpolate({
    inputRange: [0, 0.5, 1 ],
    outputRange: [0, -height + 100, 0]
  });
  return (
    <Animated.View
      style={{
        width: width * 2,
        height: width * 2,
        backgroundColor: "#FFF",
        borderRadius: 356,
        position: "absolute",
        top: -height * 0.48,
        left: -height * 0.3,
        transform: [
          {
            rotate,
          },
        ],
      }}
    />
  );
};

const Onboarding = (props) => {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.container}>
      <StatusBar hidden />
      <BackDrop scrollX={scrollX} />
      <Square scrollX={scrollX} />
      <Animated.FlatList
        data={DATA}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        scrollEventThrottle={32}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          return (
            <View style={{ width, alignItems: "center", padding: 20 }}>
              <View style={{ flex: 0.7, justifyContent: "center" }}>
                <Image
                  source={item.image}
                  style={{ width: width / 1.1, height: height / 1.1 }}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 0.2 }}>
                <Text
                  style={{ fontWeight: "800", fontSize: 20, marginVertical: 10, marginTop:25, }}
                >
                  {item.title}
                </Text>
                <Text style={{ fontWeight: "300" }}>{item.description}</Text>
              </View>
            </View>
          );
        }}
      />
      <View style={{ flex: 0.2 }}>
        <Button title="Connexion"
        onPress={()=> props.navigation.push('Login')} />
      </View>
      <Indicator scrollX={scrollX} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:'center'
  },
});

export default Onboarding;
