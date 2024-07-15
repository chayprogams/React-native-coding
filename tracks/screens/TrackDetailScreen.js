import { View, Text, StyleSheet } from "react-native";
import { useContext, useState, useEffect } from "react";
import { TrackContext } from "../Context/TrackContext";
import MapView from "react-native-maps";
import { Polyline } from "react-native-maps";
import AsyncStorage from "@react-native-async-storage/async-storage";

const TrackDetailScreen = ({ route }) => {
  const [data, setData] = useState();
  const { states } = useContext(TrackContext); // Access track data from context
  const { _id } = route.params; // Extract track ID from route params

  // Fetch track data from AsyncStorage or context
  useEffect(() => {
    const fetchTrackData = async () => {
      // Check AsyncStorage for specific track data (if applicable)
      const trackDataFromStorage = await AsyncStorage.getItem('TrackData');
      if (trackDataFromStorage) {
        const parsedData = JSON.parse(trackDataFromStorage);
        const trackFromStorage = parsedData.trackData?.find(t => t._id === _id); // Optional chaining for safety
        if (trackFromStorage) {
          setData(trackFromStorage);
          return; // Exit if found in AsyncStorage
        }
      }

      // If not found in AsyncStorage, use data from context (if available)
    //   const trackFromContext = states?.find(t => t._id === _id); // Optional chaining for safety
    //   setData(trackFromContext);
    };

    fetchTrackData();
  }, []); // Run effect only once on component mount

  const track = data; // Use the fetched data for track details

  // Handle potential missing data (optional)
  if (!track) {
    return <Text>Track not found.</Text>; // Display error or loading message
  }

  const initialCoords = track.locations[0].coords; // Extract initial coordinates

  return (
    <View>
      <Text style={{ fontSize: 20,fontWeight:500,marginBottom:12 }}>{track.name}</Text>
      <MapView
        initialRegion={{
            ...initialCoords,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        style={styles.map}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 500,
  },
});

export default TrackDetailScreen;
