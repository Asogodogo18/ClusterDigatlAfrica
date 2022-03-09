import { View, Text, TouchableHighlight, Image } from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SimpleLineIcons, EvilIcons } from "@expo/vector-icons";
import Comments from "../Views/NewsFeed/Comments";
import Animated from "react-native-reanimated";
const Post = ({ item }) => {
  const [Like, setLike] = useState(false);
  const [showComment, setShowComment] = useState(false);
  return (
    <Animated.View
      style={{
        padding: 5,
        marginVertical: 8,
        borderRadius: 15,
        elevation: 2,
        minHeight: 380,
        backgroundColor: "#f8f9fa",
        borderColor: "gray",
        borderwidth: 0.8,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 8,
          overflow: "hidden",
          borderRadius: 10,
        }}
      >
        <Image
          resizeMode="cover"
          style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            overflow: "hidden",
          }}
          source={require("../../assets/profil.jpg")}
        />
        <Text
          style={{
            marginLeft: 10,
            width: "75%",
            fontSize: 14,
            fontWeight: "500",
          }}
          multiline
        >
          {item.title.substring(0, 15)}
        </Text>
        <TouchableOpacity style={{ position: "relative", right: 10, top: -3 }}>
          <SimpleLineIcons name="options-vertical" size={20} color="gray" />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 8,
          minHeight: 180,
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          overflow: "hidden",
        }}
      >
        <Image
          resizeMode="cover"
          source={require("../../assets/4.jpg")}
          style={{ height: "100%", width: "100%", overflow: "hidden" }}
        />
      </View>
      {item.body ? (
        <Text
          multiline
          style={{ marginTop: 4, padding: 4, fontSize: 12, fontWeight: "400" }}
        >
          {item.body}
        </Text>
      ) : null}
      <View style={{ flex: 3, flexDirection: "row", alignItems: "center" }}>
        <TouchableOpacity
          onPress={() => setLike(!Like)}
          style={{ flexDirection: "row" }}
        >
          <EvilIcons name="like" size={24} color="black" />

          <Text style={{ fontSize: 15 }}>J'aime</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setShowComment(!showComment);
          }}
          style={{ marginLeft: 5, flexDirection: "row" }}
        >
          <EvilIcons name="comment" size={24} color="black" />
          <Text style={{ fontSize: 15 }}>Commenter</Text>
        </TouchableOpacity>

        <View style={{ alignSelf: "flex-end", marginTop: 50 }}>
          <Image
            resizeMode="cover"
            style={{
              position: "absolute",
              right: -120,
              bottom: 10,
              zIndex: 1,
              width: 30,
              height: 30,
              borderRadius: 50,
              overflow: "hidden",
            }}
            source={require("../../assets/profil.jpg")}
          />
          <Image
            resizeMode="cover"
            style={{
              position: "absolute",
              right: -135,
              bottom: 10,
              zIndex: 3,
              width: 30,
              height: 30,
              borderRadius: 50,
              overflow: "hidden",
            }}
            source={require("../../assets/profil.jpg")}
          />
          <Image
            resizeMode="cover"
            style={{
              position: "absolute",
              right: -150,
              bottom: 10,
              zIndex: 4,
              width: 30,
              height: 30,
              borderRadius: 50,
              overflow: "hidden",
            }}
            source={require("../../assets/profil.jpg")}
          />
        </View>
      </View>
      {showComment ? <Comments postId={item.id} /> : null}
    </Animated.View>
  );
};

export default Post;
