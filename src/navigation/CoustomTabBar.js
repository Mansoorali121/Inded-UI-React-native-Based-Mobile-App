import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const CoustomTabBar = ({ state, descriptors, navigation }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 80,
        backgroundColor: '#fff',
        justifyContent: 'space-evenly',
        alignItems: 'center',
      }}
    >
      {state.routes.map((tab, index) => {
        const color = state.index == index ? 'blue' : 'black';
        return (
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
              borderTopWidth: state.index == index ? 2 : 0,
              borderTopColor: 'blue',
              height: '100%',
              justifyContent: 'center',
            }}
            onPress={() => navigation.navigate(tab.name)}
          >
            <Image
              source={
                tab.name === 'Home'
                  ? require('../assets/home.png')
                  : tab.name === 'Myjobs'
                  ? require('../assets/job-advertisement.png')
                  : tab.name === 'Messages'
                  ? require('../assets/comment.png')
                  : require('../assets/user.png')
              }
              style={{
                height: 24,
                width: 24,
                tintColor: color,
              }}
            />
            <Text style={{ color: color }}>{tab.name}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default CoustomTabBar;

const styles = StyleSheet.create({});
