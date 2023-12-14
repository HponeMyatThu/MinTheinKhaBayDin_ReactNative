import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParametersList} from './type';
import Question from '../components/Question';
import Answer from '../components/Answer';
import Result from '../components/Result';

const Stack = createNativeStackNavigator<RootStackParametersList>();

export const RootStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="QuestionScreen"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name={'QuestionScreen'} component={Question} />
      <Stack.Screen name={'AnswerScreen'} component={Answer} />
      <Stack.Screen name={'ResultScreen'} component={Result} />
    </Stack.Navigator>
  );
};
