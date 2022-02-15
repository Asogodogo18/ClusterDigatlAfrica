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

const FilteredView = ({ navigation, data }) => {
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
              style={styles.contain}
              onPress={() =>
                navigation.navigate("Crowdfunding", {
                  screen: "CrowdfundingDetails",
                })
              }
            >
              <View style={styles.image}>
                <Image
                  style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "cover",
                    overflow: "hidden",
                  }}
                  source={{ uri: `${item.img}` }}
                />
              </View>
              <View style={styles.textContainer}>
                <Text style={styles.title}>
                  {item.name.length > 30
                    ? item.name.substring(0, 30).padEnd(33, ".")
                    : item.name}
                </Text>
                <Text style={styles.subtitle}>{item.categorie}</Text>
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
    marginLeft: 10,
    marginBottom: 5,
    width: 160,
    height: 220,
    backgroundColor: "green",
    borderRadius: 15,
    paddingVertical: 10,
    elevation: 4,
  },
  image: {
    flex: 3,
    position: "absolute",
    top: 0,
    borderRadius: 15,
    overflow: "hidden",
    height: 140,
    width: "100%",
  },
  textContainer: {
    position: "absolute",
    bottom: 0,
    justifyContent: "space-evenly",
    paddingLeft: 15,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "white",
  },
  subtitle: {
    fontSize: 14,
    fontWeight: "400",
    color: "white",
    opacity: 0.8,
  },
});

export default FilteredView;
