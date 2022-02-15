import React, { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Swiper from "react-native-swiper";

import {
  TodayView,
  PopularView,
  WeekendView,
} from "../../Components/segmentedView";

function index({ navigation }) {
  const [singleIndex, setsingleIndex] = useState(0);
  const onIndexChanged = (index) => {
    setsingleIndex(index);
  };

  return (
    <View style={{ width: "100%", alignSelf: "center" }}>
      <SegmentedControlTab
        values={["Aujourd'hui", "Populaire", "Week-End"]}
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
          <TodayView navigation={navigation} />
        </View>
        <View style={{ flex: 1 }}>
          <PopularView navigation={navigation} />
        </View>
        <View style={{ flex: 1 }}>
          <WeekendView navigation={navigation} />
        </View>
      </Swiper>
    </View>
  );
}

export default index;
