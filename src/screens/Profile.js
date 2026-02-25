import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Setting from '../screens/drawer/Setting';
import { s } from 'react-native-size-matters';
import Coustomdrawer from '../screens/drawer/Coustomdrawer';

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
          width: '100%',
        },
      }}
      drawerContent={props => <Coustomdrawer {...props} />}
    >
      <Drawer.Screen
        name="Setting"
        component={Setting}
        options={{
          headerShown: false,
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
    </Drawer.Navigator>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1 },
});
