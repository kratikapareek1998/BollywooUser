/* eslint-disable prettier/prettier */
import React, {useEffect} from 'react';
import {View, Alert} from 'react-native';
import MainStack from './src/navigation/mainStack';
import { Provider } from "react-redux";
import { store } from "./src/Redux/store/store.js";


const App = () => {
  return (
    <Provider store={store}>
      <MainStack />
    </Provider>
  );
};

export default App;
