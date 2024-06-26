import { Pressable, StyleSheet, Text } from "react-native";
import IonicIcons from "react-native-vector-icons/Ionicons";
import Colors from "../../constants/colors";

const OutlineButton = ({ children, onPress, icon }) => {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
    >
      <IonicIcons
        name={icon}
        size={18}
        color={Colors.primary500}
        style={styles.icon}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default OutlineButton;

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    borderColor: Colors.primary500,
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "center",
    margin: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  icon: {
    marginRight: 6,
  },
  pressed: {
    opacity: 0.7,
  },
  text: {
    color: Colors.primary500,
  },
});
