import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import data from '../api/data.json'
import {useAppDispatch, useAppSelector} from '../features/hooks/hook';
import {answerNo} from '../features/BayDin/bayDinSlice';

const Answer = ({navigation}: any) => {
  const dispatch = useAppDispatch();

  const handleToResultScreen = (item: string) => {
    const englishNumber = convertMyanmarToEnglishNumber(item);
    dispatch(answerNo(Number(englishNumber)));
    navigation.navigate('ResultScreen');
  };

  return (
    <>
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
    marginVertical: '10%',
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
