import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import D1 from '../screens/D1';
import D2 from '../screens/D2';
import Setting from '../screens/drawer/Setting';
import Language from '../screens/drawer/Languuage';
import { s } from 'react-native-size-matters';
import Coustomdrawer from "../screens/drawer/Coustomdrawer";

const Drawer = createDrawerNavigator();

const Profile = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        drawerStyle: {
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          width: "100%",
          
        },
        
      }}
      drawerContent={(props)=> <Coustomdrawer {...props} />}
    >
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown:false,
          drawerIcon: ({ size, focused }) => {
            return (
              <Image
                source={require('../assets/settings.png')}
                style={{
                  width: size,
                  height: size,
                  tintColor: focused ? 'blue' : 'black',
                }}
              />
            );
          },
          drawerLabel: ({ size, focused }) => {
            return (
              <Text
                style={{ color: focused ? 'blue' : 'black', fontSize: s(18) }}
              >
                Settings
              </Text>
            );
          },
        }}
      />
      <Drawer.Screen
        name="Language"
        component={Language}
        options={{
          drawerIcon: ({ size, color }) => {
            return (
              <Image
                source={require('../assets/home.png')}
                style={{ height: size, width: size, tintColor: color }}
              />
            );
          },
           drawerLabel: ({ size, focused }) => {
            return (
              <Text
                style={{ color: focused ? 'blue' : 'black', fontSize: s(18) }}
              >
                Country and language
              </Text>
            );
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
});
