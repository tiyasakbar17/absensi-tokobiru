/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Colors} from './src/Constants/Colors';
import Icon from 'react-native-vector-icons/FontAwesome6';

function App(): JSX.Element {
  return (
    <SafeAreaView className="flex-1 relative">
      <View
        className="absolute z-0 top-0 left-0 right-0"
        style={{height: '100%'}}>
        <View
          style={{
            height: '70%',
            backgroundColor: Colors.primary,
            borderBottomRightRadius: 80,
            borderBottomLeftRadius: 80,
          }}></View>
      </View>
      <View
        className="absolute z-10 top-0 left-0 right-0 bg-transparent p-7"
        style={{height: '100%'}}>
        <View className="flex-row justify-between">
          <View
            className="rounded-full justify-center items-center"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              height: 60,
              width: 60,
            }}>
            <Icon name="arrow-left" size={30} color="#FFF" />
          </View>
          <View
            className="rounded-full justify-center items-center"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.6)',
              height: 60,
              width: 60,
            }}>
            <Icon name="plus" size={30} color="#FFF" />
          </View>
        </View>
        <View className="w-full mt-32">
          <View className="flex flex-row gap-1 justify-between">
            <View
              className="w-3/12 h-8 rounded-full justify-center items-center"
              style={{backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
              <Text className="font-black text-white">Pomodoro</Text>
            </View>
            <View className="w-3/12 h-8 rounded-full justify-center items-center">
              <Text className="font-black text-white">Short Break</Text>
            </View>
            <View className="w-3/12 h-8 rounded-full justify-center items-center">
              <Text className="font-black text-white">Long Break</Text>
            </View>
          </View>
          <View className="pt-10 justify-center items-center">
            <Text className="font-black text-white text-8xl">25:00</Text>
          </View>
        </View>
        <FlatList
          horizontal
          className="mt-6"
          data={[1, 2, 3]}
          style={{
            marginRight: -28,
          }}
          contentContainerStyle={{
            gap: 20,
          }}
          renderItem={({item, index}) => (
            <View
              className={`h-full w-80 shadow-2xl rounded-3xl ${
                index === 2 ? 'mr-6' : ''
              }`}
              style={{
                borderWidth: 4,
                borderStyle: 'solid',
                borderColor: '#dde8eb',
                overflow: 'hidden',
                backgroundColor: '#FFF',
              }}>
              <View
                className="rounded-full justify-center items-center"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  height: 60,
                  width: 60,
                }}>
                <Icon name="arrow-left" size={30} color="#FFF" />
              </View>
            </View>
          )}
        />
        <View
          className="w-full h-20 mt-10 rounded-full items-center flex-row px-3"
          style={{backgroundColor: Colors.primary}}>
          <View
            className="rounded-full justify-center items-center"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.5)',
              height: 60,
              width: 60,
            }}>
            <Icon name="arrow-right" size={30} color="#FFF" />
          </View>
          <Text className="text-white font-black text-4xl ml-14">Start</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default App;
