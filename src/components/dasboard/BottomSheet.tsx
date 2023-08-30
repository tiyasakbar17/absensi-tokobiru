import {View, TextInput, Alert} from 'react-native';
import React, {useEffect, useMemo, useState} from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Typography from '../common/Typography';
import Button from '../common/Button';
import {useGeolocation} from '../../hooks/useGeolocation';
import {Colors} from '../../constants/Colors';
import {BottomSheetProps, IFormData} from './Interface';

const initialState: IFormData = {
  coord: {
    lat: '',
    lon: '',
  },
  details: '',
};
export const AbsenseBottomSheet = ({rbSheetRef}: BottomSheetProps) => {
  const [form, setForm] = useState<IFormData>(initialState);
  const {getCurrentLocation, state} = useGeolocation();

  const changeHandler = (detail: string) => {
    setForm(prev => ({
      ...prev,
      details: detail,
    }));
  };

  useEffect(() => {
    if (!state.lat || !state.lon) return;
    setForm(prev => ({...prev, coord: state}));
  }, [state]);

  const disabledSubmit = useMemo(() => {
    return !(
      Boolean(form.details) &&
      Boolean(form.coord.lat) &&
      Boolean(form.coord.lon)
    );
  }, [form]);

  return (
    <RBSheet
      ref={rbSheetRef}
      height={300}
      customStyles={{
        container: {
          backgroundColor: Colors.secondary,
          borderTopEndRadius: 35,
          borderTopStartRadius: 35,
          paddingTop: 25,
        },
        wrapper: {
          backgroundColor: 'rgba(0,0,0,0.4)',
        },
      }}>
      <View className="flex-1 p-5 pt-0">
        <View className="w-full">
          <Typography size="text-sm" classNameAdd="mb-2 font-bold">
            Details
          </Typography>
          <TextInput
            className="w-full min-h-0 max-h-16 border border-slate-500 rounded-[10px] pl-4 mb-3"
            multiline
            maxLength={180}
            placeholder="Put detail here..."
            value={form.details}
            onChangeText={changeHandler}
          />
          <Typography size="text-sm" classNameAdd="mb-2 font-bold">
            Locations
          </Typography>
          <Button
            title="See location"
            buttonClassName="rounded-[10px] border h-12"
            buttonStyle={{
              backgroundColor: Colors.secondary,
              borderColor: Colors.primary,
            }}
            textStyle={{color: Colors.primary}}
            textClassName="text-sm"
            onPress={() =>
              Alert.alert(
                'Location',
                `Lon: ${form.coord.lon}\nLat: ${form.coord.lat}`,
              )
            }
          />
        </View>
        <View className="flex-1 justify-end">
          <Button
            title="Submit"
            buttonClassName="place-self-end rounded-[10px]"
            disabled={disabledSubmit}
          />
        </View>
      </View>
    </RBSheet>
  );
};
