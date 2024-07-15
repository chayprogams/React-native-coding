import React, { useContext, useState, useCallback, useEffect } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import { LocationContext } from '../Context/LocationContext';
import { CreateTrack } from '../hooks/useSaveTrack';
import debounce from 'lodash.debounce';

const TrackForm = () => {
  const { StartRecording, StopRecording, ChangeName, state } = useContext(LocationContext);
  const [saveTrack] = CreateTrack();
  const [name, setName] = useState('');
  const [recording, setRecording] = useState(false);
  const [showSaveButton, setShowSaveButton] = useState(false);

  const handleNameChange = (value) => {
    setName(value);
    ChangeName(value);
  };

  const DebounceNameChange = useCallback(debounce(handleNameChange, 2000), []);

  useEffect(() => {
    if (state.recording) {
      setRecording(true);
      setShowSaveButton(false);
    } else if (!state.recording && recording) {
      setRecording(false);
      setShowSaveButton(true);
    }
  }, [state.recording, recording]);

  const handleStartRecording = () => {
    StartRecording();
    setRecording(true);
  };

  const handleStopRecording = () => {
    StopRecording();
    setRecording(false);
    setShowSaveButton(true);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter track name"
        placeholderTextColor="#888"
        onChangeText={DebounceNameChange}
        // value={state?.name}
      />
      {recording ? (
        <Button
          title="Stop Recording"
          onPress={handleStopRecording}
          color="#1E90FF"
        />
      ) : (
        <Button
          title="Start Recording"
          onPress={handleStartRecording}
          color="#1E90FF"
        />
      )}
      {showSaveButton && (
        <View style={styles.saveButtonContainer}>
          <Button
            title="Save Recording"
            onPress={saveTrack}
            color="#1E90FF"
            style={styles.saveButton}
          />
        </View>
      )}
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
  saveButtonContainer: {
    marginTop: 12,
  },
  saveButton: {
    marginTop: 12,
  },
});

export default TrackForm;
