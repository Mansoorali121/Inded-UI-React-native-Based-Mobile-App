import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Backbutton = () => {
  return (
    <TouchableOpacity style={styles.backButton}>
      <Image
        source={require('../assets/left-arrow.png')}
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default Backbutton;

const styles = StyleSheet.create({
  backButton: {
    backgroundColor: '#fff4f4b5',
    padding: s(10),
    borderRadius: s(12),
    height: s(40),
    width: vs(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: { width: s(20), height: vs(20) },
});
