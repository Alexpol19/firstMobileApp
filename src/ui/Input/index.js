import React from 'react';
import {
  StyleSheet,
  TextInput,
} from 'react-native';

const Input = ({value, onChange, placeholder, error = false, secure = false}) => {
  
  return (
    <TextInput
      style={error ? styles.errorInput : styles.input}
      onChangeText={onChange}
      placeholder={placeholder}
      secureTextEntry={secure}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "gray",
    backgroundColor: "white",
    width: "100%",
    padding: 3,
    paddingLeft: 10,
    borderRadius: 4,
    fontWeight: "600",
  },
  errorInput: {
    borderWidth: 1,
    borderColor: "red",
    backgroundColor: "white",
    width: "100%",
    padding: 3,
    paddingLeft: 10,
    borderRadius: 4,
    fontWeight: "600",
  },
});


export default Input;
