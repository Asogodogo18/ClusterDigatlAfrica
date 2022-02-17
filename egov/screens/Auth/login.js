import React, { useState, useContext, createRef } from "react";
import { ScaledSheet } from "react-native-size-matters";
import axios from "axios";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Keyboard,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { Snackbar } from "react-native-paper";

import { UserContext } from "../../hooks/userContext";

const baseUrl = "http://197.155.143.74:1214";

const login = (props) => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const [visible, setVisible] = useState(false);
  const onToggleSnackBar = () => setVisible(!visible);
  const onDismissSnackBar = () => setVisible(false);

  const passwordInputRef = createRef();

  const onPressLogin = async (event) => {
    console.log("requete");
    if (!username) {
      setMessage("Veuillez entrer un nom d'utilisateur");
      setVisible(true);
      return;
    }
    if (!password) {
      setMessage("Veuillez entrer un mot de passe");
      setVisible(true);
      return;
    }
    setLoading(true);
    try {
      const response = await axios.get(`${baseUrl}/api/read`, {
        params: { login: username, password: password },
      });
      console.log("-------------------------");
      
      if (response.status === 200) {
        console.log(response.data)
        setLoading(false);
        if (response.data.role_user_verificateur) {
          setUser(response.data);
          props.navigation.replace("App");
        } else {
          setMessage(response.data.Message)
          setVisible(true);
        }
      } else {
        throw new Error("An error has occurred");
      }
    } catch (error) {
      console.log("on failure", error && error);
      setMessage("An error has occurred");
      setLoading(false);
      setVisible(true);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/images/bg-log.png")}
        resizeMode="cover"
        style={styles.image}
      >
        <Text style={styles.logo}>NINA SCANNER</Text>
        <View style={styles.loginBox}>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              editable={!loading}
              placeholder="Identifiant"
              placeholderTextColor="#fff"
              returnKeyType="next"
              onSubmitEditing={() =>
                passwordInputRef.current && passwordInputRef.current.focus()
              }
              onChangeText={(username) => setUsername(username)}
            />
          </View>
          <View style={styles.inputView}>
            <TextInput
              style={styles.inputText}
              editable={!loading}
              placeholder="Mot de Passe"
              placeholderTextColor="#fff"
              ref={passwordInputRef}
              onSubmitEditing={Keyboard.dismiss}
              secureTextEntry={true}
              onChangeText={(password) => setPassword(password)}
            />
          </View>
          
          <TouchableOpacity>
            <Text style={styles.forgot}>Mot de Passe oublié?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.loginBtn} onPress={onPressLogin}>
            <Text style={{fontSize: 14}}>Se Connecter</Text>
          </TouchableOpacity>
        </View>
        {message != "" ? (
            <Snackbar
              visible={visible}
              onDismiss={onDismissSnackBar}
              style={styles.errorTextStyle}
              duration={5000}
            >
              {message}
            </Snackbar>
          ) : null}
      </ImageBackground>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontWeight: "bold",
    fontSize: "20@ms0.5",
    color: "black",
    margin:"10@ms"
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loginBox: {
    justifyContent: "center",
    alignItems: "center",
    width: "250@ms",
    height: "150@vs",
    paddingVertical: "20@vs",
    opacity: 0.75,
  },
  inputView: {
    width: "60%",
    backgroundColor: "#465881",
    borderRadius: 5,
    height: "20@vs",
    marginBottom: "10@vs",
    justifyContent: "center",
    padding: 20,
    
  },
  inputText: {
    height: "20@vs",
    color: "white",
    fontSize: "14@ms",
  },
  credentials: {
    color: "#fff",
    marginBottom: 5,
  },
  forgot: {
    color: "white",
    fontSize: "12@ms0.3",
  },
  loginBtn: {
    width: "100@ms",
    backgroundColor: "#fb5b5a",
    borderRadius: 7,
    height: "35@vs",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10@vs",
    // marginBottom: 10,
  },
  errorTextStyle: {
    color: "red",
    alignContent: "center",
    fontSize: 14,
  },
});

export default login;
