import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ms, s, vs } from 'react-native-size-matters';

const Googlebutton = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btn}>
        <Image source={require('../assets/google.png')} style={styles.image} />
        <Text style={styles.btntext}>Continue with Google</Text>
      </TouchableOpacity>
      
    </View>
  );
};

export default Googlebutton;

const styles = StyleSheet.create({
  image: { width: s(40), height: vs(40) },
  container: { marginHorizontal: s(20), marginTop: s(20) },
  btn: {
    height: vs(60),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: s(270),
    borderRadius: ms(6),
    justifyContent: 'center',
    borderColor: '#2e91cf',
    backgroundColor: '#fff4f4',
  },
  btntext: {
    marginStart: s(15),
    fontSize: ms(18),
    color: '#0000',
    fontFamily: 'NovaFlat-Regular',
    marginBottom: s(10),
  },


});
