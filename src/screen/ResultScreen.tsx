import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useAppSelector} from '../features/hooks/hook';
import Result from '../components/Result';
import {RootStackScreenProps} from '../navigations/type';
import Button from '../components/Button';

type Props = RootStackScreenProps<'ResultScreen'>;

const ResultScreen = ({navigation, route}: Props) => {
  const {questionId, questionName, answerNo} = useAppSelector(
    state => state.bayDin,
  );

  return (
    <>
      <View style={{flex:1}}>
        <Result
          questionId={questionId}
          answerNo={answerNo}
          navigation={navigation}
          title='လက်ထောက်ဗေဒင်'
          route={route}
        />
      </View>
      <View>
        <Button navigation={navigation} route={'AnswerScreen'} />
      </View>
    </>
  );
};

export default ResultScreen;

const styles = StyleSheet.create({});
