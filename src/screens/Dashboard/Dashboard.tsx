import {View, SafeAreaView} from 'react-native';
import React, {useRef} from 'react';
import {IDashboardProps} from './Interface';
import {Colors} from '../../constants/Colors';
import Typography from '../../components/common/Typography';
import Button from '../../components/common/Button';
import RBSheet from 'react-native-raw-bottom-sheet';
import {AbsenseBottomSheet} from '../../components/dasboard/BottomSheet';

export const Dashboard = (_props: IDashboardProps) => {
  const rbSheetRef = useRef<RBSheet>(null);
  return (
    <SafeAreaView className="p-5 pb-0">
      <View
        className="w-full h-80 rounded-3xl overflow-hidden relative z-50 p-5"
        style={{backgroundColor: Colors.quaternary}}>
        <View className="w-full h-full relative z-40 items-center">
          <Typography
            classNameAdd="mb-5"
            size="text-lg"
            textColor={Colors.secondary}>
            Live Attendance
          </Typography>
          <Typography
            classNameAdd="mb-2 font-black"
            size="text-4xl"
            textColor={Colors.secondary}>
            08:30 AM
          </Typography>
          <Typography
            classNameAdd="mb-4"
            size="text-sm"
            textColor={Colors.secondary}>
            Fri, 25 Aug 2023
          </Typography>
          <View
            className="flex-1 w-full rounded-xl p-2 items-center"
            style={{backgroundColor: Colors.secondary}}>
            <Typography classNameAdd="mb-2 font-bold" size="text-sm">
              Normal
            </Typography>
            <Typography classNameAdd="mb-2 font-bold" size="text-2xl">
              08:00 AM - 05:00 PM
            </Typography>
            <View className="pt-2 flex-row w-full justify-between items-end">
              <Button
                onPress={() => rbSheetRef.current?.open()}
                buttonClassName="w-2/5 h-12 rounded-xl"
                textClassName="text-sm font-bold"
                title="Clock In"
              />
              <Button
                onPress={() => rbSheetRef.current?.open()}
                buttonClassName="w-2/5 h-12 rounded-xl"
                textClassName="text-sm font-bold"
                title="Clock Out"
              />
            </View>
          </View>
        </View>
        <View
          className="absolute z-30 rounded-full h-72 w-72 right-[-90px] top-[30px]"
          style={{backgroundColor: Colors.primary}}></View>
      </View>
      <AbsenseBottomSheet rbSheetRef={rbSheetRef} />
    </SafeAreaView>
  );
};
