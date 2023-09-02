import {Image, SafeAreaView, View} from 'react-native';
import React, {useEffect} from 'react';
import {Colors} from '../../constants/Colors';
import Typography from '../../components/common/Typography';
import {FlatList} from 'react-native';
import {IProfileProps} from './interface';
import {useAuthContext} from '../../hooks/useAuthContext';
import {useAbsenContext} from '../../hooks/useAbsenContext';
import {HistoryCard} from '../../components/profile/HistoryCard';

export const Profile = (_props: IProfileProps) => {
  const {
    absenState: {histories, isFetching},
    getHistory,
  } = useAbsenContext();
  const {
    state: {
      mothlySummary: {alfa, attendance, leave},
    },
  } = useAuthContext();

  useEffect(() => {
    getHistory();
  }, []);
  return (
    <SafeAreaView
      className="flex-1 p-5 pb-0"
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
          style={{
            fontFamily: 'Courgette-Regular',
          }}
          size="text-xl"
          classNameAdd="mt-2">
          Udin Udinah
        </Typography>
        <View className="w-full h-16 mt-2 flex-row">
          <View className="items-center col-span-2 w-1/3">
            <Typography textColor={Colors.secondary}>Attendance</Typography>
            <Typography
              textColor={Colors.secondary}
              classNameAdd="font-black"
              size="text-lg">
              {attendance}
            </Typography>
          </View>
          <View className="items-center col-span-2 w-1/3">
            <Typography textColor={Colors.secondary}>Alfa</Typography>
            <Typography
              textColor={Colors.secondary}
              classNameAdd="font-black"
              size="text-lg">
              {alfa}
            </Typography>
          </View>
          <View className="items-center col-span-2 w-1/3">
            <Typography textColor={Colors.secondary}>Leave</Typography>
            <Typography
              textColor={Colors.secondary}
              classNameAdd="font-black"
              size="text-lg">
              {leave}
            </Typography>
          </View>
        </View>
      </View>
      <View className="border-t-black border-t-2 mt-5 pt-2">
        <View className="w-full flex-row justify-between">
          <Typography size="text-2xl" textColor={Colors.primary}>
            History
          </Typography>
          <View
            className="h-8 rounded-full p-2 flex-row items-center justify-between"
            style={{backgroundColor: Colors.tertiery}}>
            <View className="h-3 w-3 mr-2 rounded-full bg-red-500"></View>
            <Typography style={{color: 'rgb(239 68 68)', marginTop: -2}}>
              Working
            </Typography>
          </View>
        </View>
      </View>
      <FlatList
        refreshing={isFetching}
        onRefresh={getHistory}
        data={histories ?? []}
        className="mt-5"
        contentContainerStyle={{
          gap: 15,
          paddingBottom: 20,
        }}
        renderItem={({item}) => <HistoryCard item={item} />}
      />
    </SafeAreaView>
  );
};
