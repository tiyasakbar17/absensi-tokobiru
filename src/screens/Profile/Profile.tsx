import {Image, SafeAreaView, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import Typography from '../../components/common/Typography';

type Props = {};

export const Profile = (_props: Props) => {
  return (
    <SafeAreaView
      className="flex-1 p-5"
      style={{backgroundColor: Colors.secondary}}>
      <View
        className="w-full h-64 rounded-3xl justify-center items-center p-4"
        style={{
          backgroundColor: Colors.primary,
        }}>
        <View
          className="w-28 h-28 rounded-full overflow-hidden"
          style={{backgroundColor: Colors.secondary}}>
          <Image
            source={{
              uri: 'https://picsum.photos/300',
            }}
            height={112}
            width={112}
            className="object-cover"
          />
        </View>
        <Typography
          textColor={Colors.secondary}
          size="text-xl"
          classNameAdd="font-black mt-2">
          Udin Udinah
        </Typography>
        <View className="w-full h-16 mt-2 flex-row">
          <View className="items-center col-span-2 w-1/3">
            <Typography textColor={Colors.secondary}>Attendance</Typography>
            <Typography
              textColor={Colors.secondary}
              classNameAdd="font-black"
              size="text-lg">
              20
            </Typography>
          </View>
          <View className="items-center col-span-2 w-1/3">
            <Typography textColor={Colors.secondary}>Alfa</Typography>
            <Typography
              textColor={Colors.secondary}
              classNameAdd="font-black"
              size="text-lg">
              0
            </Typography>
          </View>
          <View className="items-center col-span-2 w-1/3">
            <Typography textColor={Colors.secondary}>Leave</Typography>
            <Typography
              textColor={Colors.secondary}
              classNameAdd="font-black"
              size="text-lg">
              10
            </Typography>
          </View>
        </View>
      </View>
      <View className="border-t-black border-t-2 mt-5 pt-2">
        <View className="w-full flex-row justify-between">
          <View>
            <Typography size='text-xl' textColor={Colors.quaternary} classNameAdd='font-black'>Current Status</Typography>
            <Typography size='text-2xl' textColor={Colors.primary} classNameAdd='font-black'>Working</Typography>
          </View>
          <View className="h-8 w-16 rounded-full p-2 flex-row items-center justify-between" style={{backgroundColor: Colors.tertiery}}>
            <View className="h-3 w-3 rounded-full bg-red-500"></View>
            <Typography style={{color: 'rgb(239 68 68)', marginTop: -2}}>Live</Typography>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
