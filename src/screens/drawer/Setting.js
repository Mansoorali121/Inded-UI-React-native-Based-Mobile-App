import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { s } from 'react-native-size-matters';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flexDirection: 'row',
        marginHorizontal: s(10),
        justifyContent: 'space-between',
      }}
    >
      <TouchableOpacity>
        <Text>Drawer Screen is there</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <Image
          source={require('../../assets/menu.png')}
          style={{ height: s(40), width: s(40) }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
