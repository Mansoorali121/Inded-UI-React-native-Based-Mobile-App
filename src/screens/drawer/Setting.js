import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { s } from 'react-native-size-matters';
import Settingheader from '../../components/drawer_components/Settingheader';
const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <Settingheader onPress={() => navigation.openDrawer()} />
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container: { marginTop: s(30) },
});
