import { useEffect, useState } from "react";
import { Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AllPlaces from "./screens/AllPlaces";
import AddPlaces from "./screens/AddPlaces";
import PlaceDetails from "./screens/PlaceDetails";
import Map from "./screens/Map";

import IconButton from "./components/ui/IconButton";
import Colors from "./constants/colors";
import { init } from "./util/database";

const Stack = createNativeStackNavigator();

export default function App() {
  const [dbInitialized, setDbInitialized] = useState(false);

  useEffect(() => {
    init().then(() => {
      setDbInitialized(true);
    });
  }, []);

  if (!dbInitialized) {
    return <Text>App loading...</Text>;
  }

  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {
              backgroundColor: Colors.gray700,
            },
            headerStyle: {
              backgroundColor: Colors.primary500,
            },
            headerTintColor: Colors.gray700,
          }}
        >
          <Stack.Screen
            name="AllPlaces"
            component={AllPlaces}
            options={({ navigation }) => ({
              headerRight: ({ tintColor }) => (
                <IconButton
                  title="Add"
                  onPress={() => navigation.navigate("AddPlaces")}
                  name="add"
                  size={24}
                  color={tintColor}
                />
              ),
              title: "All Places",
            })}
          />
          <Stack.Screen
            name="AddPlaces"
            component={AddPlaces}
            options={{ title: "Add a new Place" }}
          />
          <Stack.Screen
            name="PlaceDetails"
            component={PlaceDetails}
            options={({ route }) => ({
              title: "Place Details",
            })}
          />
          <Stack.Screen name="Map" component={Map} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
