import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { s, vs } from 'react-native-size-matters';

const Continuebtn = ({ disabled, onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
      onPress={onPress}
        disabled={disabled}
        style={[styles.btn, { opacity: disabled ? 0.3 : 1 }]}
      >
        <Text style={styles.btntext}>Continue</Text>
        <Image
          source={require('../assets/right-arrow.png')}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Continuebtn;

const styles = StyleSheet.create({
  container: { marginTop: s(14), marginHorizontal: s(20) },
  btn: {
    height: s(50),
    width: vs(270),
    backgroundColor: '#79bee9',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: s(10),
    flexDirection: 'row',
  },
  image: { height: s(30), width: vs(40), marginStart: s(10) },
  btntext: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: s(16),
    fontFamily: 'NovaFlat-Regular',
  },
});
