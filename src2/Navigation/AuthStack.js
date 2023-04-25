import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WelcomeScreen from '../screens/WelcomeScreen';
import QuizPage from '../screens/QuizPage';
import ScorePage from '../screens/ScorePage';
import Register from '../screens/Register';
const Stack = createNativeStackNavigator();
import Quiz from '../screens/Quiz';
import AnswerScreen from '../screens/AnswerScreen';
import CounterApp from '../../src/screen1/Component/CounterApp';
import Render from '../../src/screen1/Component/Render';
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Render">
      <Stack.Screen name="Render" component={Render} />

      <Stack.Screen name="CounterApp" component={CounterApp} />
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="QuizPage" component={QuizPage} />
      <Stack.Screen name="ScorePage" component={ScorePage} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="AnswerScreen" component={AnswerScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
