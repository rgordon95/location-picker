import { Ionicons } from "@expo/vector-icons";
import { Pressable, StyleSheet } from "react-native";

const IconButton = ({ color, name, onPress, size }) => (
  <Pressable
    onPress={onPress}
    style={(pressed) => [styles.button, pressed && styles.pressed]}
  >
    <Ionicons name={name} size={size} color={color} />
  </Pressable>
);

export default IconButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  pressed: {
    opacity: 0.7,
  },
});
