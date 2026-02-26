import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s } from 'react-native-size-matters';

const Closebtn = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.closeicon}>
      <Image source={require('../../assets/close.png')} style={styles.image} />
    </TouchableOpacity>
  );
};

export default Closebtn;

const styles = StyleSheet.create({
  image: { height: s(24), width: s(24) },
closeicon: {
  marginTop: s(40),
  alignSelf: 'flex-end',
  marginRight: s(20),
}
});
