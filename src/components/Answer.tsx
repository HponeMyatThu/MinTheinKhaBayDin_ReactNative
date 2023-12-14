import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import data from '../api/data.json';
import {RootStackScreenProps} from '../navigations/type';
import { useAppDispatch, useAppSelector } from '../features/hooks/hook';
import { answerNo } from '../features/BayDin/bayDinSlice';

type Props = RootStackScreenProps<'AnswerScreen'>;

const Answer = ({navigation}: Props) => {
  const dispatch = useAppDispatch();
  const {questionName} = useAppSelector((state) => state.bayDin)

  const handleToResultScreen = (item: string) => {
    const englishNumber = convertMyanmarToEnglishNumber(item);
    dispatch(answerNo(Number(englishNumber)))
    navigation.navigate('ResultScreen');
  };

  const handleToQuestionScreen = () => {
    navigation.navigate('QuestionScreen');
  };

  return (
    <>
    <View>
      <Text style={styles.questionTxt}>
        {questionName}
      </Text>
    </View>
      <View style={styles.main}>
        {data.numberList.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleToResultScreen(item)}>
            <View style={styles.div}>
              <Text style={styles.text}>{item}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => handleToQuestionScreen()}>
          <Text style={{color: 'white'}}>နောက်သို့</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const convertMyanmarToEnglishNumber = (myanmarNumber: string): string => {
  const myanmarToEnglishMap: Record<string, string> = {
    '၀': '0',
    '၁': '1',
    '၂': '2',
    '၃': '3',
    '၄': '4',
    '၅': '5',
    '၆': '6',
    '၇': '7',
    '၈': '8',
    '၉': '9',
  };

  return myanmarNumber
    .split('')
    .map(char => myanmarToEnglishMap[char] || char)
    .join('');
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginVertical: '20%',
  },
  questionTxt:{
    color: 'black',
    marginTop: '10%',
    marginHorizontal: 50,
    textAlign: 'center',
    fontSize: 20,
  },
  button: {
    width: 120,
    borderRadius: 30,
    margin: 20,
    backgroundColor: 'brown',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  div: {
    borderColor: 'brown',
    borderWidth: 1,
    padding: 7,
    marginHorizontal: 1,
    marginVertical: 1,
    backgroundColor: 'brown',
  },
  text: {
    color: 'white',
    width: 20,
    height: 20,
    textAlign: 'center',
  },
});

export default Answer;
