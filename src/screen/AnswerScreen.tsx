import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import { useAppSelector } from '../features/hooks/hook';
import Answer from '../components/Answer';
import { RootStackScreenProps } from '../navigations/type';
import Button from '../components/Button';

type Props = RootStackScreenProps<'AnswerScreen'>;

const AnswerScreen = ({navigation, route}: Props) => {
    const {questionName} = useAppSelector((state) => state.bayDin)
  return (
    <>
      <View>
        <Text style={styles.questionTxt}>{questionName}</Text>
      </View>
      <View style={styles.main}>
        <Answer navigation={navigation} route={route}/>
      </View>
      <View>
        <Button navigation={navigation} route={'QuestionScreen'} />
      </View>
    </>
  );
};

export default AnswerScreen;

const styles = StyleSheet.create({
    questionTxt:{
        color: 'black',
        marginTop: '10%',
        marginHorizontal: 50,
        textAlign: 'center',
        fontSize: 20,
      },
      main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginHorizontal: 10,
        marginVertical: '10%',
      },
});
