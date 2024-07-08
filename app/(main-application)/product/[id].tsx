import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import { useGlobalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import InDeptTopBar from "@/components/navigation/in-dept-top-bar";
import { ThemedText } from "@/components/themed/themed-text";
import { FONTS } from "@/constants/fonts";
import { ThemedButton } from "@/components/themed/themed-button";
import { ShoppingCart } from "iconsax-react-native";
import ProductImageGallery from "@/components/product/product-image-gallery";
import { useFetch } from "@/hooks/use-fetch";
import { GET_PRODUCT } from "@/api/products";
import formatMoney from "@/utils/format-money";
import ProductCartQ from "@/components/product/product-cart-q";
import { useCart } from "@/context/cart-context";
import { ProductPlaceholder } from "@/components/loading-placeholders/product-placeholder";

const ProductDetailScreen = () => {
  const { id: productId } = useGlobalSearchParams();
  const { cart, addToCart, removeFromCart, getProductFromCart } = useCart();
  const { data, error, fetchData, loading } = useFetch(GET_PRODUCT);

  useEffect(() => {
    fetchData({ productId });
  }, []);

  const productInCart = data && getProductFromCart(data.id);
  const addToCartHandler = () => {
    addToCart(data);
  };

  const removeFromCartHandler = () => {
    removeFromCart(data.id);
  };

  return (
    <View>
      {loading && <ProductPlaceholder />}

      {!loading && data && (
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
            <ProductImageGallery product={data} />
            <View style={{ marginVertical: 20 }}>
              <ThemedText type="title" style={styles.productName}>
                {data.name}
              </ThemedText>
              {data.available_quantity && (
                <ThemedText
                  type="title"
                  style={[styles.styledText, styles.price]}
                >
                  NGN {formatMoney(data.available_quantity)}
                </ThemedText>
              )}
              <ThemedText type="default" style={styles.desc}>
                {data.description}
              </ThemedText>

              <View
                style={{
                  marginVertical: 10,
                }}
              >
                {productInCart ? (
                  <ProductCartQ
                    increase={addToCartHandler}
                    decrease={removeFromCartHandler}
                    quantity={productInCart.quantity}
                  />
                ) : (
                  <ThemedButton onPress={addToCartHandler}>
                    <ShoppingCart color="#fff" />
                  </ThemedButton>
                )}
              </View>
            </View>
            <View
              style={{
                height: 100,
                marginTop: "auto",
              }}
            />
          </ScrollView>
        </SafeAreaView>
      )}
    </View>
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
