import { StyleSheet, Text, View } from "react-native";
import React from "react";
import bottomBarItems from "@/constants/bottom-bar-items";
import BottomBarItem from "./bottom-bar-item";
import { usePathname } from "expo-router";

const BottomBar = () => {
  const pathname = usePathname();
  return (
    <View style={styles.wrapper}>
      {bottomBarItems.map((item, index) => {
        return (
          <BottomBarItem middle={item.middle} href={item.href} key={index} active={pathname==item.href} Icon={item.icon} name={!item.middle ? item.name : ""} />
        );
      })}
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  wrapper: {
    // flex: 1,
    marginTop:"auto",
    flexDirection: "row",
    backgroundColor:"white",
    gap: 20,
    borderTopColor:"rgba(0,0,0,0.05)",
    borderTopWidth:1,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-around",
  },
});
