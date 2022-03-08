import { View, Text, FlatList } from "react-native";
import React from "react";
import { useQueryClient } from "react-query";
import { ActivityIndicator } from "react-native-paper";
import usePosts from "../../hooks/usePosts";
import Post from "../../Components/Post";
import { createAnimatedPropAdapter } from "react-native-reanimated";
const AnimatedFlatList = createAnimatedPropAdapter(FlatList);

const Newsfeed = () => {
  {
    /*les requetes sont lances en appellant le hook usePost 
  qui nous permets dobtenir les donnees et les statuts lors 
  de la communication avec le serveur (isFetching nous informe
   du debut de la requete , data est valide lorsque les donnees 
   nous sont retournes et error lors qu'une erreur occure lors de
  la communication)*/
  }
  const { status, data, error, isFetching } = usePosts();
  const renderItem = ({ item }) => <Post item={item} />;

  if (isFetching) return <ActivityIndicator animating size="large" />;

  // lorsqu'il ya une erreur il nous affiche ce component avec le message d'erreur
  if (error)
    return (
      <View>
        <Text> "An error has occurred: "{error.message}</Text>
      </View>
    );

  // si les donnees sont recus sans aucune erreur notre component s'affiche
  return (
    <AnimatedFlatList
      contentContainerStyle={{ margin: 15 }}
      data={data}
      nestedScrollEnabled
      initialNumToRender={10}
      onEndReachedThreshold={0.5}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Newsfeed;
