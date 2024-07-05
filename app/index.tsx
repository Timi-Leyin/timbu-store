import {
  ImageBackground,
  StyleSheet,
  Text,
  Vibration,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed/themed-text";
import { ThemedButton } from "@/components/themed/themed-button";
import { useRouter } from "expo-router";
import { FONTS } from "@/constants/fonts";

const Home = () => {
  const router = useRouter();
  return (
    <SafeAreaView style={styles.wrapper}>
      <ImageBackground
        source={require("../assets/images/onboarding-stripes.png")}
        style={styles.container}
      >
        <View style={styles.infoBox}>
          <ThemedText style={styles.infoBoxHeading} type="title">
            Your Fashion Companion for All Things Trendy
          </ThemedText>
          <ThemedButton
            onPress={() => {
              Vibration.vibrate(70);
              router.push("/home");
            }}
          >
            Continue
          </ThemedButton>
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
    paddingHorizontal: 30,
    paddingTop:40,
    paddingBottom:10,
  },
  infoBoxHeading: {
    padding: 10,
    textAlign: "center",
    fontSize:30,
    fontFamily: FONTS.Arvo.Regular,
  },
  infoBox: {
    marginTop: "auto",
  },
});
