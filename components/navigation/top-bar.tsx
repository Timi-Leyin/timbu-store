import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Heart, Notification, ShoppingCart, User } from "iconsax-react-native";
import { Colors } from "@/constants/colors";
import { useRouter } from "expo-router";

const TopBar = () => {
  const router = useRouter();
  const theme = useColorScheme() ?? "light";
  const shadeColor = Colors[theme].tint;
  return (
    <View style={styles.wrapper}>
      <Image
        style={styles.logo}
        source={require("../../assets/images/logo.png")}
      />

      <View style={styles.action}>
        <TouchableOpacity
          onPress={() => {
            // router.navigate("/favourites");
          }}
        >
          <Heart color={shadeColor} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            // router.navigate("/notifications");
          }}
        >
          <Notification color={shadeColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TopBar;

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
    flexDirection: "row",
  },
  logo: {
    height: 50,
    width: 150,
    objectFit: "contain",
  },
  action: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    flexDirection: "row",
  },
});
