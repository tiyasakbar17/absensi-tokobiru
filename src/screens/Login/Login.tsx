import {Image, SafeAreaView, StyleSheet, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import {Colors} from '../../constants/Colors';
import Button from '../../components/common/Button';
import Typography from '../../components/common/Typography';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ILoginProps, ILoginState} from './Interface';

const initialState: ILoginState = {
  email: '',
  password: '',
  isShowPassword: false,
};
export const Login = (props: ILoginProps) => {
  const {navigation} = props;
  const [state, setState] = useState<ILoginState>(initialState);

  const stateChangeHandler = (
    name: keyof ILoginState,
    value: string | boolean,
  ) => {
    setState(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <SafeAreaView
      className="flex-1 h-full justify-center items-center p-10"
      style={{backgroundColor: Colors.secondary}}>
      <Image
        source={require('../../assets/images/TokoBiru.png')}
        className="overflow-hidden object-cover h-48 w-48 mb-6"
      />
      <View className="w-full gap-2">
        <TextInput
          className="w-full rounded-3xl px-6"
          onChangeText={text => stateChangeHandler('email', text)}
          style={{backgroundColor: Colors.tertiery, color: Colors.secondary}}
          placeholder="Email"
          placeholderTextColor={Colors.primary}
        />
        <View
          className="w-full rounded-3xl px-5 flex-row justify-between "
          style={{backgroundColor: Colors.tertiery}}>
          <TextInput
            onChangeText={text => stateChangeHandler('password', text)}
            placeholder="Password"
            placeholderTextColor={Colors.primary}
            secureTextEntry={!state.isShowPassword}
          />
          <View className="pt-[5%]">
            <Icon
              onPress={() =>
                stateChangeHandler('isShowPassword', !state.isShowPassword)
              }
              name={state.isShowPassword ? 'eye-slash' : 'eye'}
              color={Colors.primary}
              size={17}
            />
          </View>
        </View>
        <Button
          onPress={() =>
            navigation.navigate('HOME', {
              screen: 'PROFILE',
            })
          }
          title="Sign in"
          buttonClassName="mt-3 ml-2"
        />
      </View>
      <View className="w-full flex-row justify-end mt-2">
        <Typography style={styles.underline}>Forgot password?</Typography>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  underline: {textDecorationLine: 'underline'},
});
