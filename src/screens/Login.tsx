import {
  Image,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import Button from '../components/common/Button';
const Logo = require('../assets/images/TokoBiru.png');

export const Login = () => {
  return (
    <SafeAreaView
      className="flex-1 h-full justify-center items-center p-10"
      style={{backgroundColor: Colors.secondary}}>
      <Image
        source={Logo}
        className="overflow-hidden object-cover h-48 w-48 mb-6"
      />
      <View className="w-full gap-2">
        <TextInput
          className="w-full rounded-3xl px-6"
          style={{backgroundColor: Colors.tertiery, color: Colors.secondary}}
          placeholder="Email"
          placeholderTextColor={Colors.primary}
        />
        <TextInput
          className="w-full rounded-3xl px-6"
          style={{backgroundColor: Colors.tertiery}}
          placeholder="Password"
          placeholderTextColor={Colors.primary}
          secureTextEntry
        />
        <Button title="Sign in" buttonClassName="mt-3 ml-2" />
      </View>
    </SafeAreaView>
  );
};
