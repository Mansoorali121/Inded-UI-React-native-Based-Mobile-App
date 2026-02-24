import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Reportjob = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Image style={styles.image} source={require('../assets/report.png')} />
        <Text style={styles.btntext}>Report Job</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Reportjob;

const styles = StyleSheet.create({
  container: { marginHorizontal: s(20), top: s(-20) },
  image: { height: s(24), width: s(24) },
  btn: {
    width: '100%',
    backgroundColor: '#fffcfce4',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: s(10),
    height: s(60),
  },
  btntext: {
    color: '#0000',
    fontWeight: 'bold',
    fontSize: s(16),
    marginStart: s(10),
  },
});
