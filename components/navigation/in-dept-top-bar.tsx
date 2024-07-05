import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";
import React from "react";
import { ThemedText } from "../themed/themed-text";
import { ArrowLeft } from "iconsax-react-native";
import { Colors } from "@/constants/colors";
import { useRouter } from "expo-router";

const InDeptTopBar = () => {
  const theme = useColorScheme() ?? "light";
  const tint = Colors[theme].tint;
  const router = useRouter();
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 10,
        }}
      >
        <ArrowLeft color={tint} />
        <ThemedText type="default">Back</ThemedText>
      </TouchableOpacity>
    </View>
  );
};

export default InDeptTopBar;

const styles = StyleSheet.create({});
