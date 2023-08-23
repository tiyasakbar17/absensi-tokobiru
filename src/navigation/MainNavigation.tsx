import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login} from '../screens/Login/Login';
import {Profile} from '../screens/Profile/Profile';
import {MainNavigationRoutes} from './NavigationItems';

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
        name="PROFILE"
        component={Profile}
        options={{
          orientation: 'portrait',
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
