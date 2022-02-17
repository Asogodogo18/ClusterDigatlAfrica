import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  FlatList,
  Image,
  Pressable,
} from "react-native";

import {
  Button,
  Paragraph,
  Dialog,
  Portal,
  Provider,
} from "react-native-paper";

const { width, height } = Dimensions.get("screen");

const Candidat = [
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb275k",
    title: "Campagne Electorale",
    party: "2014",
    image: require("../../assets/images/1.jpg"),
  },
  {
    id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
    title: "Campagne Municipale",
    party: "2017",
    image: require("../../assets/images/1.jpg"),
  },
  {
    id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
    title: "Campagne Communale",
    party: "2015",
    image: require("../../assets/images/2.png"),
  },  
];

export default function PollScreen(props) {
  const [text, onChangeText] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [selectedCandidate, setSelectedCandidate] = React.useState(null);

  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const Item = ({ item }) => (
    <Pressable
      onPress={() => {
        setSelectedCandidate(item);
        setVisible(true);
      }}
    >
      <View style={styles.item}>
        <View
          style={{
            flex: 0.2,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 50,
            borderWidth: 5,
            borderColor: "#3baddad1",
            overflow: "hidden",
            backgroundColor: "white",
          }}
        >
          <Image style={styles.Avatar} source={item.image} />
        </View>
        <View style={{ flex: 0.8, marginLeft: 10 }}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}>{item.party}</Text>
        </View>
      </View>
    </Pressable>
  );

  const renderItem = ({ item }) => <Item item={item} />;
  return (
    <Provider>
      <View style={styles.container}>
        <View
          style={{ flex: 2, alignItems: "center", justifyContent: "center" }}
        >
          <TextInput
            style={styles.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Entrer Votre NINA"
          />
        </View>
        <View style={{ flex: 8, width: "95%", paddingHorizontal:10, paddingVertical:0 }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "400",
              textTransform: "uppercase",
            }}
          >
            CAMPAGNE ELECTORALE
          </Text>
          <FlatList
            data={Candidat}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <Portal>
        <Dialog visible={visible} onDismiss={hideDialog}>
          <Dialog.Title style={{ textAlign: "center" }}>
            Êtes-Vous sûr de vouloir voter pour :
          </Dialog.Title>
          <Dialog.Content>
            {selectedCandidate ? <Item item={selectedCandidate} /> : null}
          </Dialog.Content>
          <Dialog.Actions
            style={{ justifyContent: "center", marginBottom: 10 }}
          >
            <Pressable
              style={{
                backgroundColor: "#F30808",
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginHorizontal: 30,
              }}
              onPress={() => {
                setSelectedCandidate(null);
                setVisible(false);
              }}
            >
              <Text style={styles.text}>NON</Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor: "#00A310",
                paddingHorizontal: 10,
                paddingVertical: 5,
                marginHorizontal: 30,
              }}
              onPress={() => {
                setVisible(false);
                props.navigation.navigate("Validation", {
                  candidat: selectedCandidate,
                });
              }}
            >
              <Text style={styles.text}>Oui</Text>
            </Pressable>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    marginTop: 10,
    width: width - 40,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    flexDirection: "row",
    // width: "",
    backgroundColor: "#00CBE7",
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 5,
    borderRadius:10
  },
  title: {
    fontSize: 24,
    color: "white",
  },
  subtitle: {
    fontSize: 13,
    fontWeight: "400",
    textTransform: "uppercase",
  },
  Avatar: {
    width: 56,
    height: 56,
    resizeMode: "cover",
  },
  text: {
    textTransform: "uppercase",
    fontSize: 16,
    color: "white",
  },
});
