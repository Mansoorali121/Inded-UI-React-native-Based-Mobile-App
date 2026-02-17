import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SplashHeader from '../components/SplashHeader';
import Mybutton from '../components/Mybutton';
import { s, vs } from 'react-native-size-matters';

const Splash = () => {
  return (
    <View style={styles.container}>
      <SplashHeader />
      <View style={styles.buttocontainer}>
        <Mybutton title="Signin" color="blue" textcolor="#fff" />
        <Mybutton title="create an account" color="#fff" textcolor="blue" />
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: vs(30) },
  buttocontainer: { marginTop: s(30), gap: s(12) },
});
