import { StyleSheet } from "react-native";
import PlaceForm from "../components/PlaceForm";
import { insertPlace } from "../util/database";

const AddPlaces = ({ navigation }) => {
  const createPlaceHandler = (place) => {
    navigation.navigate("AllPlaces");
    insertPlace(place);
  };

  return <PlaceForm onCreatePlace={createPlaceHandler} />;
};

export default AddPlaces;

const styles = StyleSheet.create({});
