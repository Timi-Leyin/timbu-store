import { StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { Slot } from "expo-router";
import { ProductsProvider } from "@/context/products-context";

const AppLayout = () => {
  return (
    <ProductsProvider>
      <Slot />
    </ProductsProvider>
  );
};

export default AppLayout;

const styles = StyleSheet.create({});
