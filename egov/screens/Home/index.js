import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ActivityIndicator,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import BarcodeMask from "react-native-barcode-mask";
import axios from "axios";

import {
  Avatar,
  Modal,
  FAB,
  Portal,
  Title,
  Provider,
} from "react-native-paper";
import { ScaledSheet } from "react-native-size-matters";

export default function App() {
  const finderWidth = 280;
  const finderHeight = 630;
  const width = Dimensions.get("window").width;
  const height = Dimensions.get("window").height;
  const viewMinX = (width - finderWidth) / 2;
  const viewMinY = (height - finderHeight) / 2;

  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hasPermission, setHasPermission] = useState(null);
  const [scannedUser, setScannedUser] = useState(null);
  const [voteInfo, setVoteInfo] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [visible, setVisible] = React.useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {
    backgroundColor: "white",
    padding: 0,
    marginBottom: 40,
  };

  const baseUrl = "http://197.155.143.74:1214";

  async function VerifyUser(data) {
    console.log(data);
    try {
      setIsLoading(true);
      const response = await axios.get(`${baseUrl}/api/readUserByNinaNumber`, {
        params: {
          code_iden: data,
        },
      });

      console.log(response.data);
      response.data.hasOwnProperty("Message")
        ? setError(response.data.Message)
        : setScannedUser(response.data.citoyen);
      // const { vote } = response.data.citoyen;
      // if (vote.message) {
      //   console.log("Vote..:",vote)
      //   setVoteInfo(vote);
      //   console.log("Vote Info..:", voteInfo);
      // }
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ type, data, bounds: { origin } = {} }) => {
    setScanned(true);
    setVisible(true);
    VerifyUser(data);
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={{ flex: 1 }}>
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      >
        <BarcodeMask edgeColor="#62B1F6" showAnimatedLine />
      </BarCodeScanner>
      <Provider>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModal}
            contentContainerStyle={containerStyle}
          >
            {IsLoading && (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 20,
                }}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    textTransform: "uppercase",
                  }}
                >
                  En cours de vérification..
                </Text>
                <ActivityIndicator size="large" color="#00ff00" />
              </View>
            )}
            {error ? (
              <>
                <View
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 20,
                  }}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      textTransform: "uppercase",
                    }}
                  >
                    {error}
                  </Text>
                  <Image
                    style={styles.errorImg}
                    source={require("../../assets/remove.png")}
                    resizeMode="contain"
                  />
                </View>
              </>
            ) : scannedUser && !IsLoading ? (
              <ScrollView contentContainerStyle={{ marginBottom: 40 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingTop: 20,
                    marginBottom: 0,
                  }}
                >
                  <Avatar.Image
                    source={{
                      uri: scannedUser.picture,
                    }}
                    size={150}
                  />
                  <View
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <Text style={styles.title}>{scannedUser.firstname}</Text>
                    <Text style={styles.title}>
                      {scannedUser.father_lastname}
                    </Text>
                  </View>
                </View>
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <Text style={styles.subHeading}>
                    Informations de la carte
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.itemsLeft}>
                    <Text style={styles.label}>Date de Naissance:</Text>
                    <Text style={styles.label}>Lieu de Naissance:</Text>
                    <Text style={styles.label}>Nom du Père:</Text>
                    <Text style={styles.label}>Nom de la Mère:</Text>
                    <Text style={styles.label}>Profession:</Text>
                    <Text style={styles.label}>Domicile:</Text>
                    {/* <Text style={styles.label}>Bureau de Vote:</Text> */}
                    <Text style={styles.label}>Délivré le:</Text>
                  </View>
                  <View style={styles.itemsRight}>
                    <Text style={styles.label2}>{scannedUser.birthday}</Text>
                    <Text style={styles.label2}>{scannedUser.birthplace}</Text>
                    <Text style={styles.label2}>
                      {scannedUser.father_firstname}{" "}
                      {scannedUser.father_lastname}
                    </Text>
                    <Text style={styles.label2}>
                      {scannedUser.mother_firstname}{" "}
                      {scannedUser.mother_lastname}
                    </Text>
                    <Text style={styles.label2}>{scannedUser.profession}</Text>
                    <Text style={styles.label2}>
                      {scannedUser.location_v_f_quartier}
                    </Text>
                    {/* <Text style={styles.label2}>{scannedUser.create_date}</Text> */}
                    <Text style={styles.label2}>{scannedUser.create_date}</Text>
                  </View>
                </View>
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <Text style={styles.subHeading}>Carte d'électeur</Text>
                </View>
                <Text style={styles.label2}></Text>
                <View style={{ flexDirection: "row" }}>
                  <View style={styles.itemsLeft}>
                    <Text style={styles.label}>Date de Vote:</Text>
                    <Text style={styles.label}>Centre de Vote:</Text>
                    <Text style={styles.label}>Bureau de Vote:</Text>
                    <Text style={styles.label}>Lieu de Vote:</Text>
                    <Text style={styles.label}>Pays de Vote:</Text>
                  </View>
                  <View style={styles.itemsRight}>
                    <Text style={styles.label2}>02-2023</Text>
                    <Text style={styles.label2}>Centre B</Text>
                    <Text style={styles.label2}>15</Text>
                    <Text style={styles.label2}>Boulkasssoumbougou</Text>
                    <Text style={styles.label2}>MALI</Text>
                  </View>
                </View>
                {/* {voteInfo.message !=="false" ? (
                  <>
                    {" "}
                    {" "}
                  </>
                ) : null} */}
                <View
                  style={{ flexDirection: "row", justifyContent: "center" }}
                >
                  <Text style={styles.subHeading}>Empreintes Digitales</Text>
                </View>
                <View style={{ flexDirection: "row", marginVertical: 10 }}>
                  <View style={styles.prints}>
                    <Text style={styles.label2}>Pouce</Text>
                    <Image
                      source={{
                        uri: scannedUser.pouce,
                      }}
                      style={{
                        width: 60,
                        height: 60,
                      }}
                    />
                  </View>
                  <View style={styles.prints}>
                    <Text style={styles.label2}>Index</Text>
                    <Image
                      source={{
                        uri: scannedUser.index,
                      }}
                      style={{
                        width: 60,
                        height: 60,
                      }}
                    />
                  </View>
                  <View style={styles.prints}>
                    <Text style={styles.label2}>Majeur</Text>
                    <Image
                      source={{
                        uri: scannedUser.majeur,
                      }}
                      style={{
                        width: 60,
                        height: 60,
                      }}
                    />
                  </View>
                  <View style={styles.prints}>
                    <Text style={styles.label2}>Annulaire</Text>
                    <Image
                      source={{
                        uri: scannedUser.annulaire,
                      }}
                      style={{
                        width: 60,
                        height: 60,
                      }}
                    />
                  </View>
                  <View style={styles.prints}>
                    <Text style={styles.label2}>Auriculaire</Text>
                    <Image
                      source={{
                        uri: scannedUser.auriculaire,
                      }}
                      style={{
                        width: 60,
                        height: 60,
                      }}
                    />
                  </View>
                </View>
              </ScrollView>
            ) : null}
          </Modal>
          {/* <FAB.Group
          open={open}
          icon={open ? "calendar-today" : "plus"}
          actions={[
            {
              icon: "plus",
              label: "Paramètres",
              onPress: () => navigation.push("moderatorSettings"),
            },
            {
              icon: "logout",
              label: "Déconnexion",
              onPress: () => {
                navigation.navigate("Auth");
              },
              small: false,
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        /> */}
        </Portal>
      </Provider>
      {scanned && (
        <Button
          title={"Appuyer pour Scanner"}
          onPress={() => {
            setScanned(false);
            setVisible(false);
            setError(null);
            setScannedUser(null);
          }}
        />
      )}
    </View>
  );
}
const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  containerView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    marginHorizontal: 20,
    fontWeight: "bold",
    fontSize: 18,
  },
  subHeading: {
    marginTop: 10,
    fontWeight: "bold",
    fontSize: 15,
    textTransform: "uppercase",
    borderBottomWidth: 4,
    borderBottomRightRadius: 10,
    borderBottomColor: "#00CBE7",
    textAlign: "center",
  },
  itemsLeft: {
    padding: 10,
  },
  itemsRight: {
    padding: 10,
  },
  barcodeBox: {
    alignItems: "center",
    justifyContent: "center",
    height: "300@ms",
    width: "300@ms",
    overflow: "hidden",
  },
  label: {
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
  },
  label2: {
    fontSize: 14,
    fontWeight: "200",
    textAlign: "center",
  },
  prints: {
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
  },
  rescanBtn: {
    backgroundColor: "white",
    borderRadius: 5,
    position: "absolute",
    margin: 16,
    top: 15,
  },
  infoText: {
    fontSize: "18@ms0.3",
  },
  errorImg: {
    height: "150@vs",
    width: "150@ms",
  },
});
