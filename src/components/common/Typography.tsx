import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

interface ITypography extends TextProps {
  classNameAdd?: string
  textColor?: string;
  size?:
    | 'text-sm'
    | 'text-xs'
    | 'text-lg'
    | 'text-xl'
    | 'text-2xl'
    | 'text-3xl'
    | 'text-4xl'
    | 'text-5xl'
    | 'text-6xl'
    | 'text-7xl'
    | 'text-8xl'
    | 'text-9xl';
}

const Typography = (props: ITypography) => {
  const {children, style, classNameAdd, textColor, size} = props;
  return (
    <Text
      className={`${size} ${classNameAdd}`}
      style={{...styles.text, color: textColor, ...(style as TextStyle)}}>
      {children}
    </Text>
  );
};

export default Typography;

const styles = StyleSheet.create({
  text: {
    color: Colors.primary,
  },
});
