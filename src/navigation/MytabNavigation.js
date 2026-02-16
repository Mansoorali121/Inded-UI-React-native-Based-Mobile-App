import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import MyJobs from '../screens/MyJobs';
import Messages from '../screens/Messages';
import Profile from '../screens/Profile';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

const MytabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            height: 60,
            borderTopWidth: 0,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => {
              return (
                <Image
                  style={{ height: size, width: size, tintColor: color }}
                  source={require('../assets/home.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Myjobs"
          component={MyJobs}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => {
              return (
                <Image
                  style={{ height: size, width: size, tintColor: color }}
                  source={require('../assets/job-advertisement.png')}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Messages"
          component={Messages}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => {
              return (
                <Image
                  source={require('../assets/comment.png')}
                  style={{ height: size, width: size, tintColor: color }}
                />
              );
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color }) => {
              return (
                <Image
                  source={require('../assets/user.png')}
                  style={{ height: size, width: size, tintColor: color }}
                />
              );
            },
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MytabNavigation;

const styles = StyleSheet.create({});
