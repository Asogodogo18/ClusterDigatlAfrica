import React, {useContext} from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import {
  useTheme,
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  Text,
  TouchableRipple,
  Switch, 
} from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { UserContext } from "../hooks/userContext";

export function DrawerContent(props) {
  const {user, setUser} = useContext(UserContext);
  const paperTheme = useTheme();
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.drawerContent}>
        <View style={styles.userInfoSection}>
          <Avatar.Image
            source={{
              uri: user? user.profil_image:"https://pbs.twimg.com/profile_images/952545910990495744/b59hSXUd_400x400.jpg",
            }}
            size={50}
          />
          <Title style={styles.title}>{user.firstname} {user.lastname} </Title>
          <Caption style={styles.caption}>@: {user.email} </Caption>
          <View style={styles.row}>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                tel: 
              </Paragraph>
              <Caption style={styles.caption}>{user.tel}</Caption>
            </View>
            <View style={styles.section}>
              <Paragraph style={[styles.paragraph, styles.caption]}>
                Profession: 
              </Paragraph>
              <Caption style={styles.caption}>{user.profession}</Caption>
            </View>
          </View>
        </View>
        <Drawer.Section style={styles.drawerSection}>
        <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={size}
              />
            )}
            label="DashBoard"
            onPress={() => props.navigation.navigate('Dashboard')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons
                name="account-outline"
                color={color}
                size={size}
              />
            )}
            label="Gestion des Utilisateurs"
            onPress={() => props.navigation.navigate('Manage')}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="tune" color={color} size={size} />
            )}
            label="Paramètres"
            onPress={() => props.navigation.navigate('Profile')}
          />
        </Drawer.Section>
        <Drawer.Section title="Connexion">
          <TouchableRipple onPress={() => {}}>
            <View style={styles.preference}>
  
            </View>
          </TouchableRipple>
          <TouchableRipple onPress={() => {props.navigation.replace('Auth')}}>
            <View style={styles.preference}>
              <Text>Se Déconnecter</Text>
            </View>
          </TouchableRipple>
        </Drawer.Section>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
  },
  userInfoSection: {
    paddingLeft: 20,
  },
  title: {
    marginTop: 20,
    fontWeight: "bold",
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
  },
  row: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});
