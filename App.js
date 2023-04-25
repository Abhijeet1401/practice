import {View, Text} from 'react-native';
import React from 'react';
//import FormValidation from './src/screen1/Component/FormValidation'
//import CounterApp from './src/screen1/Component/CounterApp'
//import FetchApi from './src/screen1/Component/FetchApi'
import Counter from './src/screen1/Component/Counter';
import {Provider} from 'react-redux';
import FetchScreen from './src2/screens/WelcomeScreen';
//import store from './src/screen1/Component/Redux/store'
//import countReducer from './src/screen1/Component/Redux/reducers/countReducer'
import store from './src2/Redux/store/store';
//import MapMethod from './src/screen1/Component/Render';
import AuthStack from './src2/Navigation/AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from './src2/screens/Register';
import Wish from './src/screen1/Component/Wish';

import Navigation from './MainNavigation/Navigation';

const App = () => {
  return (
    // <Wish />

    <NavigationContainer>
      <Provider store={store}>
        {/* <FetchScreen /> */}
        <AuthStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
