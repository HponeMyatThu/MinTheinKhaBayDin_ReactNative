import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import data from '../api/data.json';
import Question from '../components/Question';
import SearchBar from '../components/SearchBar';

const QuestionScreen: React.FC = () => {
  const [search, setSearch] = useState<string>('');

  // const fetchData = () =>{
    
  // }

  const filteredQuestions: Question[] = data.questions.filter(item => {
    return item.questionName.toLowerCase().includes(search?.toLowerCase());
  });

  return (
    <>
      <View>
        <SearchBar onChangeText={(text: string) => setSearch(text)} />
      </View>
      <View style={{flex: 1}}>
        <Question filteredQuestions={filteredQuestions} />
      </View>
    </>
  );
};

export default QuestionScreen;

const styles = StyleSheet.create({});
