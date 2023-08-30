import {NavigationMainScreenStack} from '../../navigation/interface';

export interface ILoginProps extends NavigationMainScreenStack<'LOGIN'> {}

export interface ILoginState {
  email: string;
  password: string;
  isShowPassword: boolean;
}
