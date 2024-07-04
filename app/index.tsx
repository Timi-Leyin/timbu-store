import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed/themed-text";
import { ThemedButton } from "@/components/themed/themed-button";

const Home = () => {
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground source={require("../assets/images/onboarding-stripes.png")} style={styles.container}>
        <View style={styles.infoBox}>
          <ThemedText style={styles.infoBoxHeading} type="title">
            Your Fashion Companion for All Things Trendy
          </ThemedText>
          <ThemedButton>Continue</ThemedButton>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    height: "100%",
    flex: 1,
  },
  container: {
    height: "100%",
    padding: 30,
  },
  infoBoxHeading: {
    textAlign: "center",
  },
  infoBox: {
    marginTop: "auto",
  },
});
