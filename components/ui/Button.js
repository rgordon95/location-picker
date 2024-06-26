import { Pressable, StyleSheet, Text } from "react-native";
import Colors from "../../constants/colors";

const Button = ({ children, onPress }) => {
  return (
    <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed && styles.pressed]}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backGroundColor: Colors.primary800,
    margin: 4,
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  text: {
    borderRadius: 4,
    color: Colors.primary50,
    elevation: 2,
    fontSize: 16,
    fontWeight: "bold",
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  pressed: {
    opacity: 0.7,
  },
});
