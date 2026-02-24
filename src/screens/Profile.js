import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import D1 from "../screens/D1";
import D2 from "../screens/D2";


const Drawer = createDrawerNavigator();

const Profile = () => {

  
  return (
    <Drawer.Navigator screenOptions={{
      drawerPosition:"right"
    }}>
      <Drawer.Screen name="D1" component={D1} />
      <Drawer.Screen name="D2" component={D2} />
    </Drawer.Navigator>
  )
}

export default Profile;

const styles = StyleSheet.create({
  container:{backgroundColor:"#fff",flex:1}
})