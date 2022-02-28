import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import React from "react";
import { Divider } from "react-native-paper";

export default function Apercu() {
  return (
    <ScrollView nestedScrollEnabled contentContainerStyle={styles.contain}>
      <View style={styles.section1}>
        <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>
          Qu'apprendrez vous avec ce cours
        </Text>
        <Divider
          style={{
            marginBottom: 10,
            width: "50%",
            alignSelf: "center",
            height: 1,
            backgroundColor: "black",
          }}
        />
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../../assets/idea.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ padding: 2 }}>
            Reprehenderit dolore consectetur consequat in deserunt ut elit id
            mollit labore incididunt nisi deserunt. Sint reprehenderit
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../../assets/idea.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ padding: 2 }}>
            Reprehenderit dolore consectetur consequat in deserunt ut elit id
            mollit labore incididunt nisi deserunt. Sint reprehenderit
          </Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Image
            source={require("../../../assets/idea.png")}
            style={{ height: 40, width: 40 }}
          />
          <Text style={{ padding: 2 }}>
            Reprehenderit dolore consectetur consequat in deserunt ut elit id
            mollit labore incididunt nisi deserunt. Sint reprehenderit
          </Text>
        </View>

        <Image
          source={require("../../../assets/uvm.png")}
          style={{ height: 250, width: 250, alignSelf: "center" }}
        />
        <Text style={{ padding: 10, fontSize: 20, fontWeight: "bold" }}>
          Quels sont les pré-requis
        </Text>
        <Divider
          style={{
            marginBottom: 10,
            width: "50%",
            alignSelf: "center",
            height: 1,
            backgroundColor: "black",
          }}
        />
      </View>

      <View style={styles.section2}>
        <Text style={{ padding: 2 }}>Prerequis</Text>
        <Text style={{ padding: 10 }}>
          Cillum quis qui labore eu fugiat officia officia sint proident nulla.
          Ad adipisicing qui sit consequat nulla labore do fugiat nisi minim
          nulla incididunt. Excepteur dolore elit et amet tempor officia ad
          nulla occaecat ea elit. Quis enim magna cupidatat nisi sint in amet
          reprehenderit aliquip. Aliqua anim Lorem enim ullamco id mollit duis
          laborum eiusmod enim.
        </Text>
        <Image
          source={require("../../../assets/student.png")}
          style={{ height: 250, width: 250, alignSelf: "center" }}
        />
      </View>
      <View style={styles.section3}></View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contain: {
    flexGrow: 1,
    backgroundColor: "white",
    padding: 10,
  },
  section1: { flex: 1 },
  section2: { flex: 1 },
  section3: { flex: 1 },
});
