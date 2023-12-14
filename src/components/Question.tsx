import React, {useEffect, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RootStackScreenProps} from '../navigations/type';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../features/hooks/hook';
import {questionData} from '../features/BayDin/bayDinSlice';

type Props = RootStackScreenProps<'QuestionScreen'>;

interface QuestionProps {
  filteredQuestions: Question[];
}

const Question = ({filteredQuestions}: QuestionProps) => {
  const navigation = useNavigation<Props['navigation']>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [questionsPerPage, setQuestionsPerPage] = useState<number>(10);
  const [loadedQuestions, setLoadedQuestions] = useState<Array<any>>([]);
  const dispatch = useAppDispatch();
  
  const handleToNumberListScreen = (
    questionNo: number,
    questionName: string,
  ) => {
    dispatch(questionData({id: questionNo, name: questionName}));
    return navigation.navigate('AnswerScreen');
  };

  return (
    <>
      <View style={styles.main}>
        <ScrollView>
          {filteredQuestions && filteredQuestions.length > 0 ? (
            filteredQuestions.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() =>
                  handleToNumberListScreen(item.questionNo, item.questionName)
                }>
                <View style={styles.textMainDiv}>
                  <View style={styles.number}>
                    <Text>{item.questionNo}</Text>
                  </View>
                  <View style={styles.text}>
                    <Text>{item.questionName}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <View style={styles.messageContainer}>
              <Text>ရှာမတွေပါ</Text>
            </View>
          )}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginHorizontal: 20,
  },
  messageContainer: {
    marginTop: 10,
    padding: 10,
    paddingVertical: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    alignItems: 'center',
  },
  textMainDiv: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    marginVertical: 5,
  },
  number: {
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  text: {
    marginRight: 50,
    paddingHorizontal: 10,
    height: 90,
    textAlign: 'left',
    justifyContent: 'center',
  },
});

export default Question;
