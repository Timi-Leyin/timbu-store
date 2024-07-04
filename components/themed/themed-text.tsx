import { Text, type TextProps, StyleSheet } from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { FONTS } from "@/constants/fonts";

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: "default" | "title" | "defaultSemiBold" | "subtitle" | "link";
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = "default",
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return (
    <Text
      style={[
        { color },
        type === "default" ? styles.default : undefined,
        type === "title" ? styles.title : undefined,
        type === "defaultSemiBold" ? styles.defaultSemiBold : undefined,
        type === "subtitle" ? styles.subtitle : undefined,
        type === "link" ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FONTS.Regular,
    fontWeight: "normal",
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FONTS.Regular,
    fontWeight: "normal",
  },
  title: {
    fontSize: 32,
    fontFamily: FONTS.Bold,
    fontWeight: "normal",
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: FONTS.Regular,
    fontWeight: "normal",
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    color: "#0a7ea4",
    fontFamily: FONTS.Regular,
    fontWeight: "normal",
  },
});
