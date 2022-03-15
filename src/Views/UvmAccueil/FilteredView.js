import {
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import Animated, {
  FadeInRight,
  FadeOutLeft,
  BounceInRight,
  Transition,
} from "react-native-reanimated";

import { SharedElement } from "react-navigation-shared-element";

const FilteredView = ({ navigation, data, isCert }) => {
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        padding: 10,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {data.length == 0 && (
          <View
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontSize: 36,
                fontWeight: "700",
                textAlign: "center",
                textTransform: "capitalize",
                justifyContent: "center",
              }}
            >
              {" "}
              Aucun résultat pour cette catégorie
            </Text>
          </View>
        )}
        {data.map((item) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Course", { isCert });
              }}
              activeOpacity={0.8}
              style={[styles.contain]}
            >
              <View style={styles.card}>
                <View
                  style={{
                    flex: 1,
                    borderRadius: 10,
                    overflow: "hidden",
                    margin: 10,
                    alignSelf: "center",
                    marginTop: 1,
                  }}
                >
                  <SharedElement
                    id={`ìtem.${item.img}.image`}
                    style={{ width: 100, height: 100 }}
                  >
                    <Image
                      style={styles.icon}
                      source={{ uri: `${item.img}` }}
                      resizeMode="cover"
                    />
                  </SharedElement>
                </View>
                <View
                  style={{
                    flex: 3,
                  }}
                >
                  <SharedElement id={`ìtem.${item.img}.name`}>
                    <Text
                      style={{
                        textTransform: "uppercase",
                        fontSize: 18,
                        color: "black",
                        fontWeight: "700",
                        letterSpacing: 1,
                        textAlign: "center",
                        marginTop: 15,
                      }}
                    >
                      {item.name.length > 50
                        ? item.name.substring(0, 40).padEnd(43, ".")
                        : item.name}
                    </Text>
                  </SharedElement>

                  <SharedElement id={`item.${item.img}.prix`}>
                    <Text
                      style={{
                        fontSize: 10,
                        color: "black",
                        fontWeight: "600",
                        letterSpacing: 0,
                        textTransform: "uppercase",
                        marginTop: 10,
                        textAlign: "center",
                      }}
                    >
                      {item.prix}
                    </Text>
                  </SharedElement>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexGrow: 1,
  },
  card: {
    width: 350,
    height: 120,
    borderRadius: 20,
    flexDirection: "row",
    marginVertical: 10,
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
  },
  icon: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
});

export default FilteredView;
