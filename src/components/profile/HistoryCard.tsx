import {View, Text, Image} from 'react-native';
import React from 'react';
import {DailyAbsenHistory} from '../../context/Absen.interface';
import Typography from '../common/Typography';
import {Colors} from '../../constants/Colors';

type Props = {
  item: DailyAbsenHistory;
};

export const HistoryCard = ({item}: Props) => {
  return (
    <View className="w-full flex-row justify-between">
      <Image
        source={{
          uri: 'https://picsum.photos/300',
        }}
        className="w-3/5 h-32"
      />
      <View className="w-2/5 pl-2 justify-between">
        <Typography
          size="text-lg"
          classNameAdd="font-black"
          textColor={Colors.primary}>
          Tiyas
        </Typography>
        <Typography size="text-sm" textColor={Colors.quaternary}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
        <Typography size="text-xs" classNameAdd="text-green-500">
          {item.in.status}
        </Typography>
      </View>
    </View>
  );
};
