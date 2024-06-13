import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';

const Input = ({name, value, setValue, secureTextEntry = false}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{name}</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setValue(text)}
        value={value}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 20,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  label: {
    marginHorizontal: 5,
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    height: 48,
    fontSize: 16,
    color: '#333',
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 4,
  },
});

export default Input;
