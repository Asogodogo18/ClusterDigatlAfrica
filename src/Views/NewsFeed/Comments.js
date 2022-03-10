import {
  View,
  Text,
  ActivityIndicator,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import {
  EvilIcons,
  FontAwesome,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";

import { getFirstLetter } from "../../Utils/getRandomColor";

const Header = ({ name, email }) => {
  return (
    <View style={{ flexDirection: "row", maxHeight: 50 }}>
      <View
        style={{
          backgroundColor: "#80ff72",
          height: 35,
          width: 35,
          borderRadius: 35,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "600", color: "gray" }}>
          {getFirstLetter(name)}
        </Text>
      </View>
      <View
        style={{
          justifyContent: "space-between",
          marginLeft: 5,
          paddingHorizontal: 2,
          paddingBottom: 2,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
          >
            {name.substring(0, 20)}
          </Text>
          <EvilIcons
            name="check"
            style={{ marginLeft: 2 }}
            size={14}
            color="green"
          />
        </View>
        <Text style={{ fontSize: 10, fontWeight: "400", opacity: 0.75 }}>
          @_{email}
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          position: "absolute",
          right: 0,
          top: 0,
          alignItems: "center",
          marginRight: 5,
          justifyContent: "space-around",
        }}
      >
        <EvilIcons name="clock" size={14} color="gray" />
        <Text style={{ fontSize: 10, fontWeight: "400", opacity: 0.75 }}>
          Il y'a 10 minutes
        </Text>
      </View>
    </View>
  );
};
const Footer = () => {
  const [showComment, setShowComment] = useState(false);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          maxHeight: 40,
          marginTop: 5,
          marginLeft: 10,
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            setShowComment(!showComment);
          }}
        >
          <View>
            <Text style={{ fontSize: 14, color: "gray", alignItems: "center" }}>
              <FontAwesome name="reply" size={15} color="gray" /> 0{" "}
            </Text>
          </View>
        </TouchableOpacity>

        <Text style={{ fontSize: 14, color: "gray", alignItems: "center" }}>
          <FontAwesome name="heart-o" size={15} color="gray" /> 0{" "}
        </Text>
        <Text style={{ fontSize: 14, color: "gray", alignItems: "center" }}>
          <FontAwesome name="retweet" size={15} color="gray" /> 0{" "}
        </Text>
        <Text style={{ fontSize: 14, color: "gray", alignItems: "center" }}>
          <FontAwesome name="upload" size={15} color="gray" /> 0{" "}
        </Text>
        <TouchableOpacity
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            alignItems: "center",
            marginRight: 0,
          }}
        >
          <SimpleLineIcons name="options-vertical" size={15} color="gray" />
        </TouchableOpacity>
      </View>

      {showComment ? (
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          <TextInput style={styles.input} />
          <TouchableOpacity style={styles.button}>
            <MaterialCommunityIcons
              name="send-circle-outline"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
};
const Comments = ({ postId }) => {
  const { isLoading, error, data, isFetching } = useQuery("repoData", () =>
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((res) => res.data)
  );

  if (isFetching)
    return <ActivityIndicator color="green" animating size="large" />;
  if (error) {
    return (
      <View>
        <Text> "Une erreur est survenue: "{error.message}</Text>
      </View>
    );
  }

  return (
    <View style={{ borderTopWidth: 2, borderTopColor: "#00b712" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        <TextInput style={styles.input} />
        <TouchableOpacity style={styles.button}>
          <MaterialCommunityIcons
            name="send-circle-outline"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
      {data.map((element) => {
        //J'avais oublie de mettre le return ici
        return (
          <View
            key={`${element.id}`}
            style={{
              marginVertical: 2,
              minHeight: 100,
              padding: 5,
              borderBottomWidth: 1,
              borderBottomColor: "#80ff72",
            }}
          >
            <Header name={element.name} email={element.email} />
            <Text
              style={{
                marginLeft: 40,
                fontSize: 10,
                fontWeight: "400",
                textAlign: "left",
              }}
            >
              {element.body}
            </Text>
            <Footer />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 35,
    width: 280,
    borderRadius: 20,
    borderWidth: 0.8,
    borderColor: "#00b712",
    padding: 10,
  },
  button: {
    backgroundColor: "#00b712",
    borderRadius: 60,

    height: 35,
    elevation: 5,

    padding: 5,
  },
});

export default Comments;
