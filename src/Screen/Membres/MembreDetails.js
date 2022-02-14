import React, { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  Dimensions,
  SafeAreaView,
} from "react-native";
import Modal from "react-native-modal";
import { AntDesign } from "@expo/vector-icons";

const height = Dimensions.get("screen").height;

const MembreDetails = ({ route, navigation }) => {
  const [isVisible, setIsVisible] = useState(true);

  const { membre } = route.params;
  useFocusEffect(
    useCallback(() => {
      setIsVisible(true);
      return () => {
        setIsVisible(false);
      };
    }, [])
  );

  // useEffect(() => {
  //   const unsubscribe = navigation.addListenner("focus", () => {
  //     setIsVisible(true);
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Modal
        isVisible={isVisible}
        animationIn="bounceIn"
        coverScreen={true}
        animationOutTiming={300}
        animationOut="bounceOut"
      >
        <View
          style={{
            backgroundColor: "transparent",
            alignItems: "flex-end",
            justifyContent: "flex-end",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              isVisible ? setIsVisible(false) : null;
              navigation.goBack();
            }}
          >
            <AntDesign name="close" size={40} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ height: height * 0.75 }}>
          <Image
            source={membre.photo}
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default MembreDetails;
