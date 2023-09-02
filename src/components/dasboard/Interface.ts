import RBSheet from 'react-native-raw-bottom-sheet';
import {ILocation} from '../../hooks/useGeolocation';
import {CompositeNavigationProp} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';
import {
  AppNavigationRoutes,
  MainNavigationRoutes,
} from '../../navigation/interface';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

export type BottomSheetProps = {
  rbSheetRef: React.RefObject<RBSheet>;
  navigation: CompositeNavigationProp<
    BottomTabNavigationProp<AppNavigationRoutes, 'DASHBOARD', undefined>,
    NativeStackNavigationProp<MainNavigationRoutes, 'HOME', undefined>
  >;
};

export interface IFormData {
  coord: ILocation;
  details: string;
}
