import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/colors";

const PlaceItem = ({ place, onSelect }) => {
  return (
    <Pressable
      onPress={() => onSelect(place.id)}
      style={({ pressed }) => [styles.item, pressed && pressed]}
    >
      <Image source={{ uri: place.imageUri }} style={styles.image} />
      <View style={styles.placeItem}>
        <Text style={styles.title}>{place.title}</Text>
        <Text style={styles.address}>{place.address}</Text>
      </View>
    </Pressable>
  );
};

export default PlaceItem;

const styles = StyleSheet.create({
  address: {
    color: Colors.gray700,
    fontSize: 12,
  },
  image: {
    borderRadius: 4,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 3,
    flex: 1,
    height: 100,
  },
  item: {
    alignItems: "flex-start",
    backgroundColor: Colors.primary500,
    borderRadius: 6,
    elevation: 2,
    flex: 2,
    flexDirection: "row",
    marginVertical: 12,
    shadowColor: "black",
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.15,
    shadowRadius: 2,
  },
  placeItem: {
    padding: 12,
  },
  pressed: {
    opacity: 0.85,
  },
  title: {
    color: Colors.gray700,
    fontSize: 18,
    fontWeight: "bold",
  },
});
