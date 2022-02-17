import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import { AntDesign } from "@expo/vector-icons";

import { enableScreens } from "react-native-screens";
enableScreens();

//import les screen
import Accueil from "../../Screen/Accueil/index";
import Presentation from "../../Screen/Presentation/index";

import Partenaire from "../../Screen/Partenaire";
import DetailPartenaire from "../../Screen/Partenaire/detailPartenaire";
import BureauExecutif from "../../Screen/BureauExcecutif/index";
import Contact from "../../Screen/Contact/index";
import Membres from "../../Screen/Membres";
import MembreDetails from "../../Screen/Membres/MembreDetails";
import Pepinier from "../../Screen/Pepiniere";
import CustonDrawer from "../../Components/custonDrawer";
import Event from "../../Screen/Event/Events";
import EventDetails from "../../Screen/Event/EventDetails";
import EventListeDetails from "../../Screen/Event/EventListeDetails";
import Webinaire from "../../Screen/Webinaire/Webinaires";
import WebinaireDetails from "../../Screen/Webinaire/WebinaireDetails";
import WebinaireListeDetail from "../../Screen/Webinaire/WebinaireListeDetail";
//import sharded Screen
import Speaker from "../../Screen/speaker/index";
import SpeakerDetail from "../../Screen/speaker/detailSpeaker";
import Details from "../../Screen/Accueil/details";
import Biographie from "../../Screen/Biographie";
import detailBiographie from "../../Screen/Biographie/detailBiographie";
import { Crowdfunding, CrowdfundingDetails } from "../../Screen/crowdfunding";
import DetailsPresentation from "../../Screen/Presentation/detailPresentation";
import Inscriptions from "../../Screen/Inscription";
import StartUp from "../../Screen/Startup";
import DetailStartUp from "../../Screen/Startup/DetailStartUp";
//screens Uvm
import Onboarding from "../../Screen/Uvm/Onboarding";
import AccueilUvm from "../../Screen/Uvm/Accueil";
import Library from "../../Screen/Uvm/Bibliothéque";
import Cours from "../../Screen/Uvm/Cours";
import Profile from "../../Screen/Uvm/Profile";
import { Easing } from "react-native-reanimated";

const Stack = createStackNavigator();
const BottomStack = createBottomTabNavigator();

const Drawer = createDrawerNavigator();
const sharedStack = createSharedElementStackNavigator();
const WebinaireShardedStack = createSharedElementStackNavigator();
const EventShardedStack = createSharedElementStackNavigator();
const SpeakerShardedStack = createSharedElementStackNavigator();
const BiographieShardedStack = createSharedElementStackNavigator();
const CrowdfundingShardedStack = createSharedElementStackNavigator();
const SharedScreens = () => {
  return (
    <sharedStack.Navigator>
      <sharedStack.Screen
        name="index"
        component={Accueil}
        options={{ headerShown: false }}
      />
      <sharedStack.Screen
        name="Membres"
        component={Membres}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
          },
          cardStyleInterpolation: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
      />
      <sharedStack.Screen
        name="Details"
        component={Details}
        options={({ route }) => ({
          // headerShown: false,
          title: route.params.item.title,
          headerTitleAlign: "center",
          gestureEnabled: false,

          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
          },
          cardStyleInterpolation: ({ current: { progress } }) => {
            return {
              cardStyle: {
                opacity: progress,
              },
            };
          },
        })}
      />
    </sharedStack.Navigator>
  );
};
const WebinaireScreen = () => {
  return (
    <WebinaireShardedStack.Navigator>
      <WebinaireShardedStack.Screen
        name="index"
        component={Webinaire}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
        })}
      />
      <WebinaireShardedStack.Screen
        name="WebinaireDetails"
        component={WebinaireDetails}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
          },
        })}
      />
      <WebinaireShardedStack.Screen
        name="WebinaireListeDetail"
        component={WebinaireListeDetail}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 300, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 300, easing: Easing.inOut(Easing.ease) },
            },
          },
        })}
      />
    </WebinaireShardedStack.Navigator>
  );
};
const EventScreen = () => {
  return (
    <EventShardedStack.Navigator>
      <EventShardedStack.Screen
        name="index"
        component={Event}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
        })}
      />
      <EventShardedStack.Screen
        name="EventDetails"
        component={EventDetails}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
          },
        })}
      />
      <EventShardedStack.Screen
        name="EventListeDetail"
        component={EventListeDetails}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 300, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 300, easing: Easing.inOut(Easing.ease) },
            },
          },
        })}
      />
    </EventShardedStack.Navigator>
  );
};
const SpeakerScreen = () => {
  return (
    <SpeakerShardedStack.Navigator>
      <SpeakerShardedStack.Screen
        name="index"
        component={Speaker}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
          },
        })}
      />
      <SpeakerShardedStack.Screen
        name="SpeakerDetail"
        component={SpeakerDetail}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
          },
        })}
      />
    </SpeakerShardedStack.Navigator>
  );
};
const BiographieScreen = () => {
  return (
    <BiographieShardedStack.Navigator>
      <BiographieShardedStack.Screen
        name="index"
        component={Biographie}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
          },
        })}
      />
      <BiographieShardedStack.Screen
        name="DetailBiographie"
        component={detailBiographie}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
          },
        })}
      />
    </BiographieShardedStack.Navigator>
  );
};
const CrowdfundingScreen = () => {
  return (
    <CrowdfundingShardedStack.Navigator>
      <CrowdfundingShardedStack.Screen
        name="index"
        component={Crowdfunding}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
          },
        })}
      />
      <CrowdfundingShardedStack.Screen
        name="CrowdfundingDetails"
        component={CrowdfundingDetails}
        options={() => ({
          headerShown: false,
          gestureEnabled: false,
          transitionSpec: {
            open: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
            close: {
              animation: "timing",
              config: { duration: 500, easing: Easing.inOut(Easing.ease) },
            },
          },
        })}
      />
    </CrowdfundingShardedStack.Navigator>
  );
};

const UvmBottomStack = () => {
  return (
    <BottomStack.Navigator
      tabBarOptions={{ activeTintColor: "tomato" }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "AcceuilUvm") {
            iconName = focused ? "Home" : "Home";
          }

          if (route.name === "Cours") {
            iconName = focused ? "heart" : "heart";
          }

          if (route.name === "Bibliothéque") {
            iconName = focused ? "library" : "library";
          }
          if (route.name === "Profile") {
            iconName = focused ? "home-plus" : "home-plus";
          }

          // You can return any component that you like here!
          return <AntDesign name={iconName} size={30} color={color} />;
        },
      })}
    >
      <BottomStack.Screen
        name="AccueilUvm"
        component={AccueilUvm}
        options={{ headerShown: false }}
      />
      <BottomStack.Screen
        name="Cours"
        component={Cours}
        options={{ headerShown: false }}
      />
      <BottomStack.Screen
        name="Bibliothèque"
        component={Library}
        options={{ headerShown: false }}
      />
      <BottomStack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </BottomStack.Navigator>
  );
};
const UvmStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Onboarding" component={Onboarding} />
      <Stack.Screen name="Uvm" component={UvmBottomStack} />
    </Stack.Navigator>
  );
};

const Index = (props) => {
  return (
    <Drawer.Navigator drawerContent={(props) => <CustonDrawer {...props} />}>
      <Drawer.Screen
        name="Accueil"
        component={SharedScreens}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Speaker"
        component={SpeakerScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Biographie"
        component={BiographieScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Crowdfunding"
        component={CrowdfundingScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Presentation"
        component={Presentation}
        options={{ headerShown: false }}
      />

      <Drawer.Screen
        name="Start-Up"
        component={StartUp}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Partenaire"
        component={Partenaire}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Uvm"
        component={UvmStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen name="Pepinier" component={Pepinier} />
      <Drawer.Screen name="Contact" component={Contact} />
      <Drawer.Screen
        name="Webinaire"
        component={WebinaireScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Event"
        component={EventScreen}
        options={{ headerShown: false }}
      />
      <Drawer.Group screenOptions={{ presentation: "modal" }}>
        <Drawer.Screen
          name="MembreDetails"
          component={MembreDetails}
          options={{ headerShown: false }}
        />
      </Drawer.Group>
      <Drawer.Group screenOptions={{ presentation: "modal" }}>
        <Drawer.Screen
          name="DetailsPresentation"
          component={DetailsPresentation}
          options={{ headerShown: false }}
        />
      </Drawer.Group>
      <Drawer.Group screenOptions={{ presentation: "modal" }}>
        <Drawer.Screen
          name="Inscription"
          component={Inscriptions}
          options={{ headerShown: false }}
        />
      </Drawer.Group>
      <Drawer.Group screenOptions={{ presentation: "modal" }}>
        <Drawer.Screen
          name="DetailStartUp"
          component={DetailStartUp}
          options={{ headerShown: false }}
        />
      </Drawer.Group>
      <Drawer.Group screenOptions={{ presentation: "modal" }}>
        <Drawer.Screen
          name="DetailPartenaire"
          component={DetailPartenaire}
          options={{ headerShown: false }}
        />
      </Drawer.Group>
    </Drawer.Navigator>
  );
};

export default Index;
