import { useState } from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import OutlineButton from "../components/ui/OutlineButton";
import Colors from "../constants/colors";
import { useEffect } from "react";
import { fetchPlaceDetails } from "../util/database";

const PlaceDetails = ({ navigation, route }) => {
  const [place, setPlace] = useState(null);

  const showOnMap = () => {
    navigation.navigate("Map", {
      lat: place.lat,
      lng: place.lng,
    });
  };

  const placeId = route?.params?.placeId;

  useEffect(() => {
    if (placeId) {
      const loadPlaceData = async () => {
        const placeDetails = await fetchPlaceDetails(placeId);
        setPlace(placeDetails);
      };
      loadPlaceData();
    }
  }, [placeId, route]);

  if (!place) {
    return (
      <View style={styles.fallbackContainer}>
        <Text style={styles.text}>Loading place data</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: place.imageUri }} />
      <View>
        <Text style={styles.text}>{place.title}</Text>
      </View>
      <View style={styles.locationContainer}>
        <View style={styles.addressContainer}>
          <Text style={styles.address}>{place.address}</Text>
        </View>
        <OutlineButton icon={"map"} onPress={showOnMap}>
          View on Map
        </OutlineButton>
      </View>
    </ScrollView>
  );
};

export default PlaceDetails;

const styles = StyleSheet.create({
  address: {
    color: Colors.primary500,
    fontWeight: "bold",
    textAlign: "center",
  },
  addressContainer: {
    padding: 20,
  },
  fallbackContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  image: {
    height: 150,
    width: "100%",
  },
  locationContainer: {
    alignContent: "center",
    justifyContent: "center",
  },
  mapPreview: {
    marginBottom: 10,
    width: "100%",
    height: 200,
    borderColor: "#ccc",
    borderWidth: 1,
  },
  text: {
    fontSize: 20,
    textAlign: "center",
  },
});
