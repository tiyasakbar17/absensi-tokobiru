/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ContextProvider} from './src/context/Authentication';
import {MainNavigation} from './src/navigation/MainNavigation';
import {AbsenProvider} from './src/context/Absen';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
function App(): JSX.Element {
  return (
    <NavigationContainer>
      <ContextProvider>
        <AbsenProvider>
          <MainNavigation />
        </AbsenProvider>
      </ContextProvider>
    </NavigationContainer>
  );
}

export default App;
