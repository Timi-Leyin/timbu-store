import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  StyleSheet,
  type ViewProps,
} from "react-native";

import { useThemeColor } from "@/hooks/use-theme-color";
import { ThemedText } from "./themed-text";
import { primaryColor } from "@/constants/colors";

export type ThemedButtonProps = TouchableOpacityProps & {
  lightColor?: string;
  darkColor?: string;
};

export function ThemedButton({
  style,
  lightColor,
  darkColor,
  children,
  ...otherProps
}: ThemedButtonProps) {
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background"
  );

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      {...otherProps}
      style={[{ backgroundColor }, styles.button, style]}
    >
      <ThemedText type="defaultSemiBold" style={styles.btnText}>
        {children}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    borderRadius: 30,
    marginVertical: 20,
    backgroundColor: primaryColor,
  },
  btnText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 12,
    //   fontFamily: FONTS.bold,
    //   fontWeight: "normal",
  },
});
