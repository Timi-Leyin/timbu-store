import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import InDeptTopBar from "@/components/navigation/in-dept-top-bar";

const ProductDetailScreen = () => {
  const { id: productId } = useGlobalSearchParams();
  console.log(productId);
  return (
    <SafeAreaView style={{
        padding:20
    }}>
      <InDeptTopBar />
      <ScrollView>
        
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({});
