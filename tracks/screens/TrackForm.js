import React, { useContext, useState, useCallback } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { LocationContext } from '../Context/LocationContext';
import { CreateTrack } from '../hooks/useSaveTrack';
import debounce from 'lodash.debounce';

const TrackForm = () => {
  const { StartRecording, StopRecording, ChangeName, state } = useContext(LocationContext);
  const [saveTrack] = CreateTrack();
  const [name, setName] = useState('');

  const handleNameChange = (value) => {
    setName(value);
    ChangeName(value);
  };

  const DebounceNameChange = useCallback(debounce(handleNameChange, 2000), []);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter track name"
        placeholderTextColor="#888"
        onChangeText={DebounceNameChange}
      />
      {state.recording ? (
        <Button
          title="Stop Recording"
          onPress={() => StopRecording()}  // Ensure proper function call
          color="#1E90FF"
        />
      ) : (
        <Button
          title="Start Recording"
          onPress={() => StartRecording()}  // Ensure proper function call
          color="#1E90FF"
        />
      )}
      {!state.recording ? (
        <Button
          title="Save Recording"
          onPress={() => saveTrack()}  // Ensure proper function call
          color="#1E90FF"
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    margin: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
});

export default TrackForm;
