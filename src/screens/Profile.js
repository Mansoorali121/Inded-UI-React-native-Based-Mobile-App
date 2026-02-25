import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import D1 from '../screens/D1';
import D2 from '../screens/D2';
import Setting from '../screens/drawer/Setting';
import Language from '../screens/drawer/Languuage';

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
        },
      }}
    >
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          drawerIcon: ({size,color}) => {
            return <Image source={require('../assets/settings.png')}
            style={{width:size,height:size, tintColor:color}}
            />;
          },
        }}
      />
      <Drawer.Screen
        name="Language"
        component={Language}
        options={{
          drawerIcon: ({size,color}) => {
            return <Image source={require('../assets/home.png')} 
            style={{height:size,width:size,tintColor:color}}
            />;
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
