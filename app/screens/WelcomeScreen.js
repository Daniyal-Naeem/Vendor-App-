import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/shop.jpg")}
    >
      <View style={styles.logoContainer}>
        <Text style={styles.tagline}>Vendor App</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate(routes.LOGIN)}
          />
        <Button
          title="Register"
          onPress={() => navigation.navigate(routes.REGISTER)}
          />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 40,
    width: "100%",
  },

  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 35,
    fontWeight: "800",
    paddingVertical: 20,
  },
});

export default WelcomeScreen;
