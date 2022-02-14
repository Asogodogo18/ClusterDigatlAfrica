import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Linking,
  Platform,
} from "react-native";
import React, { useState } from "react";
import SegmentedControlTab from "react-native-segmented-control-tab";
import Modal from "react-native-modal";
import Donation from "../../Components/elementCrowdFunding/donation";
import Video from "../../Components/elementCrowdFunding/video";
import Equipe from "../../Components/elementCrowdFunding/equipe";
import DonatioReusi from "../../Components/elementCrowdFunding/donationReussi";

import {
  AntDesign,
  Entypo,
  Ionicons,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Animated } from "react-native-reanimated";
import CircularProgress from "../../Components/shared/circularProgress";

const { height, width } = Dimensions.get("screen");

const CrowdfundingDetails = ({ navigation }) => {
  const [isPresentationVisible, setPresentationVisible] = useState(false);
  const [isVideoVisible, setVideoVisible] = useState(false);
  const [isDocumentVisible, setDocumentVisible] = useState(false);
  const [isTeamVisible, setTeamVisible] = useState(false);
  const [isDonationVisible, setDonationVisible] = useState(false);
  const [isCommentsVisible, setCommentsVisible] = useState(false);
  const [isFairedonVisible, setFairedonVisible] = useState(false);
  const [singleIndex, setsingleIndex] = useState(0);

  const onIndexChanged = (index) => {
    setsingleIndex(index);
  };
  const toggleModal1 = () => {
    setPresentationVisible(!isPresentationVisible);
  };
  const toggleModal2 = () => {
    setVideoVisible(!isVideoVisible);
  };
  const toggleModal3 = () => {
    setDocumentVisible(!isDocumentVisible);
  };
  const toggleModal4 = () => {
    setTeamVisible(!isTeamVisible);
  };
  const toggleModal5 = () => {
    setDonationVisible(!isDonationVisible);
  };
  const toggleModal6 = () => {
    setCommentsVisible(!isCommentsVisible);
  };
  const faireDon = () => {
    setFairedonVisible(!isFairedonVisible);
  };
  return (
    <View style={styles.contain}>
      <TouchableOpacity
        style={{
          position: "absolute",
          padding: 12,
          top: 0,
          left: 5,
          zIndex: 5,
        }}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={30} color="white" />
      </TouchableOpacity>
      <View style={styles.section1}>
        <View
          style={{ flex: 2.5, justifyContent: "center", alignSelf: "auto" }}
        >
          <Image
            source={require("../../../assets/e.jpg")}
            style={{
              resizeMode: "cover",
              width: width,
              height: Platform.OS == "ios" ? 400 : 350,
              position: "absolute",
              top: -100,
              opacity: 0.9,
            }}
          />
        </View>
        <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.4)" }}>
          <View>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "white",
                letterSpacing: 1,
              }}
            >
              titre
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: "white",
                letterSpacing: 1,
                opacity: 0.8,
              }}
            >
              Subtitle
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "white",
                letterSpacing: 1,
              }}
            >
              19%
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: "white",
                letterSpacing: 1,
                opacity: 0.8,
              }}
            >
              Collecte
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: 28,
                fontWeight: "bold",
                color: "white",
                letterSpacing: 1,
              }}
            >
              Mali
            </Text>
            <Text
              style={{
                fontSize: 13,
                fontWeight: "400",
                color: "white",
                letterSpacing: 1,
                opacity: 0.8,
              }}
            >
              Bamako
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.section2}>
        <View style={styles.header}>
          <View style={{ flex: 2, padding: 10, marginLeft: 5 }}>
            <Text style={{ textAlign: "center" }}>
              1.000.000 Fr CFA Obtenu sur{" "}
              <Text style={{ fontWeight: "bold" }}>10.000.000 Fr CFA</Text>
            </Text>
          </View>
          <View
            style={{ height: 45, width: 3, backgroundColor: "lightgreen" }}
          />

          <View
            style={{
              flexDirection: "row",
              flex: 1,
              // padding: 10,
              justifyContent: "space-around",
              marginRight: 10,
            }}
          >
            <LinearGradient
              colors={["#34c747", "#00FFFF"]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 2.0, y: 0.0 }}
              style={{
                borderRadius: Platform.OS === "android" ? 160 : 25,
                padding: 10,
              }}
            >
              <TouchableOpacity style={{}}>
                <AntDesign name="heart" size={20} color="white" />
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              colors={["#34c747", "#00FFFF"]}
              start={{ x: 0.0, y: 0.0 }}
              end={{ x: 2.0, y: 0.0 }}
              style={{
                borderRadius: Platform.OS === "android" ? 160 : 25,
                padding: 10,
              }}
            >
              <TouchableOpacity>
                <Entypo name="share" size={20} color="white" />
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </View>
        <View style={styles.sectionContain}>
          {singleIndex == 0 && (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 4,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <CircularProgress size={150} percentage={10} />
              </View>
              <View style={{ flex: 2, marginLeft: 50, marginBottom: 15 }}>
                <View>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      color: "black",
                      letterSpacing: 1,
                    }}
                  >
                    60%
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "400",
                      color: "black",
                      letterSpacing: 1,
                      opacity: 0.8,
                    }}
                  >
                    Collecte
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      fontSize: 28,
                      fontWeight: "bold",
                      color: "black",
                      letterSpacing: 1,
                    }}
                  >
                    32%
                  </Text>
                  <Text
                    style={{
                      fontSize: 13,
                      fontWeight: "400",
                      color: "black",
                      letterSpacing: 1,
                      opacity: 0.8,
                    }}
                  >
                    Collecte
                  </Text>
                </View>
              </View>
            </View>
          )}
          {singleIndex == 1 && (
            <View
              style={{
                flexGrow: 1,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                padding: 15,
              }}
            >
              <View
                style={{
                  flex: 1,
                }}
              >
                {/* Presentation */}
                <TouchableOpacity
                  style={styles.infoCard}
                  onPress={toggleModal1}
                >
                  <MaterialCommunityIcons
                    name="presentation"
                    size={20}
                    color="black"
                  />
                  <Text style={styles.heading}> Présentation</Text>
                </TouchableOpacity>
                {/* Video */}

                <TouchableOpacity
                  style={styles.infoCard}
                  onPress={toggleModal2}
                >
                  <Ionicons name="videocam-outline" size={20} color="black" />
                  <Text style={styles.heading}> Vidéo</Text>
                </TouchableOpacity>

                {/* Documents */}

                <TouchableOpacity
                  style={styles.infoCard}
                  onPress={toggleModal3}
                >
                  <MaterialCommunityIcons
                    name="file-document"
                    size={20}
                    color="black"
                  />
                  <Text style={styles.heading}> Documents</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                {/* Team */}

                <TouchableOpacity
                  style={styles.infoCard}
                  onPress={toggleModal4}
                >
                  <AntDesign name="team" size={20} color="black" />
                  <Text style={styles.heading}> Equipes</Text>
                </TouchableOpacity>

                {/* Donations */}

                <TouchableOpacity
                  style={styles.infoCard}
                  onPress={toggleModal5}
                >
                  <FontAwesome5 name="donate" size={20} color="black" />
                  <Text style={styles.heading}> Donations</Text>
                </TouchableOpacity>

                {/* Commentaires */}

                <TouchableOpacity
                  style={styles.infoCard}
                  onPress={toggleModal6}
                >
                  <MaterialCommunityIcons
                    name="comment-multiple-outline"
                    size={20}
                    color="black"
                  />
                  <Text style={styles.heading}> Commentaires</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </View>
        <SegmentedControlTab
          values={["Statistique", "Information"]}
          selectedIndex={singleIndex}
          tabStyle={{
            borderColor: "transparent",
          }}
          tabsContainerStyle={{
            height: 50,
            width: width,
            position: "absolute",
            left: 0,
            right: 0,
            bottom: -1,
          }}
          activeTabStyle={[
            {
              backgroundColor: "green",
            },
            singleIndex ? styles.activeTabRight : styles.activeTabLeft,
          ]}
          activeTabTextStyle={{
            color: "white",
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
      </View>
      <View style={styles.section3}>
        <LinearGradient
          colors={["#34c747", "#00FFFF"]}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 2.0, y: 0.0 }}
          style={{
            width: "49%",
            justifyContent: "center",
            borderRadius: Platform.OS === "android" ? 160 : 25,
            padding: 0,
          }}
        >
          <TouchableOpacity style={styles.sectionBtn} onPress={faireDon}>
            <FontAwesome5
              name="donate"
              size={30}
              color="white"
              style={{ marginRight: 10 }}
            />
            <Text style={{ color: "white", textTransform: "uppercase" }}>
              Faire un Don
            </Text>
          </TouchableOpacity>
        </LinearGradient>
        <LinearGradient
          colors={["#34c747", "#00FFFF"]}
          start={{ x: 0.0, y: 0.0 }}
          end={{ x: 2.0, y: 0.0 }}
          style={{
            width: "49%",
            justifyContent: "center",
            borderRadius: Platform.OS === "android" ? 160 : 25,
            padding: 0,
          }}
        >
          <TouchableOpacity style={styles.sectionBtn} onPress={() => {}}>
            <AntDesign
              name="contacts"
              size={30}
              color="white"
              style={{ marginRight: 10 }}
            />
            <Text style={{ color: "white", textTransform: "uppercase" }}>
              Contacte
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </View>
      <Modal
        onBackdropPress={toggleModal1}
        onBackButtonPress={toggleModal1}
        style={styles.modalContainer}
        isVisible={isPresentationVisible}
        // onSwipeComplete={toggleModal1}
        // swipeDirection={["up", "down"]}
      >
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
        </View>
      </Modal>
      <Modal
        style={styles.modalContainer}
        onBackButtonPress={toggleModal2}
        onBackdropPress={toggleModal2}
        isVisible={isVideoVisible}
        // onSwipeComplete={toggleModal2}
        // swipeDirection={["up", "down"]}
      >
        <Video />
      </Modal>
      <Modal
        style={styles.modalContainer}
        onBackdropPress={toggleModal3}
        onBackButtonPress={toggleModal3}
        isVisible={isDocumentVisible}
        // onSwipeComplete={toggleModal3}
        // swipeDirection={["up", "down"]}
      >
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
        </View>
      </Modal>
      <Modal
        style={styles.modalContainer}
        onBackButtonPress={toggleModal4}
        onBackdropPress={toggleModal4}
        isVisible={isTeamVisible}
        // onSwipeComplete={toggleModal4}
        // swipeDirection={["up", "down"]}
      >
        <View style={{ flex: 1 }}>
          <Equipe />
        </View>
      </Modal>
      <Modal
        style={styles.modalContainer}
        onBackButtonPress={toggleModal5}
        onBackdropPress={toggleModal5}
        isVisible={isDonationVisible}
        // onSwipeComplete={toggleModal5}
        // swipeDirection={["up", "down"]}
      >
        <View style={{ flex: 1 }}>
          <DonatioReusi />
        </View>
      </Modal>
      <Modal
        style={styles.modalContainer}
        onBackButtonPress={toggleModal6}
        onBackdropPress={toggleModal6}
        isVisible={isCommentsVisible}
        // onSwipeComplete={toggleModal6}
        // swipeDirection={["up", "down"]}
      >
        <View style={{ flex: 1 }}>
          <Text>Hello!</Text>
        </View>
      </Modal>
      <Modal
        style={[styles.modalContainer, { backgroundColor: "rgba(0,0,0,0.9)" }]}
        onBackButtonPress={() => {
          setFairedonVisible(false);
        }}
        onBackdropPress={() => {
          setFairedonVisible(false);
        }}
        isVisible={isFairedonVisible}
        // onSwipeComplete={faireDon}
        // swipeDirection={["up", "down"]}
      >
        <Donation />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  contain: {
    flex: 1,
  },
  section1: {
    flexDirection: "row",
    paddingTop: 80,
  },
  section2: {
    flexGrow: 1,
    width: width,
    minHeight: 350,
    backgroundColor: "white",
    borderRadius: 50,
    elevation: 5,
    position: "absolute",
    top: height / 2.9,
    overflow: "hidden",
  },
  activeTabLeft: {
    borderTopRightRadius: 20,
  },
  activeTabRight: {
    borderTopLeftRadius: 20,
  },
  section3: {
    position: "absolute",
    bottom: Platform.OS == "ios" ? 50 : 10,
    alignSelf: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    width: "100%",
  },
  sectionBtn: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
    elevation: 5,
    height: 35,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "white",
    elevation: 5,
    marginTop: 0,
    alignItems: "center",
  },
  sectionContain: {
    flex: 4,
    margin: 10,
    marginBottom: 60,
  },
  infoCard: {
    flexGrow: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  heading: {
    fontSize: 38,
    fontWeight: "900",
    letterSpacing: -2,
  },
  heading: {
    fontSize: 20,
    lineHeight: 20 * 1.5,
    letterSpacing: -2,
  },
  modalContainer: {
    height: height / 1.2,
    backgroundColor: "white",
  },
});

export default CrowdfundingDetails;
