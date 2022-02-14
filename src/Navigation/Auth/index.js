import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

//Importation des Screens
import Connexion from "../../Screen/Login/connexion/SignInScreen";
import Inscription from "../../Screen/Login/Inscription/SignUpScreen";
import PassOublier from "../../Screen/Login/PassOublier";
import Ecran from "../../Screen/Login/EcranLogin/OnboardingScreen";

const index = () => {
  const Stack = createNativeStackNavigator();
  const [isAppFirstLaunched, setIsAppFirstLaunched] = React.useState(null);

  React.useEffect(async () => {
    const appData = await AsyncStorage.getItem("isAppFirstLaunched");
    if (appData == null) {
      setIsAppFirstLaunched(false);
      AsyncStorage.setItem("isAppFirstLaunched", "false");
    } else {
      setIsAppFirstLaunched(true);
    }

    // AsyncStorage.removeItem('isAppFirstLaunched');
  }, []);

  return (
    isAppFirstLaunched != null && (
      <Stack.Navigator
        screenOptions={{ headerShown: false, headerTitleAlign: "center" }}
      >
        {isAppFirstLaunched && <Stack.Screen name="Ecran" component={Ecran} />}
        <Stack.Screen name="Connexion" component={Connexion} />
        <Stack.Screen name="Inscription" component={Inscription} />
        <Stack.Screen name="PassOublier" component={PassOublier} />
      </Stack.Navigator>
    )
  );
};

export default index;
