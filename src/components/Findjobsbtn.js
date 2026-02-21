import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Findjobsbtn = () => {
  return (
    <TouchableOpacity style={styles.btn}>
      <Text style={styles.jobstext}>Find Jobs</Text>
      <Image source={require('../assets/right.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Findjobsbtn;

const styles = StyleSheet.create({
  btn: {
    height: vs(44),
    width: '44%',
    backgroundColor: 'black',
    borderRadius: s(10),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    height: s(20),
    width: '30',
    top: s(10),
    marginStart: s(10),
    color: '#fff',
  },
  jobstext: { color: '#fff', top: s(10), fontWeight: '500', fontSize: s(16) },
});
