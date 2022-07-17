/* eslint-disable */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaProvider} from 'react-native-safe-area-context';

import {RootNavigation} from './navigation/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
