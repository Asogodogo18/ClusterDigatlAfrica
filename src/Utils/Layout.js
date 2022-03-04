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
  Animated,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Svg, { ClipPath, Defs, Path, Image, G } from "react-native-svg";
import { AntDesign } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import { opacity } from "react-native-redash";
const { width, height } = Dimensions.get("screen");
const AnimatedScrollView = Animated.createAnimatedComponent(ScrollView);

export default function Layout(props) {
  const { children, header, navigation } = props;
  StatusBar.setHidden(true);
  const searchBoxRef = useRef();
  const searchBarRef = useRef();
  const titleBarRef = useRef();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchToggle, setSearchToggle] = useState(false);
  const [isTabHidden, setIsTabHidden] = useState(false);
  const offset = useRef(new Animated.Value(0)).current;

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

  useEffect(() => {
    offset.addListener(handleScroll);
    return () => {
      offset.removeListener(handleScroll);
    };
  }, [offset]);

  const handleScroll = ({ value }) => {
    if (isTabHidden === false) {
      if (value > 10) {
        navigation.setOptions({
          tabBarStyle: { display: "none" },
        });
        setIsTabHidden(true);
      }
    }
    if (isTabHidden === true && value < 50) {
      console.log("offset-- :", value);
      navigation.setOptions({
        tabBarStyle: {
          height: 70,
          position: "absolute",
          bottom: 20,
          right: 16,
          left: 16,
          borderRadius: 25,
        },
      });
      setIsTabHidden(false);
    }
  };

  return (
    <AnimatedScrollView
      // showsVerticalScrollIndicator={false}
      // stickyHeaderHiddenOnScroll={true}
      // stickyHeaderIndices={[]}
      contentContainerStyles={styles.container}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: offset } } }],
        { useNativeDriver: false }
      )}
    >
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
          <Svg width={width + 50} height="400" viewBox={`0 0 175 172`}>
            <Defs>
              <ClipPath id="clipPath">
                <Path d="M 0,0 L 0,75 Q 22,85 35,70 T62,65 C85,85 110,85 125,60 C 138,40 150,40 155,40.5 L 155,0Z" />
              </ClipPath>
            </Defs>
            {Platform.OS === "ios" ? (
              <G clipPath="url(#clipPath)">
                <Image
                  x="0"
                  y="0"
                  width="100%"
                  height={90}
                  preserveAspectRatio="xMidYMid slice"
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
      <View style={styles.bottom}>{props.children}</View>
    </AnimatedScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "red",
  },
  nav: {
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  top: {
    marginTop: Platform.OS === "ios" ? 30 : 0,
  },
  bottom: {
    width: Dimensions.get("screen").width,
  },
  box: {
    // backgroundColor: "orange",
    height: 160,
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
