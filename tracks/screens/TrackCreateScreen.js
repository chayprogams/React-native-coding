import React, { useContext, useCallback } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Map from './Map';
import TrackForm from './TrackForm.js';
import useLocation from '../hooks/UseLocation.js';
import { LocationContext } from '../Context/LocationContext.js';
import '../_mocklocation.js';

const TrackCreateScreen = ({ navigation }) => {
  const { AddLocation, state } = useContext(LocationContext);

  const callBack = useCallback(
    (location) => {
      AddLocation(location, state.recording);
    },
    [state.recording]
  );

  const [err] = useLocation(callBack, state.recording);

  return (
    <View>
       <TrackForm style={styles.tracks}/>
      <Map />
      {err ? <Text>Please enable location services</Text> : null}
    </View>
  );
};
const styles = StyleSheet.create({
  tracks:{
    marginBottom:12
  }
})
export default TrackCreateScreen;
