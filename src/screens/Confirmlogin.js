import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import BackButton from '../components/Backbutton';
import HomeBtn from '../components/HomeBtn';
import Indedlogo from '../components/Indedlogo';

const Confirmlogin = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <BackButton onPress={() => navigation.goBack()} />
        <HomeBtn />
      </View>
      {/* Indeed Logo Here */}
      <Indedlogo />
    </View>
  );
};

export default Confirmlogin;

const styles = StyleSheet.create({
  container: { paddingHorizontal: s(20), flex: 1, backgroundColor: '#fff' },
  headercontainer: {
    flexDirection: 'row',
    top: s(40),
    justifyContent: 'space-between',
    marginBottom: s(50),
  },
});
