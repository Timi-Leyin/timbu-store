import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { Fragment } from "react";
import { ProductsPlaceholder } from "@/components/loading-placeholders/product-placeholder";
import { SafeAreaView } from "react-native-safe-area-context";
import { useProducts } from "@/context/products-context";
import { ENV } from "@/constants/env";
import { ThemedText } from "@/components/themed/themed-text";
import ProductCard from "@/components/product/product-card";

const Home = () => {
  const { data: productsData, loading } = useProducts();
  return (
    <SafeAreaView style={styles.wrapper}>
      <ScrollView>
        {loading && !productsData && <ProductsPlaceholder length={3} />}
        {!loading && productsData && (
          <Fragment>
            <ThemedText type="title">
              {productsData.items.length} Products
            </ThemedText>
            {productsData.items.map((product, index) => {
              return (
                <ProductCard product={product} key={product.id || index} />
              );
            })}
          </Fragment>
        )}
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

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 15,
  },
});
