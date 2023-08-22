import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

interface ICustomButton {
  title?: string;
  buttonClassName?: string;
  textClassName?: string;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export default function Button(props: ICustomButton) {
  const {
    title,
    buttonClassName = '',
    textClassName = '',
    buttonStyle,
    textStyle,
  } = props;
  return (
    <TouchableOpacity
      className={`w-full h-14 rounded-full justify-center items-center ${buttonClassName}`}
      style={{backgroundColor: Colors.primary, ...(buttonStyle as ViewStyle)}}>
      <Text
        style={{color: Colors.secondary, ...(textStyle as TextStyle)}}
        className={`text-xl ${textClassName}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
