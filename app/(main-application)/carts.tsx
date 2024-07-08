import { View, StyleSheet, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ThemedText } from "@/components/themed/themed-text";
import { ThemedButton } from "@/components/themed/themed-button";
import { useCart } from "@/context/cart-context";
import formatMoney from "@/utils/format-money";
import ProductCartQ from "@/components/product/product-cart-q";
import InDeptTopBar from "@/components/navigation/in-dept-top-bar";
import IsEmpty from "@/components/common/is-empty";
import { useRouter } from "expo-router";

const CartPage = () => {
  const { cart, addToCart, removeFromCart, clearProductQuantity } = useCart();

  const totalAmount = cart.reduce(
    (sum, cartItem) =>
      sum + cartItem.product.available_quantity * cartItem.quantity,
    0
  );

  const fallback = require("../../assets/images/placeholder.png");

  const router = useRouter();
  return (
    <SafeAreaView style={styles.container}>
      <InDeptTopBar />
      <ScrollView
        style={{
          marginTop: 10,
        }}
      >
        {cart.length === 0 ? (
          <IsEmpty> Your cart is empty</IsEmpty>
        ) : (
          cart.map((cartItem) => (
            <View key={cartItem.product.id} style={styles.cartItemContainer}>
              <View
                style={{
                  flexDirection: "row",
                  gap:2,
                  justifyContent:"space-between"
                }}
              >
                <View>
                  <ThemedText type="title" style={styles.productName}>
                    {cartItem.product.name}
                  </ThemedText>
                  <ThemedText style={styles.productPrice}>
                    NGN {formatMoney(cartItem.product.available_quantity)}
                  </ThemedText>
                </View>
                {/* <Image
                  source={fallback}
                  style={{
                    width: 60,
                    height: 60,
                  }}
                /> */}
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <ProductCartQ
                  increase={() => addToCart(cartItem.product)}
                  decrease={() => removeFromCart(cartItem.product.id)}
                  quantity={cartItem.quantity}
                />
                <ThemedButton
                  onPress={() => clearProductQuantity(cartItem.product.id)}
                >
                  Remove
                </ThemedButton>
              </View>
            </View>
          ))
        )}
        {cart.length > 0 && (
          <View style={styles.totalContainer}>
            <ThemedText type="title" style={styles.totalText}>
              Total: NGN {formatMoney(totalAmount)}
            </ThemedText>
            <ThemedText type="title" style={styles.totalText}>
              Total Carts: {cart.length} Items
            </ThemedText>
            <ThemedButton onPress={()=>{
                router.navigate("/checkout")
            }} style={{ width: "100%" }}>Checkout</ThemedButton>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default CartPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyCartText: {
    fontSize: 18,
  },
  cartItemContainer: {
    marginBottom: 20,
  },
  productName: {
    fontSize: 18,
  },
  productPrice: {
    fontSize: 16,
    color: "gray",
  },
  totalContainer: {
    marginTop: "auto",
    // alignItems: "center",
  },
  totalText: {
    fontSize: 17,
    lineHeight: 20,
    // fontWeight: "bold",
  },
  checkoutButton: {
    marginTop: 10,
    padding: 15,
    backgroundColor: "#000",
    borderRadius: 5,
  },
});
