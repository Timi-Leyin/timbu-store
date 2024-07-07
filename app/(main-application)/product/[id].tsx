import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useGlobalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import InDeptTopBar from "@/components/navigation/in-dept-top-bar";
import { ThemedText } from "@/components/themed/themed-text";
import { FONTS } from "@/constants/fonts";
import { ThemedButton } from "@/components/themed/themed-button";
import { ShoppingCart } from "iconsax-react-native";
import ProductImageGallery from "@/components/product/product-image-gallery";

const ProductDetailScreen = () => {
  const { id: productId } = useGlobalSearchParams();
  console.log(productId);
  return (
    <SafeAreaView
      style={{
        padding: 20,
      }}
    >
      <InDeptTopBar />
      <ScrollView
        style={{
          marginTop: 15,
        }}
      >
        <ProductImageGallery />
        <View style={{ marginVertical: 20 }}>
          <ThemedText type="title" style={styles.productName}>
            Bluettoth Headst Toolkit
          </ThemedText>
          <ThemedText type="title" style={[styles.styledText, styles.price]}>
            NGN 50,000
          </ThemedText>
          <ThemedText type="default" style={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            expedita dignissimos quisquam quam illo, fuga ipsum assumenda
            aliquid reprehenderit recusandae! Quibusdam culpa autem illum
            facilis?
          </ThemedText>
          <ThemedButton>
            <ShoppingCart color="#fff" />
          </ThemedButton>
        </View>
        <View
          style={{
            height: 90,
            marginTop: "auto",
          }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  styledText: {
    fontFamily: FONTS.Arvo.Regular,
    fontSize: 23,
  },
  productName: {
    fontFamily: FONTS.Arvo.Regular,
  },
  price: {
    fontSize: 20,
    lineHeight: 20,
  },
  desc: {
    fontSize: 12,
    lineHeight: 20,
  },
});
