import React from 'react';
import {Text, View, StyleSheet, TextInput} from 'react-native';
const SignUp = () => {
  return (
    <>
      <View style={styles.container}>
        <Text title bold style={{fontSize: 24}}>
          Sign Up
        </Text>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default SignUp;
