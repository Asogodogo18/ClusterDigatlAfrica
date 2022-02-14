import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { TextInput, Divider, RadioButton } from "react-native-paper";

const video = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ height: "10%" }}>
        <Text
          style={{
            color: "black",
            fontSize: 32,
            fontWeight: "600",
            letterSpacing: 1,
            textAlign: "center",
            textTransform: "uppercase",
          }}
        >
          Video
        </Text>
        <Divider
          style={{
            backgroundColor: "black",
            width: "80%",
            alignSelf: "center",
            height: 2,
          }}
        />
      </View>
      <ScrollView
        contentContainerStyle={{
          height: "90%",
          flexGrow: 1,
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          style={styles.btnTouch}
        >
          <Image
            source={require("../../../assets/4.jpg")}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
              // right: 10,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          // key={item.id}
          style={styles.btnTouch}
        >
          <Image
            source={require("../../../assets/12.jpg")}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
              // right: 10,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          // key={item.id}
          style={styles.btnTouch}
        >
          <Image
            source={require("../../../assets/4.jpg")}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
              // right: 10,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          // key={item.id}
          style={styles.btnTouch}
        >
          <Image
            source={require("../../../assets/12.jpg")}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          // key={item.id}
          style={styles.btnTouch}
        >
          <Image
            source={require("../../../assets/12.jpg")}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          // key={item.id}
          style={styles.btnTouch}
        >
          <Image
            source={require("../../../assets/12.jpg")}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          // key={item.id}
          style={styles.btnTouch}
        >
          <Image
            source={require("../../../assets/12.jpg")}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          // key={item.id}
          style={styles.btnTouch}
        >
          <Image
            source={require("../../../assets/12.jpg")}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          // key={item.id}
          style={styles.btnTouch}
        >
          <Image
            source={require("../../../assets/12.jpg")}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {}}
          // key={item.id}
          style={styles.btnTouch}
        >
          <Image
            source={require("../../../assets/12.jpg")}
            style={{
              height: "100%",
              width: "100%",
              borderRadius: 20,
            }}
            resizeMode="cover"
          />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flexGrow: 1,
  },
  btnTouch: {
    height: 150,
    width: 150,
    marginBottom: 10,
    marginHorizontal: 2,
  },
});
export default video;
