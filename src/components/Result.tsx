import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import data from '../api/data.json';
import {RootStackScreenProps} from '../navigations/type';
import { useNavigation } from '@react-navigation/native';
import { useAppSelector } from '../features/hooks/hook';

type Props = RootStackScreenProps<'ResultScreen'>;

const Result = ({navigation, route}: Props) => {

  const { questionId, questionName, answerNo} = useAppSelector((state) => state.bayDin)
  console.log("🚀 ~ file: Result.tsx:13 ~ Result ~ answerNo:", answerNo)
  console.log("🚀 ~ file: Answer.tsx:12 ~ Answer ~ questionId:", questionId)
  console.log("🚀 ~ file: Answer.tsx:12 ~ Answer ~ questionName:", questionName)

  const result = getResult(questionId, answerNo);

  const handleToAnswerScreen = () => {
    navigation.navigate('AnswerScreen')
  }

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
        <Text style={styles.txtTitle}>လက်ထောက်ဗေဒင်</Text>
      </View>
      <View >
        <Text style={styles.txt}>{result?.answerResult}</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => handleToAnswerScreen()}>
          <Text style={{color: 'white'}}>နောက်သို့</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getResult = (qId: number, ansNo: number) =>
  data.answers.find(item => qId === item.questionNo && ansNo === item.answerNo);

export default Result;

const styles = StyleSheet.create({
  txtTitle:{
    color: 'black',
    fontSize: 30,
    marginVertical: 5,
  },
  txt:{
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
    marginVertical: 30,
  },
  button: {
    borderRadius: 30,
    margin: 20,
    backgroundColor: 'brown',
    paddingHorizontal: 30,
    paddingVertical: 10,
  }
});
