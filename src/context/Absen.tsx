import {createContext, useState} from 'react';
import {
  AbsenHistoryResponseDto,
  AbsenRequestDto,
  AbsenResponseDto,
  IAbsenContext,
  IAbsenState,
  ILocation,
} from './Absen.interface';
import axios, {AxiosError} from 'axios';
import {baseUrl} from '../constants/variables';
import {AxiosResponseTemplate, StatusResponse} from '../services/Axios.service';
import {Alert} from 'react-native';

export const AbsenContext = createContext<IAbsenContext>({} as IAbsenContext);

const absenInitialState: IAbsenState = {
  isFetching: false,
  histories: [],
};

export const AbsenProvider = ({children}: {children: JSX.Element}) => {
  const [absenState, setAbsenState] = useState<IAbsenState>(absenInitialState);

  async function getHistory() {
    try {
      setAbsenState(prev => ({...prev, isFetching: true}));
      const data = await axios.get<
        AxiosResponseTemplate<AbsenHistoryResponseDto>
      >(`${baseUrl}absen/history`);
      setAbsenState(prev => ({
        ...prev,
        isFetching: false,
        histories: data.data.data?.histories ?? [],
      }));
    } catch (error) {
      setAbsenState(prev => ({...prev, isFetching: false}));
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
    }
  }

  async function sendAbsen(_details: string, location: ILocation) {
    try {
      setAbsenState(prev => ({...prev, isFetching: true}));
      const absenData: AbsenRequestDto = {
        absenTime: new Date(),
        location,
      };
      const data = await axios.post<AxiosResponseTemplate<AbsenResponseDto>>(
        `${baseUrl}absen/absen`,
        absenData,
      );
      Alert.alert('Success', data.data.data?.status);
      return true;
    } catch (error) {
      setAbsenState(prev => ({...prev, isFetching: false}));
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
    <AbsenContext.Provider value={{absenState, getHistory, sendAbsen}}>
      {children}
    </AbsenContext.Provider>
  );
};
