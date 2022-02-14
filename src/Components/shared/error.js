import { View, Text, Button, Dimensions } from "react-native";
import React from "react";

const { width, height } = Dimensions.get("screen");

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Vous pouvez aussi enregistrer l'erreur au sein d'un service de rapport.
    logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return (
        <View
          style={{
            position: "absolute",
            top: height / 3,
            minHeight: 150,
            maxHeight: height / 1.6,
            elevation: 5,
            borderRadius: 18,
            width: "100%",
            padding: 20,
            justifyContent: "center",
          }}
        >
          <Text>error</Text>
          <Text>Il y a eu une erreur</Text>
          <Button title={"Re-éssayer"}>error</Button>
        </View>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
