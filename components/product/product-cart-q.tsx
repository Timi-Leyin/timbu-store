import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { ThemedButton } from "../themed/themed-button";
import { ThemedText } from "../themed/themed-text";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Add, Minus } from "iconsax-react-native";
import { FONTS } from "@/constants/fonts";
import { Colors, primaryColor } from "@/constants/colors";

const ProductCartQ = () => {
  const COLOR = "#FFF";
  let [counter, setCounter] = useState(0)
  return (
    <View style={styles.wrapper}>
      <Minus onPress={()=> setCounter(counter<=0?0:counter-=1)} style={styles.icon} color={COLOR} />
      <Text style={styles.counter}>{counter}</Text>
      <Add onPress={()=> setCounter(counter++)} style={styles.icon} color={COLOR} />
    </View>
  );
};

export default ProductCartQ;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    display: "flex",
    backgroundColor: primaryColor,
    justifyContent: "space-around",
    alignItems: "center",
    height: 60,
    paddingHorizontal: 20,
    gap: 20,
    width: 120,
    borderRadius: 30,
  },
  icon: {
    padding: 10,
    backgroundColor: "rgba(0,0,0,0.2)",
    borderRadius: 100,
  },
  counter: {
    fontSize: 20,
    color:"#FFF",
    // flex: 1,
    fontFamily: FONTS.Arvo.Bold,
  },
});
