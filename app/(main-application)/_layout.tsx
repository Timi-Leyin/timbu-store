import { StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { Slot } from "expo-router";
import { ProductsProvider } from "@/context/products-context";
import BottomBar from "@/components/navigation/bottom-bar";

const AppLayout = () => {
  return (
    <ProductsProvider>
      <Slot />
      <BottomBar />
    </ProductsProvider>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
