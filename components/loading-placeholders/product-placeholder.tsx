import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  Fade,
  ShineOverlay,
  Shine,
  Placeholder,
  PlaceholderLine,
  PlaceholderMedia,
} from "rn-placeholder";

const ProductPlaceholder = () => {
  return (
    <View
      style={{
        marginHorizontal: 20,
      }}
    >
      <Placeholder
        style={{
        //   height: "100%",

          width: "100%",
        }}
        Animation={ShineOverlay}
      >
        <PlaceholderMedia
          style={{
            height: 200,
            width: "100%",
          }}
        />

        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <PlaceholderLine
              style={{
                marginVertical: 10,
                height: 40,
                width: 200,
              }}
            />
            <PlaceholderLine
              style={{
                height: 40,
                width: 150,
              }}
            />
          </View>

          <View>
            <PlaceholderMedia />
          </View>
        </View>
      </Placeholder>
    </View>
  );
};

export default ProductPlaceholder;

const styles = StyleSheet.create({});
