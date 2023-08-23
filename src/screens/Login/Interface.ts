import {NavigationProp} from '@react-navigation/native';

export interface ILoginProps {
  navigation: any;
}

export interface ILoginState {
  email: string;
  password: string;
  isShowPassword: boolean;
}
