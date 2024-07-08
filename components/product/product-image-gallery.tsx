import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import getProductImage from "@/utils/get-product-image";
import { Products } from "@/interfaces/products";

const ProductImageGallery = ({ product }: { product: Products }) => {
  const fallbackThumbnail = require("../../assets/images/placeholder.png");

  const thumbnail = product.photos[0];
  const imgSrc = thumbnail
    ? { uri: getProductImage(thumbnail.url) }
    : fallbackThumbnail;
  return (
    <View>
      <Image source={imgSrc} style={styles.imagePreview} />
      {/* <View style={styles.thumbnailRow}>
        <Image source={placeholderImg} style={styles.thumbnailImageSm} />
        <Image source={placeholderImg} style={styles.thumbnailImageSm} />
        <Image source={placeholderImg} style={styles.thumbnailImageSm} />
      </View> */}
    </View>
  );
};

export default ProductImageGallery;

const styles = StyleSheet.create({
  thumbnailImageSm: {
    height: 80,
    width: 80,
    borderRadius: 20,
  },
  thumbnailRow: {
    flexDirection: "row",
    gap: 10,
    marginTop: -30,
    justifyContent: "center",
  },
  imagePreview: {
    height: 280,
    // opacity: 0.6,
    width: "100%",
  },
});
