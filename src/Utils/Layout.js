import React, { useRef, useState, useEffect } from "react";
import {
  Dimensions,
  StatusBar,
  StyleSheet,
  View,
  ScrollView,
  Platform,
  Text,
  TextInput,
} from "react-native";
import Svg, { ClipPath, Defs, Path, Image, G } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { opacity } from "react-native-redash";
const { width, height } = Dimensions.get("screen");

export default function Layout(props) {
  const { children, header } = props;
  StatusBar.setHidden(true);
  const searchBoxRef = useRef();
  const searchBarRef = useRef();
  const titleBarRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);

  useEffect(() => {
    if (searchToggle) {
      searchBarRef.current.transitionTo({ translateX: 0 }, 500);
      titleBarRef.current.transitionTo({ opacity: 0 }, 300);
      searchBoxRef.current.focus();
    } else if (searchToggle == false) {
      searchBarRef.current.transitionTo({ translateX: width - 40 }, 500);
      titleBarRef.current.transitionTo({ opacity: 1 }, 300);
    }
  }, [searchToggle]);

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.nav}>
          <Animatable.Text
            ref={titleBarRef}
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 20,
              color: "black",
            }}
          >
            CDA Virtual Academy
          </Animatable.Text>

          <Animatable.View
            ref={searchBarRef}
            style={{
              position: "absolute",
              right: 0,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              // transform: [{ translateX: 110 }],
            }}
          >
            {!searchToggle ? (
              <AntDesign
                name="search1"
                size={24}
                color="black"
                onPress={() => {
                  setSearchToggle(!searchToggle);
                }}
              />
            ) : (
              <AntDesign
                name="arrowleft"
                size={24}
                color="black"
                onPress={() => {
                  setSearchToggle(!searchToggle);
                }}
              />
            )}
            <TextInput
              ref={searchBoxRef}
              style={styles.input}
              onChangeText={setSearchTerm}
              value={searchTerm}
              placeholder="Recherche"
            />
          </Animatable.View>
        </View>
        <View style={styles.box}>
          <Svg width={width} height="400" viewBox={`0 0 156 175`}>
            <Defs>
              <ClipPath id="clipPath">
                <Path d="M 0,0 L 0,65 Q 22,75 35,60 T62,55 C85,75 110,75 125,50 C 138,30 150,30 155,30.5 L 155,0Z" />
              </ClipPath>
            </Defs>
            {Platform.OS === "ios" ? (
              <G clipPath="url(#clipPath)">
                <Image
                  x="50%"
                  y="50%"
                  width="50%"
                  height="50%"
                  preserveAspectRatio="xMidYMid Meet"
                  href={props.icon}
                />
              </G>
            ) : (
              <Image
                clipPath="url(#clipPath)"
                x="0"
                y="0"
                width="100%"
                height="50%"
                preserveAspectRatio="xMidYMid slice"
                href={props.icon}
              />
            )}
          </Svg>
        </View>
      </View>
      <ScrollView contentContainerStyles={styles.bottom}>
        <View style={{ marginTop: 50 }}>{props.children}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  nav: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  top: {},
  bottom: {
    position: "absolute",
    width: Dimensions.get("screen").width,
    bottom: 10,
  },
  box: {
    backgroundColor: "orange",
    height: 120,
    marginBottom: 10,
  },
  bottomWavy: {
    position: "absolute",
    bottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    width: width - 50,
    padding: 10,
    borderRadius: 10,
    borderColor: "orange",
  },
});
