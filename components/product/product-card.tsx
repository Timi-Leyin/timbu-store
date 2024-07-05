import { Image, StyleSheet, Text, View, useColorScheme } from "react-native";
import React, { Fragment } from "react";
import { Products } from "@/interfaces/products";
import { ThemedText } from "../themed/themed-text";
import getProductImage from "@/utils/get-product-image";
import { FONTS } from "@/constants/fonts";
import { ThemedButton } from "../themed/themed-button";
import { ShoppingCart } from "iconsax-react-native";
import { useThemeColor } from "@/hooks/use-theme-color";
import { Colors } from "@/constants/colors";
import ProductCartQ from "./product-cart-q";
import truncateText from "@/utils/truncate-text";
import formatMoney from "@/utils/format-money";
import { useCart } from "@/context/cart-context";

const ProductCard = ({ product }: { product: Products }) => {
  const { cart, addToCart, removeFromCart, getProductFromCart } = useCart();

  const productInCart = getProductFromCart(product.id);
  const addToCartHandler = () => {
    addToCart(product);
  };

  const removeFromCartHandler = () => {
    removeFromCart(product.id);
  };

  const thumbnail = product.photos[0];
  const theme = useColorScheme() ?? "light";
  const secondaryBtnBg = Colors[theme].tint;
  const fallbackThumbnail = require("../../assets/images/placeholder.png");
  // const imgSrc = fallbackThumbnail;
  const checkCurrentPriceContent =
    Object.keys(product.current_price[0]).length >= 1 &&
    Boolean(product.current_price[0][Object.keys(product.current_price[0])[0]]);
  const currentPrice = checkCurrentPriceContent && product.current_price[0];
  const currency = Object.keys(currentPrice)[0] || "NGN";
  const discountedPrice =
    currentPrice && currentPrice[Object.keys(currentPrice)[0]][0];
  const price = currentPrice && currentPrice[Object.keys(currentPrice)[0]][1];
  const imgSrc = thumbnail
    ? { uri: getProductImage(thumbnail.url) }
    : fallbackThumbnail;

    // console.log(productInCart)
  return (
    <View>
      <Image
        style={{
          width: "100%",
          height: 200,
          objectFit: "cover",
        }}
        source={imgSrc}
      />
      <View
        style={{
          marginVertical: 10,
        }}
      >
        <View>
          <ThemedText type="title" style={styles.styledText}>
            {product.name}
          </ThemedText>
          <ThemedText type="default">
            {truncateText(product.description || "") || "N/A"}
          </ThemedText>
          <ThemedText type="title" style={[styles.styledText, styles.discount]}>
            {discountedPrice && (
              <Fragment>
                {currency} {formatMoney(discountedPrice)}
              </Fragment>
            )}
            {/* <ThemedText
              style={[styles.styledText, styles.discount, styles.badge]}
            >
              -10%
            </ThemedText> */}
          </ThemedText>
          {price && (
            <ThemedText type="title" style={[styles.styledText, styles.price]}>
              {currency} {formatMoney(price)}
            </ThemedText>
          )}

          {!price && !discountedPrice && (
            <ThemedText
              type="title"
              style={[{ color: "red" }, styles.styledText, styles.price]}
            >
              OUT OF STOCK
            </ThemedText>
          )}
        </View>
      </View>

      <View style={styles.actions}>
        <ThemedButton style={{ flex: 1, backgroundColor: secondaryBtnBg }}>
          View Details
        </ThemedButton>
        {productInCart ? (
          <ProductCartQ increase={addToCartHandler} decrease={removeFromCartHandler} quantity={productInCart.quantity} />
        ) : (
          <ThemedButton onPress={addToCartHandler}>
            <ShoppingCart color="#fff" />
          </ThemedButton>
        )}
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  styledText: {
    fontFamily: FONTS.Arvo.Regular,
    fontSize: 30,
  },
  price: {
    fontSize: 20,
    lineHeight: 20,
  },
  badge: {
    backgroundColor: "red",
    color: "#fff",
    fontSize: 10,
    borderRadius: 10,
    textDecorationLine: "none",
  },
  discount: {
    textDecorationLine: "line-through",
    color: "red",
    lineHeight: 15,
    fontSize: 12,
  },
  actions: {
    display: "flex",
    padding: 0,
    gap: 10,
    alignItems: "center",
    marginTop: -10,
    flexDirection: "row",
  },
});
