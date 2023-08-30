import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {AppNavigationRoutes, IHomeProps} from './interface';
import {Profile} from '../screens/Profile/Profile';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Colors} from '../constants/Colors';
import {Dashboard} from '../screens/Dashboard/Dashboard';

export const AppNavigation = (_props: IHomeProps) => {
  const Tab = createBottomTabNavigator<AppNavigationRoutes>();
  return (
    <Tab.Navigator
      initialRouteName="PROFILE"
      screenOptions={() => ({
        tabBarStyle: {
          height: 50,
        },
      })}>
      <Tab.Screen
        name="DASHBOARD"
        component={Dashboard}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="th-large"
              size={30}
              color={focused ? Colors.primary : Colors.quaternary}
            />
          ),
          tabBarShowLabel: false,
        }}></Tab.Screen>
      <Tab.Screen
        name="PROFILE"
        component={Profile}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <Icon
              name="user-circle"
              size={30}
              color={focused ? Colors.primary : Colors.quaternary}
            />
          ),
          tabBarShowLabel: false,
        }}></Tab.Screen>
    </Tab.Navigator>
  );
};
