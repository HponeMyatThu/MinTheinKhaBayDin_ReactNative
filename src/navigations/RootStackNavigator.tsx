import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParametersList} from './type';
import Result from '../components/Result';
import QuestionScreen from '../screen/QuestionScreen';
import AnswerScreen from '../screen/AnswerScreen';
import Answer from '../components/Answer';
import ResultScreen from '../screen/ResultScreen';

const Stack = createNativeStackNavigator<RootStackParametersList>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="QuestionScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'QuestionScreen'} component={QuestionScreen} />
      <Stack.Screen name={'AnswerScreen'} component={AnswerScreen} />
      <Stack.Screen name={'ResultScreen'} component={ResultScreen} />
    </Stack.Navigator>
  );
};
