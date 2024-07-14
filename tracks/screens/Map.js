import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { LocationContext } from '../Context/LocationContext';
import useMockLocation from '../_mocklocation';

const Map = () => {
  const { state: { currentlocation, locations } } = useContext(LocationContext);
  const [region, setRegion] = useState(null);

  useMockLocation();

  useEffect(() => {
    if (currentlocation) {
      setRegion({
        ...currentlocation.coords,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
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
    <MapView
      style={styles.map}
      initialRegion={region}
      region={region}
    >
      {currentlocation && (
        <Circle
          center={currentlocation.coords}
          radius={50}
          strokeColor="rgba(158, 158, 255, 1.0)"
          fillColor="rgba(158, 158, 255, 0.3)"
        />
      )}
      {locations?.length > 0 && (
        <Polyline coordinates={locations.map(loc => loc.coords)} />
      )}
    </MapView>
  );
};

const styles = StyleSheet.create({
  map: {
    height: 300,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Map;
