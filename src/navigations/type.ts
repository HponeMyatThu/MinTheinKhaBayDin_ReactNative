import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type RootStackParametersList = {
  QuestionScreen: undefined;
  AnswerScreen: undefined;
  ResultScreen: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParametersList> =
  NativeStackScreenProps<RootStackParametersList, T>;
