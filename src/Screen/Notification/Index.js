import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "../../Components/header";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Swiper from "react-native-swiper";

const Index = () => {
  const [singleIndex, setsingleIndex] = useState(0);
  const onIndexChanged = (index) => {
    setsingleIndex(index);
  };
  return (
    <View style={styles.contain}>
      <View style={{ height: 100 }}>
        <Header
          title="Notifification"
          icon={require("../../../assets/icons/notification.png")}
          color="green"
          height={60}
          width={60}
        />
      </View>
      <View style={{ width: "100%", alignSelf: "center" }}>
        <SegmentedControlTab
          values={["Notification", "Mentions"]}
          selectedIndex={singleIndex}
          tabStyle={{ borderColor: "transparent" }}
          tabsContainerStyle={{
            height: 45,
          }}
          activeTabStyle={{
            elevation: 5,
            borderBottomWidth: 5,
            borderBottomColor: "green",
            backgroundColor: "#f5f5f5",
            borderRadius: 10,
          }}
          activeTabTextStyle={{
            color: "black",
            fontSize: 16,
            fontWeight: "bold",
          }}
          tabTextStyle={{
            fontWeight: "500",
            fontSize: 16,
            color: "black",
          }}
          onTabPress={onIndexChanged}
        />

        <Swiper
          index={singleIndex}
          onIndexChanged={onIndexChanged}
          loop={false}
          showsPagination={false}
          style={{ height: 300, marginTop: 10 }}
        >
          <View style={{ flex: 1 }}>
            <Text>Notification</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Mentions</Text>
          </View>
        </Swiper>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
});
export default Index;
