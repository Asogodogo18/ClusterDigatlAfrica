import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Video, AVPlaybackStatus } from "expo-av";
import { Ionicons, AntDesign } from "@expo/vector-icons";

const { width, height } = Dimensions.get("screen");

export default function CoursView() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      stickyHeaderHiddenOnScroll={true}
      stickyHeaderIndices={[0]}
      contentContainerStyle={styles.contain}
    >
      <View style={styles.video}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
          }}
          useNativeControls
          resizeMode="cover"
          isLooping
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
      </View>

      <View style={{ padding: 10 }}>
        <Text>
          Elit fugiat tempor commodo qui eu anim. Excepteur nostrud non officia
          culpa ea ipsum nisi laborum minim. Ea duis proident laborum ut
          adipisicing voluptate aliqua enim exercitation. Veniam mollit velit
          non duis in excepteur cupidatat commodo anim labore dolore do sint.
          Excepteur cillum ea officia minim esse quis irure laborum commodo
          fugiat incididunt ad esse. Cupidatat dolore ad ex do ullamco laboris
          eiusmod commodo Lorem ut. Ad nisi anim veniam consectetur deserunt
          consequat Lorem. Ea ea id proident consequat cillum mollit est amet.
          Occaecat duis ea excepteur ut ad est. Enim in incididunt sint laboris
          pariatur laboris minim occaecat enim occaecat fugiat id do. Duis
          occaecat aliqua non ut cupidatat fugiat. Proident in laborum laboris
          non tempor incididunt ut ex ex adipisicing enim excepteur. Culpa Lorem
          in amet elit enim est magna enim ut. Dolore pariatur sunt commodo
        </Text>
        <Text>
          nulla labore esse culpa elit consectetur officia pariatur id id.
          Mollit sint reprehenderit veniam ipsum laborum minim excepteur tempor
          dolore cillum nostrud. Ut qui exercitation minim veniam velit
          consectetur sunt pariatur dolor aute ex anim. Amet Lorem eu duis irure
          do aliquip reprehenderit aliquip excepteur exercitation labore
          deserunt commodo. Incididunt amet nostrud irure enim culpa velit
          aliqua commodo ipsum deserunt anim consectetur est. Nisi magna sit
          Lorem anim sit amet dolor. Laborum dolor in do et anim duis veniam
          esse. Ad sunt ut ea Lorem. Consequat consectetur quis minim voluptate
          sit amet magna Lorem fugiat eiusmod laborum Lorem officia ea. Anim
          anim qui enim Lorem voluptate. Labore cupidatat fugiat in est officia
          nisi non amet quis elit veniam. Aute eu aliqua quis dolor amet
          reprehenderit cupidatat anim consectetur et esse enim. Adipisicing
          aute consequat in elit amet labore quis. Ut minim id culpa anim nulla
          culpa sit. Reprehenderit commodo occaecat Lorem consectetur eiusmod ex
          do Lorem quis laborum irure ipsum incididunt ad. Enim id proident anim
          ipsum anim duis mollit aute. Veniam consectetur ipsum enim sunt
          proident nisi non eu. Laborum nostrud esse consectetur Lorem. Ea duis
          ullamco id cillum exercitation excepteur laborum officia amet enim
          consequat officia. Tempor minim sint officia duis officia proident
          Lorem est cupidatat deserunt. Consequat incididunt nulla cillum
          exercitation ullamco esse. Amet officia do fugiat do laborum. Velit
          ipsum mollit enim elit. Culpa reprehenderit ut laborum aliquip
          voluptate incididunt fugiat consectetur. Lorem amet mollit esse duis
          enim amet duis. Excepteur pariatur reprehenderit et labore cillum
          ipsum. Reprehenderit elit aliquip ipsum tempor officia veniam sunt do
          consectetur labore est. Ex consectetur culpa quis qui esse deserunt
          ipsum pariatur sit ad. Veniam aliquip ex aliqua duis minim nulla
          labore mollit Lorem laborum dolore et. Incididunt mollit exercitation
          fugiat dolore aliquip ullamco. Eu ullamco ut magna officia. Duis
          tempor occaecat velit est consequat Lorem nostrud anim enim. Aliquip
          deserunt elit occaecat enim reprehenderit ipsum quis qui ea pariatur
          pariatur aute. Labore dolore cillum fugiat laborum eu nisi laborum
          excepteur ipsum ullamco veniam Lorem ad.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  contain: {
    flexGrow: 1,
  },
  video: {
    alignSelf: "center",
    width: width,
    height: 200,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
