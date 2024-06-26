const { useState, useCallback } = require("react");
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import Colors from "../constants/colors";
import Button from "./ui/Button";
import ImagePicker from "./ImagePicker";
import LocationPicker from "./LocationPicker";
import { Place } from "../models/place";

const PlaceForm = ({ onCreatePlace }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [pickedImage, setPickedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();

  const changeTitleHandler = (text) => {
    setEnteredTitle(text);
  };

  const takeImageHandler = (imageUri) => {
    setPickedImage(imageUri);
  };

  const pickLocationHandler = useCallback((location) => {
    setSelectedLocation(location);
  }, []);

  const savePlaceHandler = () => {
    const placeData = new Place(pickedImage, selectedLocation, enteredTitle);
    onCreatePlace(placeData);
  };

  return (
    <ScrollView style={styles.form}>
      <View>
        <Text style={styles.label}>Place</Text>
        <TextInput
          onChangeText={changeTitleHandler}
          style={styles.input}
          value={enteredTitle}
        />
      </View>
      <ImagePicker onTakeImage={takeImageHandler} />
      <LocationPicker onPickLocation={pickLocationHandler} />
      <Button onPress={savePlaceHandler}>Add place</Button>
    </ScrollView>
  );
};

export default PlaceForm;

const styles = StyleSheet.create({
  form: {
    flex: 1,
    padding: 24,
  },
  input: {
    backgroundColor: Colors.primary100,
    borderBottomWidth: 2,
    borderBottomColor: Colors.primary700,
    fontSize: 16,
    marginBottom: 16,
    marginVertical: 8,
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  label: {
    color: Colors.primary500,
    fontWeight: "bold",
    marginBottom: 4,
  },
});
