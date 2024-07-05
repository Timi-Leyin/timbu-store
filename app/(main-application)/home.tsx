import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ProductPlaceholder from "@/components/loading-placeholders/product-placeholder";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <SafeAreaView
      style={{
        // flex: 1,
      }}
    >
     
   <ScrollView>
   {/* {
      Array(4).fill(4).map((_,index)=>  <ProductPlaceholder key={index} />)
     } */}
     
     <ProductPlaceholder />
     <ProductPlaceholder />
     <ProductPlaceholder />
     <ProductPlaceholder />
   </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
