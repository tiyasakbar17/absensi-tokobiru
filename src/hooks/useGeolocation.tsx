import {useEffect, useState} from 'react';
import {Alert, BackHandler, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';

interface IUseGeolocation {
  getCurrentLocation: () => void;
  state: ILocation;
}

export interface ILocation {
  lon: string;
  lat: string;
}

export const useGeolocation: () => IUseGeolocation = () => {
  const [state, setState] = useState<ILocation>({
    lat: '',
    lon: '',
  });
  async function checkPermission() {
    const permissionGranted = await PermissionsAndroid.check(
      'android.permission.ACCESS_FINE_LOCATION',
    );
    if (!permissionGranted) {
      const response = await PermissionsAndroid.request(
        'android.permission.ACCESS_FINE_LOCATION',
      );
      if (response !== 'granted') {
        Alert.alert(
          'Permission needed!',
          'PLease allow location service!',
          [
            {
              text: 'OK',
              onPress: () => BackHandler.exitApp(),
            },
          ],
          {
            cancelable: false,
          },
        );
      }
      return;
    }
    getCurrentLocation();
  }

  const succesCallback: Geolocation.SuccessCallback = props => {
    const {coords, mocked} = props;
    if (mocked) {
      return Alert.alert('Cheating', 'No fake GPS allowed');
    }
    setState(() => ({
      lon: coords.longitude.toString(),
      lat: coords.latitude.toString(),
    }));
  };

  const failedCallback: Geolocation.ErrorCallback = _props => {
    Alert.alert('Error', 'Something went wrong when getting your location');
  };

  function getCurrentLocation() {
    Geolocation.getCurrentPosition(succesCallback, failedCallback, {
      enableHighAccuracy: true,
      forceRequestLocation: true,
    });
  }

  useEffect(() => {
    checkPermission();
  }, []);

  return {getCurrentLocation, state};
};
