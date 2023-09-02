import {createContext, useState} from 'react';
import {
  IAuthContext,
  IAuthState,
  IContextProvider,
  LoginResponse,
} from './Authentication.interface';
import axios, {AxiosError} from 'axios';
import {
  AxiosResponseTemplate,
  StatusResponse,
  setToken,
} from '../services/Axios.service';
import {Alert} from 'react-native';
import {baseUrl} from '../constants/variables';
``;

export const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const initialState: IAuthState = {
  isFetching: false,
  name: '',
  mothlySummary: {
    alfa: 0,
    attendance: 0,
    leave: 0,
  },
};

export const ContextProvider = ({children}: IContextProvider) => {
  const [state, setState] = useState<IAuthState>(initialState);

  async function login(email: string, password: string) {
    try {
      setState(prev => ({...prev, isFetching: true}));
      const response = await axios.post<AxiosResponseTemplate<LoginResponse>>(
        `${baseUrl}auth/login`,
        {email, password},
      );

      const {status, message, data} = response.data;

      if (status === StatusResponse.FAILED) {
        setState(prev => ({...prev, isFetching: false}));
        Alert.alert(
          'Failed',
          message,
          [
            {
              text: 'OK',
            },
          ],
          {
            userInterfaceStyle: 'dark',
          },
        );
        return false;
      }
      setToken(data?.token!);
      setState(prev => ({...prev, ...data?.userData, isFetching: false}));
      return true;
    } catch (error) {
      setState(prev => ({...prev, isFetching: false}));
      const errorMessage = (error as AxiosError<AxiosResponseTemplate>).response
        ?.data.message;
      Alert.alert(
        'Failed',
        errorMessage,
        [
          {
            text: 'OK',
          },
        ],
        {
          userInterfaceStyle: 'dark',
        },
      );
      return false;
    }
  }

  return (
    <AuthContext.Provider value={{state, login}}>
      {children}
    </AuthContext.Provider>
  );
};
