import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const HomeBtn = () => {
  return (
    <TouchableOpacity style={styles.homebtn}>
      <Image source={require('../assets/home.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default HomeBtn;

const styles = StyleSheet.create({
  image: { width: s(20), height: vs(20) },
  homebtn: {
    backgroundColor: '#fff4f4b5',
    padding: s(10),
    borderRadius: s(12),
    height: s(40),
    width: vs(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
