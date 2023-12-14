import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Button = ({navigation, route}:any) => {
  const handleChangeScreen = () => {
    navigation.navigate(route);
  };

  return (
    <>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => handleChangeScreen()}>
          <Text style={{color: 'white'}}>နောက်သို့</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    width: 120,
    borderRadius: 30,
    margin: 20,
    backgroundColor: 'brown',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
