import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import SplashHeader from '../components/SplashHeader';
import Mybutton from '../components/Mybutton';
import { s, vs } from 'react-native-size-matters';
import Splashfooter from '../components/Splashfooter';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <SplashHeader />
      <View style={styles.buttocontainer}>
        <Mybutton
          title="Signin"
          color="blue"
          textcolor="#fff"
          onPress={() => navigation.navigate('Login')}
        />
        <Mybutton title="create an account" color="#fff" textcolor="blue" />
        {/* New text  */}
        <Text style={styles.linktext}>
          Recruiment?Visit{' '}
          <Text style={styles.sublink}>Indeed for employers</Text>
        </Text>
      </View>
      <Splashfooter />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingHorizontal: vs(30) },
  buttocontainer: { marginTop: s(30), gap: s(12) },
  linktext: { marginTop: s(10), fontSize: s(15), marginStart: s(5) },
  sublink: { color: '#227eb7', textDecorationLine: 'underline' },
});
