import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import SignUpForm from "../components/signupScreen/SignUpForm";

const INSTAGRAM_LOGO = "https://img.icons8.com/fluency/452/instagram-new.png";

const SignUpScreen = ({ navigation }) => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={{ uri: INSTAGRAM_LOGO, height: 100, width: 100 }} />
    </View>
    <SignUpForm navigation={navigation} />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 50,
    paddingHorizontal: 12,
  },

  logoContainer: {
    alignItems: "center",
    marginTop: 40,
  },
});

export default SignUpScreen;
