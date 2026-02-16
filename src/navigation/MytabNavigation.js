import { StyleSheet, Text, View } from 'react-native';
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
        <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Myjobs"
        component={MyJobs}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Messages"
        component={Messages}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MytabNavigation;

const styles = StyleSheet.create({});
