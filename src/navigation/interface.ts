import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams,
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type MainNavigationRoutes = {
  LOGIN: undefined;
  HOME: NavigatorScreenParams<AppNavigationRoutes>;
};

export type AppNavigationRoutes = {
  PROFILE: undefined;
  DASHBOARD: undefined;
};

export type NavigationMainScreenStack<
  RouteName extends keyof MainNavigationRoutes,
> = NativeStackScreenProps<MainNavigationRoutes, RouteName>;

export type NavigationAppScreenTab<
  RouteName extends keyof AppNavigationRoutes,
> = CompositeScreenProps<
  BottomTabScreenProps<AppNavigationRoutes, RouteName>,
  NativeStackScreenProps<MainNavigationRoutes>
>;

// Interface
export interface IHomeProps extends NavigationMainScreenStack<'HOME'> {}
