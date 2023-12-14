import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import data from '../api/data.json';

const Result = ({questionId, answerNo, title}: any) => {
  const result = getResult(questionId, answerNo);

  return (
    <View style={styles.main}>
      <View>
        <Image
          style={styles.tinylogo}
          source={{
            uri: 'https://play-lh.googleusercontent.com/OcWGuEpiIsSX8OKbLNx0lz6SPbu7cFLHC6H8W0AUeZ_DK3_z8u8D5uOjhsks7uxVJ0E',
          }}
        />
      </View>
      <View>
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
      <View>
        <Text style={styles.txt}>{result?.answerResult}</Text>
      </View>
    </View>
  );
};

const getResult = (qId: number, ansNo: number) =>
  data.answers.find(item => qId === item.questionNo && ansNo === item.answerNo);

export default Result;

const styles = StyleSheet.create({
  txtTitle: {
    color: 'black',
    fontSize: 30,
    marginVertical: 5,
  },
  txt: {
    color: 'black',
    fontSize: 15,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 200,
  },
  tinylogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    borderRadius: 30,
    margin: 20,
    backgroundColor: 'brown',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
