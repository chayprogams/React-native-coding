import React, { useContext, useEffect, useState, useRef } from 'react';
import { StyleSheet, View, ActivityIndicator, Animated } from 'react-native';
import MapView, { Polyline, Circle, Marker } from 'react-native-maps';
import { LocationContext } from '../Context/LocationContext';
import useMockLocation from '../_mocklocation';

const Map = () => {
  const { state: { currentlocation, locations, recording } } = useContext(LocationContext);
  const [region, setRegion] = useState(null);
  const animatedCoordinate = useRef(new Animated.ValueXY()).current;

  useMockLocation();

  useEffect(() => {
    if (currentlocation) {
      setRegion({
        ...currentlocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });

      animatedCoordinate.setValue({
        x: currentlocation.coords.latitude,
        y: currentlocation.coords.longitude,
      });
    }
  }, [currentlocation]);

  if (!region) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={region}
        region={region?region:null}
      >
 {currentlocation && (
  <>
    <Circle
      center={currentlocation.coords}
      radius={50}
      strokeColor="rgba(158, 158, 255, 1.0)"
      fillColor="rgba(158, 158, 255, 0.3)"
    />
    {currentlocation.coords && (
      <Marker.Animated
        coordinate={{
          latitude: currentlocation.coords.latitude,
          longitude: currentlocation.coords.longitude,
        }}
      />
    )}
  </>
)}

        {/* {locations.length > 0 && (
          <Polyline coordinates={locations.map(loc => loc.coords)} />
        )} */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  map: {
    height:500,
    ...StyleSheet.absoluteFillObject,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
