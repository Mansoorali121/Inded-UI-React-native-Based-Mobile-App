import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { s } from 'react-native-size-matters';
import Settingheader from '../../components/drawer_components/Settingheader';
import D_header from '../../components/drawer_components/D_header';
import Details from '../../components/drawer_components/Details';
import EmployerD from '../../components/drawer_components/EmployerD';

const Setting = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <Settingheader onPress={() => navigation.openDrawer()} />
      </View>
      <View style={styles.itemscontainer}>
        <D_header />
        <Details />
        <EmployerD />
      </View>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  container2: { marginTop: s(30) },
  container: { flex: 1, backgroundColor: '#fff' },
  itemscontainer: { paddingHorizontal: s(20) },
});
