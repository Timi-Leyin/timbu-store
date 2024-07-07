import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const ProductImageGallery = () => {
  const placeholderImg = require("../../assets/images/placeholder.png");
  return (
    <View>
      <Image source={placeholderImg} style={styles.imagePreview} />
      <View style={styles.thumbnailRow}>
        <Image source={placeholderImg} style={styles.thumbnailImageSm} />
        <Image source={placeholderImg} style={styles.thumbnailImageSm} />
        <Image source={placeholderImg} style={styles.thumbnailImageSm} />
      </View>
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
    opacity: 0.6,
    width: "100%",
  },
});
