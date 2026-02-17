import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BackButton from '../components/Backbutton';
import HomeBtn from '../components/HomeBtn';
import { s } from 'react-native-size-matters';
import Indedlogo from '../components//Indedlogo';

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headercontainer}>
        <BackButton />
        <HomeBtn />
      </View>
      {/* Indeed Logo Here */}
      <Indedlogo />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: { paddingHorizontal: s(20), flex: 1, backgroundColor: '#fff' },
  headercontainer: {
    flexDirection: 'row',
    top: s(40),
    justifyContent: 'space-between',
    marginBottom: s(50),
  },
});
