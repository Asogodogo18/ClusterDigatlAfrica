import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import { useQuery } from "react-query";
import axios from "axios";
import { getCommentByPostId } from "../../hooks/usePosts";

const Comments = ({ postId }) => {
  console.log("post Id:", postId);

  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.data)
  );

  console.log("comments: ", data);
  if (isFetching)
    return <ActivityIndicator color="green" animating size="large" />;
  if (error) {
    return (
      <View>
        <Text> "An error has occurred: "{error.message}</Text>
      </View>
    );
  }

  return (
    <View>
      {data.map((element) => {
        //J'avais oublie de mettre le return ici
        return (
          <View
            key={`${element.id}`}
            style={{ marginVertical: 4, height: 150, padding: 10 }}
          >
            <Text>{element.body}</Text>
          </View>
        );
      })}
    </View>
  );
};

export default Comments;
