import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login/Login';
import {MainNavigationRoutes} from './interface';
import {AppNavigation} from './AppNavigation';
import {Maps} from '../screens/Maps/Maps';

const Stack = createNativeStackNavigator<MainNavigationRoutes>();

export function MainNavigation() {
  return (
    <Stack.Navigator initialRouteName="LOGIN">
      <Stack.Screen
        name="LOGIN"
        component={Login}
        options={{
          headerShown: false,
          orientation: 'portrait',
        }}
      />
      <Stack.Screen
        name="HOME"
        component={AppNavigation}
        options={{
          orientation: 'portrait',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="MAPS"
        component={Maps}
        options={{
          orientation: 'portrait',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
