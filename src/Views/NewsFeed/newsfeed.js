import { View, Text, FlatList } from "react-native";
import React from "react";
import { useQueryClient } from "react-query";
import { ActivityIndicator } from "react-native-paper";
import usePosts from "../../hooks/usePosts";
import Post from "../../Components/Post";
import { createAnimatedPropAdapter } from "react-native-reanimated";
const AnimatedFlatList = createAnimatedPropAdapter(FlatList);

const Newsfeed = () => {
  const { status, data, error, isFetching } = usePosts();
  const renderItem = ({ item }) => <Post item={item} />;
  if (isFetching) return <ActivityIndicator animating size="large" />;
  console.log("data :", data);
  if (error)
    return (
      <View>
        <Text> "An error has occurred: "{error.message}</Text>
      </View>
    );

  return (
    <AnimatedFlatList
      contentContainerStyle={{ margin: 15 }}
      data={data}
      initialNumToRender={10}
      onEndReachedThreshold={0.5}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Newsfeed;
