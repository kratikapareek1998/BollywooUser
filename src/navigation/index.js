import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import NavigationService from './NavigationService';
import MainStack from './mainStack';

const Routes = () => {
  return (
    <NavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef);
      }}>
      <MainStack />
    </NavigationContainer>
  );
};

export default Routes;