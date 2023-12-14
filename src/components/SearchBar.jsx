import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, Text, TextInput} from 'react-native';

const SearchBar = ({onChangeText}) => {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.text}>သိလိုသောမေးခွန်းအားရှာဖွေပါ...</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    border: 'none',
    backgroundColor: '#ccc',
    padding: 10,
  },
  main: {
    borderColor: '#ccc',
    borderWidth: 1,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  text: {
    textAlign: 'start',
    color: 'black',
    marginTop: 10,
    marginLeft: 15,
    marginBottom: -5,
  },
});

export default SearchBar;
